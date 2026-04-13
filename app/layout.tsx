import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import Chatbot from '@/components/Chatbot'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'CRMTN - Centre de Recherche sur les Maladies Tropicales Negligees',
  description:
    'Institution de recherche medicale specialisee dans la lutte contre les maladies tropicales negligees basee a Saint-Louis, Senegal.',
  generator: 'v0.app',
  icons: {
    icon: '/logo (3).png',
    apple: '/logo (3).png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <Chatbot language="fr" />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
