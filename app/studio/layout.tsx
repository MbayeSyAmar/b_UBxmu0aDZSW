import { ReactNode } from 'react'

export const metadata = {
  title: 'CRMTN Studio',
}

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>{/* Sanity inserts styles here */}</head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
