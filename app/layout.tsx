import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "JustRestore | Artistic Furniture Transformations by Sabah Bardhan",
    template: "%s | JustRestore",
  },
  description:
    "Discover artistic furniture transformations by Sabah Bardhan at JustRestore. Explore hand-painted furniture, bespoke commissions and creative furniture painting workshops.",
  applicationName: "JustRestore",
  creator: "Sabah Bardhan",
  publisher: "JustRestore",
  openGraph: {
    type: "website",
    siteName: "JustRestore",
    title: "JustRestore | Artistic Furniture Transformations by Sabah Bardhan",
    description:
      "Explore unique furniture transformations, bespoke commissions and creative workshops by artist Sabah Bardhan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
