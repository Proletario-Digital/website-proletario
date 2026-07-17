import type { IEmailProvider, EmailPayload } from "../IEmailProvider";

/**
 * Envia email através do endpoint REST do WordPress.
 *
 * Requer o seguinte snippet no WordPress (functions.php ou plugin):
 * ─────────────────────────────────────────────────────────────────
 * add_action('rest_api_init', function () {
 *   register_rest_route('pd/v1', '/contact', [
 *     'methods'             => 'POST',
 *     'callback'            => 'pd_handle_contact',
 *     'permission_callback' => '__return_true',
 *   ]);
 * });
 *
 * function pd_handle_contact(WP_REST_Request $request): WP_REST_Response {
 *   $p       = $request->get_json_params();
 *   $name    = sanitize_text_field($p['name']    ?? '');
 *   $from    = sanitize_email($p['email']        ?? '');
 *   $subject = sanitize_text_field($p['subject'] ?? '');
 *   $message = sanitize_textarea_field($p['message'] ?? '');
 *   $to      = get_option('admin_email');
 *
 *   if (!$name || !$from || !$subject || !$message)
 *     return new WP_REST_Response(['ok' => false, 'error' => 'Campos em falta'], 422);
 *
 *   $headers = ["Reply-To: $name <$from>", 'Content-Type: text/plain; charset=UTF-8'];
 *   $body    = "Nome: $name\nE-mail: $from\n\nMensagem:\n$message";
 *   $sent    = wp_mail($to, "[$name] $subject", $body, $headers);
 *
 *   return new WP_REST_Response(['ok' => $sent], $sent ? 200 : 500);
 * }
 * ─────────────────────────────────────────────────────────────────
 *
 * Configuração no .env.local:
 *   VITE_WP_API_URL=https://cms.proletariodigital.com/wp-json/wp/v2
 *   VITE_WP_CONTACT_NONCE=   (opcional — obter via wp_create_nonce('wp_rest'))
 */
export class WpEmailProvider implements IEmailProvider {
  private readonly endpoint: string;

  constructor(
    wpApiBase: string,
    private readonly nonce: string = "",
  ) {
    // wpApiBase → https://cms.exemplo.com/wp-json/wp/v2
    // endpoint  → https://cms.exemplo.com/wp-json/pd/v1/contact
    this.endpoint = wpApiBase.replace(/\/wp\/v2\/?$/, "/pd/v1/contact");
  }

  async send(payload: EmailPayload): Promise<void> {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (this.nonce) headers["X-WP-Nonce"] = this.nonce;

    const res = await fetch(this.endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => res.statusText);
      throw new Error(`WpEmailProvider: ${res.status} — ${text}`);
    }

    const data = await res.json().catch(() => ({ ok: true }));
    if (data.ok === false) throw new Error(data.error ?? "WordPress rejeitou o pedido");
  }
}
