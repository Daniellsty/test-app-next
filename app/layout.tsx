import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Context/ContextTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyTestProject",
  description: "A demo project showing my Next.js skills.",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "MyTestProject",
    description: "A demo project showing my Next.js skills.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MyTestProject",
    description: "A demo project showing my Next.js skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
