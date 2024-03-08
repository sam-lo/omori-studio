import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header"
import React from "react";

export const metadata: Metadata = {
  title: "Omori Studio",
  description: "Treasure the moment",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
}
