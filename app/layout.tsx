import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const uncutSans = localFont({
  src: [
    {
      path: "./fonts/Uncut-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Uncut-Sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Uncut-Sans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Uncut-Sans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Potpie — AI-native SDLC automation for large scale engineering",
  description:
    "Potpie unifies your code, tickets, docs, architecture, and workflows into a living context graph your agents reason over — deployed in your environment, owned by you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${uncutSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
