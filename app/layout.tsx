import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoveFlix",
  description: "A private birthday streaming website made with love."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
