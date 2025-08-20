import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soundmind - AI-Powered Voice Analysis for Mental Wellness",
    template: "%s | Soundmind"
  },
  description: "Transform your mental wellness journey with AI-powered voice analysis. Discover emotional patterns, track your mood, and get personalized insights through advanced voice technology.",
  keywords: ["voice analysis", "mental health", "AI", "mood tracking", "emotional wellness", "voice technology", "mental wellness"],
  authors: [{ name: "Soundmind Team" }],
  creator: "Soundmind",
  publisher: "Soundmind",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://getsoundmind.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getsoundmind.com",
    siteName: "Soundmind",
    title: "Soundmind - AI-Powered Voice Analysis for Mental Wellness",
    description: "Transform your mental wellness journey with AI-powered voice analysis. Discover emotional patterns and get personalized insights.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soundmind - AI Voice Analysis for Mental Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soundmind - AI-Powered Voice Analysis for Mental Wellness",
    description: "Transform your mental wellness journey with AI-powered voice analysis. Discover emotional patterns and get personalized insights.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ffe366061f971116',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
