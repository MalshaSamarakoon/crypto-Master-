// layout.tsx
"use client";
import { Inter } from "next/font/google";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { ReactNode } from "react"; // Import ReactNode
import AdminLayout from "@/app/components/AdminLayout"; // Import AdminLayout
import { useRouter } from "next/navigation"; // Import useRouter for route-based checks
import "@/styles/globals.css";
import "@/styles/colors.css";

const inter = Inter({ subsets: ["latin"] });



interface RootLayoutProps {
  children: ReactNode;
  isAdminPage: boolean; // Add isAdminPage prop
}

export default function RootLayout({ children, isAdminPage }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {isAdminPage ? (
          // Render the page content directly for admin pages
          children
        ) : (
          // Render common layout components (Header and Footer) for non-admin pages
          <>
            <Header />
            <div id="skip-nav">{children}</div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}























// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Header from "@/app/components/layout/Header";
// import Footer from "@/app/components/layout/Footer";
// import "@/styles/globals.css";
// import "@/styles/colors.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Moon Education",
//   description:
//     "Empowering individuals with knowledge and tech solutions to navigate tomorrow s world.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <div id="skip-nav">{children}</div>
//         <Footer />
//       </body>
//     </html>
//   );
// }
