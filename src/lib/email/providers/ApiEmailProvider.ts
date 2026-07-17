import type { IEmailProvider, EmailPayload } from "../IEmailProvider";

export class ApiEmailProvider implements IEmailProvider {
  constructor(
    private readonly url: string,
    private readonly secret: string = "",
    private readonly to: string = "contacto@proletariodigital.com",
  ) {}

  async send(payload: EmailPayload): Promise<void> {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (this.secret) headers["Authorization"] = `Bearer ${this.secret}`;

    const res = await fetch(this.url, {
      method: "POST",
      headers,
      body: JSON.stringify({ ...payload, to: this.to }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => res.statusText);
      throw new Error(`ApiEmailProvider: ${res.status} — ${text}`);
    }

    const data = await res.json().catch(() => ({ ok: true }));
    if (data.ok === false) throw new Error(data.error ?? "Server rejected the request");
  }
}
