import type { IEmailProvider, EmailPayload } from "../IEmailProvider";

/**
 * Envia email via Web3Forms (https://web3forms.com).
 *
 * Completamente gratuito e sem limites. Sem código no servidor.
 *
 * Para activar:
 *   1. Vai a https://web3forms.com
 *   2. Introduz o teu email e clica "Create Access Key"
 *   3. Confirma o email recebido
 *   4. Copia a access key para o .env.local:
 *      VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export class Web3FormsProvider implements IEmailProvider {
  private static readonly API = "https://api.web3forms.com/submit";

  constructor(private readonly accessKey: string) {}

  async send(payload: EmailPayload): Promise<void> {
    const res = await fetch(Web3FormsProvider.API, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: this.accessKey,
        name:       payload.name,
        email:      payload.email,
        subject:    payload.subject,
        message:    payload.message,
      }),
    });

    const data = await res.json().catch(() => ({ success: false, message: res.statusText }));

    if (!data.success)
      throw new Error(`Web3Forms: ${data.message ?? "Falha ao enviar"}`);
  }
}
