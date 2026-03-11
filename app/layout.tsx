import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "L'Alternativa 0.1",
    template: "%s | L'Alternativa 0.1",
  },
  description:
    "Pizza artigianale contemporanea a Bologna. 48h di lievitazione naturale.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "L'Alternativa 0.1",
    description:
      "Pizza artigianale contemporanea a Bologna. Prenota il tuo tavolo.",
    url: "https://tuodominio.it",
    siteName: "L'Alternativa 0.1",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
<meta name="viewport" content="width=device-width, initial-scale=1" />