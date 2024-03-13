import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Omori Studio",
  description: "Treasure the moment",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
    <body>
    <Header />
    {children}
    <Footer />
    </body>
    </html>
  );
}
