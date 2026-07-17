/**
 * Configuração centralizada das redes sociais.
 * Altere os valores no ficheiro .env.local — o site actualiza automaticamente.
 *
 * Variáveis disponíveis:
 *   VITE_SOCIAL_FACEBOOK   → URL completo da página de Facebook
 *   VITE_SOCIAL_INSTAGRAM  → URL completo do perfil de Instagram
 *   VITE_SOCIAL_LINKEDIN   → URL completo da empresa no LinkedIn
 *   VITE_SOCIAL_TIKTOK     → URL completo do TikTok (opcional)
 *   VITE_WA_PHONE_NUMBER   → Número WhatsApp sem + (ex: 244951461526)
 *   VITE_PHONE_NUMBER      → Número de telefone para chamadas
 */
export const SOCIAL = {
  facebook:  import.meta.env.VITE_SOCIAL_FACEBOOK  || "https://facebook.com/proletariodigital",
  instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || "https://instagram.com/proletariodigital",
  linkedin:  import.meta.env.VITE_SOCIAL_LINKEDIN  || "https://linkedin.com/company/proletariodigital",
  tiktok:    import.meta.env.VITE_SOCIAL_TIKTOK    || "",
  whatsapp:  `https://wa.me/${import.meta.env.VITE_WA_PHONE_NUMBER || "244951461526"}`,
  phone:     import.meta.env.VITE_PHONE_NUMBER || "244951461526",
  waNumber:  import.meta.env.VITE_WA_PHONE_NUMBER || "244951461526",
} as const;
