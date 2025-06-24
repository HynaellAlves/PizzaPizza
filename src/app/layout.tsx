import "./globals.css";

import { Lacquer, Nunito } from "next/font/google";
import Footer from "./Components/Footer";
import { Metadata } from "next";
import { createClient } from "@/prismicio";

const nunitoRegular = Nunito({
  variable: "--font-nunito-regular",
  subsets: ["latin"],
});

const lacquerRegular = Lacquer({
  variable: "--font-lacquer-regular",
  subsets: ["latin"],
  weight: "400"
});

const client = createClient();
const settings = (await client.getSingle("settings")).data;

export const metadata: Metadata = {
  title: settings.titulo_pagina,
  description: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoRegular.variable} ${lacquerRegular.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
