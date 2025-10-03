// app/layout.tsx

import "./globals.css";
import { Oswald, Raleway } from "next/font/google";
import type { Metadata } from "next";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Designed by Arushi - A Product Designer",
  description: "Designed by Arushi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
