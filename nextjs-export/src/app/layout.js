import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
});

export const metadata = {
  metadataBase: new URL('https://cctvbaba.com'),
  title: {
    default: 'Baba Sales (cctvbaba.com) – CCTV, Biometric & IT Solutions Agra',
    template: '%s | Baba Sales · cctvbaba.com',
  },
  description:
    'Baba Sales (cctvbaba.com), Agra’s GeM & Udyam registered CCTV, biometric, interactive flat panel & enterprise IT partner with 12+ years serving Defence, Universities & Businesses.',
  keywords: [
    'CCTV camera Agra',
    'Baba Sales Agra',
    'cctvbaba.com',
    'biometric attendance machine Agra',
    'interactive flat panel Agra',
    'GeM IT supplier Uttar Pradesh',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cctvbaba.com/',
    siteName: 'Baba Sales · cctvbaba.com',
    title: 'Baba Sales (cctvbaba.com) – CCTV, Biometric & IT Solutions Agra',
    description:
      '12+ years securing Agra Air Force Station, Agra University, AMU & IIIT Lucknow. GeM & Udyam registered CCTV, biometric, interactive panels & IT supply.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baba Sales (cctvbaba.com) – CCTV, Biometric & IT Solutions Agra',
    description:
      'Trusted by Agra Air Force Station, Agra University & IIIT Lucknow. 500+ security and IT deployments across Uttar Pradesh.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://cctvbaba.com/#organization',
      name: 'Baba Sales',
      alternateName: 'CCTV Baba Agra',
      url: 'https://cctvbaba.com',
      telephone: ['+91-9410254350', '+91-8047531947'],
      email: 'cctvagra1@gmail.com',
      foundingDate: '2012',
      founder: {
        '@type': 'Person',
        name: 'Devesh Agrawal',
        jobTitle: 'Chief Executive Officer',
      },
      sameAs: ['https://share.google/rSuRbsWFwzL10PjnT'],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '22:00',
        },
      ],
      address: [
        {
          '@type': 'PostalAddress',
          name: 'Kamla Nagar Head Office',
          streetAddress:
            'Agrasen Road, near Nature Resort, Renuka Bagh, Bhur Ka Bagh, G.G. Puram, Kamla Nagar',
          addressLocality: 'Agra',
          addressRegion: 'Uttar Pradesh',
          postalCode: '282005',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          name: 'Sanjay Place Commercial Office',
          streetAddress: 'G-24, Block 17, Cloth Market (Kapda Market), Near G.G. Hospital, Sanjay Place',
          addressLocality: 'Agra',
          addressRegion: 'Uttar Pradesh',
          postalCode: '282002',
          addressCountry: 'IN',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#1A1917] antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
