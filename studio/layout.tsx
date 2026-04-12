import { defineConfig } from 'next'

export const metadata = {
  title: 'CRMTN Studio',
  description: 'Sanity Content Management System for CRMTN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
