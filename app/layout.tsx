import type { Metadata } from "next";
import { Inter, PT_Sans_Caption } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const ptSansCaption = PT_Sans_Caption({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://site-set-blog.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://site-set-blog.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${ptSansCaption.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
