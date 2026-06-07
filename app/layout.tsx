import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import SecurityInit from "@/components/ui/SecurityInit";
import FloatingContact from "@/components/ui/FloatingContact";
import Navbar from "@/components/ui/Navbar";

const lora = Lora({ 
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

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
      <body className={`${lora.variable} bg-zinc-50 text-zinc-950 antialiased`}>
        <Navbar />
        {/* <SecurityInit /> */}
        {children}
        
        {/* Global sticky lead capture */}
        <FloatingContact />
      </body>
    </html>
  );
}