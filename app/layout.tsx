import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { siteDescription, siteName, siteUrl, whatsappUrl } from '@/lib/site';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vistoria de Imóvel Novo em João Pessoa | Recebimento de Chaves',
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName,
    title: 'Vistoria de Imóvel Novo em João Pessoa | Recebimento de Chaves',
    description: siteDescription,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Vistoria de Imóveis JP — vistoria técnica em João Pessoa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vistoria de Imóvel Novo em João Pessoa | Recebimento de Chaves',
    description: siteDescription,
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    image: `${siteUrl}/assets/vistoria_01.jpeg`,
    telephone: '+55 83 99936-4840',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55 83 99936-4840',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
      url: whatsappUrl,
    },
    areaServed: {
      '@type': 'City',
      name: 'João Pessoa',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'PB',
        addressCountry: 'BR',
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    sameAs: ['https://instagram.com/vistoriadeimoveisjp'],
  };

  return (
    <html lang="pt-BR">
      <body className={geist.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
