/**
 * emailService.ts — Serviço de envio de email agnóstico.
 *
 * Prioridade de envio (configura via .env.local):
 *
 *   1. Teu próprio servidor  → VITE_EMAIL_API_URL
 *      Qualquer endpoint HTTP que aceite POST com JSON e devolva { ok: true }.
 *      Ver referência em /src/server/send-email.php
 *
 *   2. EmailJS               → VITE_EMAILJS_SERVICE_ID + TEMPLATE_ID + PUBLIC_KEY
 *      Serviço cloud gratuito até 200 emails/mês (https://emailjs.com)
 *
 *   3. mailto: (fallback)    → abre o cliente de email do utilizador.
 */

import emailjs from "@emailjs/browser";

export interface EmailPayload {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

/* ─── Configuração (lida do .env.local) ─────────────────────────── */
const API_URL          = import.meta.env.VITE_EMAIL_API_URL       || "";
const API_SECRET       = import.meta.env.VITE_EMAIL_API_SECRET    || "";   // opcional — Bearer token
const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "";
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "";
const TO_ADDRESS       = import.meta.env.VITE_CONTACT_EMAIL       || "contacto@proletariodigital.com";

/* ─── 1. Envio via servidor próprio ─────────────────────────────── */
async function sendViaAPI(payload: EmailPayload): Promise<void> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (API_SECRET) headers["Authorization"] = `Bearer ${API_SECRET}`;

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name:    payload.name,
      email:   payload.email,
      subject: payload.subject,
      message: payload.message,
      to:      TO_ADDRESS,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`API error ${res.status}: ${text}`);
  }

  const data = await res.json().catch(() => ({ ok: true }));
  if (data.ok === false) throw new Error(data.error || "Falha no servidor de email");
}

/* ─── 2. Envio via EmailJS ──────────────────────────────────────── */
async function sendViaEmailJS(payload: EmailPayload): Promise<void> {
  await emailjs.send(
    EMAILJS_SERVICE,
    EMAILJS_TEMPLATE,
    {
      from_name: payload.name,
      reply_to:  payload.email,
      subject:   payload.subject,
      message:   payload.message,
    },
    EMAILJS_PUBLIC
  );
}

/* ─── 3. Fallback mailto: ───────────────────────────────────────── */
function sendViaMailto(payload: EmailPayload): void {
  const body = encodeURIComponent(
    `Nome: ${payload.name}\nE-mail: ${payload.email}\n\n${payload.message}`
  );
  window.open(
    `mailto:${TO_ADDRESS}?subject=${encodeURIComponent(payload.subject)}&body=${body}`,
    "_blank"
  );
}

/* ─── Função principal — tenta cada método por ordem ───────────── */
export async function sendEmail(payload: EmailPayload): Promise<void> {
  if (API_URL) {
    await sendViaAPI(payload);
    return;
  }

  if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_PUBLIC) {
    await sendViaEmailJS(payload);
    return;
  }

  /* Último recurso — abre o cliente de email local */
  sendViaMailto(payload);
}
