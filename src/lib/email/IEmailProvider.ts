export interface EmailPayload {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

export interface IEmailProvider {
  send(payload: EmailPayload): Promise<void>;
}
