import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// نقطة واحدة لتغيير الدومين بالكامل
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sirbit-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sirbit – Digital Software Solutions Agency",
    template: "%s | Sirbit",
  },
  description:
    "Sirbit is a software agency that builds faster, smarter and scalable digital products using Laravel, Next.js, mobile apps and cloud technologies.",
  alternates: {
    canonical: siteUrl + "/",
    languages: {
      en: siteUrl + "/en",
      ar: siteUrl + "/ar",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sirbit – Digital Software Solutions Agency",
    description:
      "We help startups and companies build modern web & mobile experiences with Laravel, Next.js and cloud-native architectures.",
    siteName: "Sirbit",
    images: [
      {
        url: "/og-image.png", // حط صورة 1200x630 في public بهذا الاسم
        width: 1200,
        height: 630,
        alt: "Sirbit website preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirbit – Digital Software Solutions Agency",
    description:
      "Sirbit builds reliable web & mobile platforms using Laravel, Next.js and modern cloud tooling.",
    images: ["/og-image.png"],
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}