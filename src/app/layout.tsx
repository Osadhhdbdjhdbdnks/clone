import type { Metadata } from "next";
import { canela, monumentGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klimt Wine",
  description:
    "Explore the taste of KLIMT Wines - a collection crafted with passion and inspired by art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monumentGrotesk.variable} ${canela.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-klimt-background text-klimt-brown">
        {children}
      </body>
    </html>
  );
}
