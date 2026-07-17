import emailjs from "@emailjs/browser";
import type { IEmailProvider, EmailPayload } from "../IEmailProvider";

export class EmailJsProvider implements IEmailProvider {
  constructor(
    private readonly serviceId:  string,
    private readonly templateId: string,
    private readonly publicKey:  string,
  ) {}

  async send(payload: EmailPayload): Promise<void> {
    await emailjs.send(
      this.serviceId,
      this.templateId,
      {
        from_name: payload.name,
        reply_to:  payload.email,
        subject:   payload.subject,
        message:   payload.message,
      },
      this.publicKey,
    );
  }
}
