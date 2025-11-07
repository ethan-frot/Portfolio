import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "EF Portfolio",
  description: "Portfolio personnel de EF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
        <Navigation />
        <main className="ml-24 md:ml-[120px] pt-24 md:pt-[120px]">{children}</main>
      </body>
    </html>
  );
}
