import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import MediaDropdown from "./components/media-dropdown";
import Footer from "./components/footer";
import MobileDropdown from "./components/mobile-menu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// import fonts
import { Poppins, La_Belle_Aurore, Oxygen, Hind } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const la_belle_aurora = La_Belle_Aurore({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-aurora",
});

export const oxygen = Oxygen({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});

export const hind = Hind({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Jacob A. Millman",
  description: "NYC based actor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${la_belle_aurora.variable} ${oxygen.variable} ${hind.variable} bg-[var(--base-bg-color)] text-[var(--light-text-color)] relative min-h-screen`}
      >
        <Header />
        <MobileDropdown />
        <main className="font-sans relative contentContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
