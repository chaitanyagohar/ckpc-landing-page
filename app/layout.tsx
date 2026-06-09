import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import SecurityInit from "@/components/ui/SecurityInit";
import FloatingContact from "@/components/ui/FloatingContact";
import Navbar from "@/components/ui/Navbar";
import { Roboto, Nunito_Sans } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500']
})

// Load Nunito Sans (specifically grabbing the Semi-bold 600 weight we need)
const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700'] 
})

export const metadata: Metadata = {
  title: "CKPC Winds of Change",
  description: "The Address of Beautiful Change in Yelahanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" 
        />
      </head>
      <body className={`${nunito.variable} bg-zinc-50 text-zinc-950 antialiased`}>
        <Navbar />
        {/* <SecurityInit /> */}
        {children}
        
        {/* Global sticky lead capture */}
        <FloatingContact />
      </body>
    </html>
  );
}