import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Działki za lasem',
  description: 'Działki za lasem - tanie działki budwlane w okolicy Warszawy',
  keywords: [''],
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://dzailkizalasem.pl'),
  openGraph: {
    title: 'Działki za lasem',
    locale: 'pl_PL',
    type: 'website',
    description: 'Działki za lasem - tanie działki budwlane w okolicy Warszawy',
    url: 'https://dzailkizalasem.pl',
    images: '/opengraph-image.jpeg'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
