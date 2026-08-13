import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wadaje Motors India | Launching Soon",
  description:
    "Wadaje Motors India — Building the Future of Agricultural Engineering and Manufacturing. Verify our official business documents and connect with us ahead of launch.",
  keywords: [
    "Wadaje Motors India",
    "Agricultural Engineering",
    "Manufacturing",
    "GST Certificate",
    "Udyam Registration",
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
