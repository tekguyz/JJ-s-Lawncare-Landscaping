import type {Metadata} from 'next';
import { Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JJ's Lawncare & Landscaping | Deerfield Beach Tree Trimming",
  description: 'Professional lawn care, landscaping, and specialized tree trimming in Deerfield Beach, FL. Licensed (Lic. # B1298) and Insured. Call or text for a free quote.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapeService",
    "name": "JJ's Lawncare & Landscaping",
    "image": "https://picsum.photos/seed/landscaping/1920/1080",
    "description": "Professional lawn care, landscaping, and specialized tree trimming in Deerfield Beach, FL.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "340 SW 1st Terrace",
      "addressLocality": "Deerfield Beach",
      "addressRegion": "FL",
      "postalCode": "33441",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.3236,
      "longitude": -80.1000
    },
    "url": "https://ais-dev-f3moyhpwepi3s5okdxytpg-3822686412.us-west2.run.app",
    "telephone": "+17547792837",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Deerfield Beach"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landscaping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lawn Maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Trimming"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping Design"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans bg-white text-asphalt-black flex flex-col min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <div className="bg-asphalt-black text-white text-sm font-bold py-2 px-4 text-center tracking-wider uppercase">
          Licensed & Insured | Lic. # B1298 | Deerfield Beach, FL
        </div>
        {children}
      </body>
    </html>
  );
}
