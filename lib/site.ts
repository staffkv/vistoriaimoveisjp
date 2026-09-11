const fallbackSiteUrl = 'https://vistoriaimoveisjp.com.br';

function normalizeSiteUrl(url: string) {
  return url.replace(/\/$/, '');
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
);

export const siteName = 'Vistoria de Imóveis JP';
export const siteDescription =
  'Vistoria técnica de imóveis novos, pré-compra e pós-obra em João Pessoa e região. Registro fotográfico e relatório técnico.';
export const whatsappUrl =
  'https://wa.me/5583999364840?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20vistoria%20de%20imóvel.';
