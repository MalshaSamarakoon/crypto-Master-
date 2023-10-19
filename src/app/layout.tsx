import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import "@/styles/globals.css";
import "@/styles/colors.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moon Education",
  description:
    "Empowering individuals with knowledge and tech solutions to navigate tomorrow s world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="skip-nav">{children}</div>
      </body>
    </html>
  );
}
