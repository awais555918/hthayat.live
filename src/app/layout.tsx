import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hthayat.live"),
  title: "hthayat.live",
  description: "hthayat.live",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
