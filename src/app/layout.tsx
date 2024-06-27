import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Anybody } from "next/font/google";
import "./globals.css";

import Header from "../components/header";
import Footer from "../components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
});

export const metadata: Metadata = {
  title: "Vita Società Editoriale S.p.A.",
  description: "Vita Società Editoriale S.p.A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${anybody.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
