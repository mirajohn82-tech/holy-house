import type { Metadata } from "next";
import { Poppins, Inter, Aclonica } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400"], variable: "--font-inter", display: "swap" });
const aclonica = Aclonica({ subsets: ["latin"], weight: ["400"], variable: "--font-aclonica", display: "swap" });

export const metadata: Metadata = { title: "Holy House", description: "Holy House — Building Bright Futures" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${aclonica.variable}`}>
      <body>{children}</body>
    </html>
  );
}
