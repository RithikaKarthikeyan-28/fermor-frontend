import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fermor — Your Money Has a Story",
  description:
    "Fermor is a modern fintech platform that helps people understand their finances, make better decisions, and work toward their future goals.",
};

export const viewport = {
  themeColor: "#F7F7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F7F7F2] text-[#171A17] font-sans antialiased selection:bg-[#DDEBE3] selection:text-[#174D3A] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
