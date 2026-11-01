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
    default: "JustRestore | Functional Masterpieces That Tell a Story",
    template: "%s | JustRestore",
  },
  description:
    "Discover the art of furniture transformation with Sabah Bardhan at JustRestore. Explore bespoke furniture commissions, creative workshops and unique artistic transformations.",
  openGraph: {
    type: "website",
    siteName: "JustRestore",
    title: "JustRestore | Functional Masterpieces That Tell a Story",
    description:
      "Artistic furniture transformations, bespoke commissions and creative workshops.",
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
