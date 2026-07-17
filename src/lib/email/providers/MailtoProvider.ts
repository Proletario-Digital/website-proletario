import type { IEmailProvider, EmailPayload } from "../IEmailProvider";

export class MailtoProvider implements IEmailProvider {
  constructor(private readonly to: string = "contacto@proletariodigital.com") {}

  async send(payload: EmailPayload): Promise<void> {
    const body = encodeURIComponent(
      `Nome: ${payload.name}\nE-mail: ${payload.email}\n\n${payload.message}`,
    );
    window.open(
      `mailto:${this.to}?subject=${encodeURIComponent(payload.subject)}&body=${body}`,
      "_blank",
    );
  }
}
