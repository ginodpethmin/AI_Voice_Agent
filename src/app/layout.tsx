import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar"; // Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calmly - AI Wellness Companion", // Updated title
  description: "Your AI-powered path to mental peace and wellness", // Updated description
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
        <NavBar /> {/* Add this line */}
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          {children}
        </div>
      </body>
    </html>
  );
}