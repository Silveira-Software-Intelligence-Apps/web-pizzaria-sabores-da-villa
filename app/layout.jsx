import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pizzaria Sabores da Villa — Osasco',
  description: 'Produtos selecionados com qualidade garantida. Visite a Pizzaria Sabores da Villa em Osasco e encontre o que você procura.',
  keywords: 'Pizzaria Sabores da Villa, pizzaria, pizzaria Osasco, Osasco, melhor pizzaria, pizzaria profissional',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pizzaria Sabores da Villa',
    description: 'Pizzaria Sabores da Villa — pizzaria em Osasco. Produtos selecionados com qualidade garantida. Visite a Pizzaria Sabores da Villa em Osasco e encontre o que você procura.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Pizzaria Sabores da Villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
