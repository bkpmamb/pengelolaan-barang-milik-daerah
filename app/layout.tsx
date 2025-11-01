// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sipandai BMD - Balkesmas Ambarawa",
  description:
    "Sistem Informasi Pengelolaan Barang Milik Daerah Balkesmas Wilayah Ambarawa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
