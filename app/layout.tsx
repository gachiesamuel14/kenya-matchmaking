import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KenyaMatch - Location-Based Dating for Kenya",
  description: "Connect with people nearby in Kenya. Swipe, match, chat. Localized for counties, Sheng, and M-Pesa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
