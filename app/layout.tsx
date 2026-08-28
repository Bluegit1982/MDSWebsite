import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mellordogschool.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mellor Dog School | Premium Dog Training & Day Care",
    template: "%s | Mellor Dog School",
  },
  description:
    "Professional puppy classes, obedience training, doggy day care, gundog training, and one-to-one support for dogs and owners.",
  keywords: [
    "dog training",
    "puppy classes",
    "obedience training",
    "doggy day care",
    "gundog training",
    "one to one dog training",
    "dog behaviour support",
  ],
  applicationName: "Mellor Dog School",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mellor Dog School",
    description:
      "Professional dog training and care programmes for puppies, family dogs, and working dogs.",
    url: "https://www.mellordogschool.co.uk",
    siteName: "Mellor Dog School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mellor Dog School",
    description:
      "Premium dog training, doggy day care, and behaviour support for dogs and their owners.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F7F2EA] text-[#173A2A]">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
