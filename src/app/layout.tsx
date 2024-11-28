import type { Metadata } from "next";
import { Jua, Mako } from "next/font/google";
import "./globals.css";

// Fonts
const jua = Jua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jua",
});
const mako = Mako({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mako",
});

export const metadata: Metadata = {
  title: "AcademiX info Web",
  description: "Explore the AcademiX platform, revolutionizing school management with cutting-edge technology and personalized support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${jua.variable} ${mako.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
