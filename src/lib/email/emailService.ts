/**
 * emailService.ts — ponto de entrada público.
 *
 * O resto da aplicação só importa `sendEmail` e `EmailPayload`.
 * Nenhum componente conhece qual provider está activo.
 *
 * Para adicionar um novo provider:
 *   1. Cria providers/MeuProvider.ts que implementa IEmailProvider
 *   2. Adiciona a lógica de selecção na factory abaixo
 *   3. Nenhum outro ficheiro precisa de mudar
 */

import type { IEmailProvider, EmailPayload } from "./IEmailProvider";
import { WpEmailProvider }  from "./providers/WpEmailProvider";
import { ApiEmailProvider } from "./providers/ApiEmailProvider";
import { EmailJsProvider }  from "./providers/EmailJsProvider";
import { MailtoProvider }   from "./providers/MailtoProvider";
import { Web3FormsProvider } from "./providers/Web3FormsProvider";

export type { EmailPayload };

/* ─── Factory ────────────────────────────────────────────────────── */
function resolveProvider(): IEmailProvider {
  const wpApiBase    = import.meta.env.VITE_WP_API_URL            || "";
  const wpEnabled    = import.meta.env.VITE_WP_CONTACT_ENABLED    === "true";
  const wpNonce      = import.meta.env.VITE_WP_CONTACT_NONCE      || "";
  const apiUrl       = import.meta.env.VITE_EMAIL_API_URL          || "";
  const apiSecret    = import.meta.env.VITE_EMAIL_API_SECRET       || "";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL          || "contacto@proletariodigital.com";
  const ejsService   = import.meta.env.VITE_EMAILJS_SERVICE_ID     || "";
  const ejsTemplate  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID    || "";
  const ejsPublic    = import.meta.env.VITE_EMAILJS_PUBLIC_KEY     || "";
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY          || "";

  if (wpApiBase && wpEnabled) {
    return new WpEmailProvider(wpApiBase, wpNonce);
  }

  if (web3FormsKey) {
    return new Web3FormsProvider(web3FormsKey);
  }

  if (apiUrl) {
    return new ApiEmailProvider(apiUrl, apiSecret, contactEmail);
  }

  if (ejsService && ejsTemplate && ejsPublic) {
    return new EmailJsProvider(ejsService, ejsTemplate, ejsPublic);
  }

  return new MailtoProvider(contactEmail);
}

/* ─── API pública ────────────────────────────────────────────────── */
export async function sendEmail(payload: EmailPayload): Promise<void> {
  const provider = resolveProvider();
  await provider.send(payload);
}
