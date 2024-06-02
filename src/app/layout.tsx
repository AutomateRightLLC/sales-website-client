import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/assets/css/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automate Right Consulting",
  description: "Automate Right Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
