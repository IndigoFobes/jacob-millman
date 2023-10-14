import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import MediaDropdown from "./components/media-dropdown";
import Footer from "./components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// import fonts
import { Poppins, La_Belle_Aurore } from "next/font/google";

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
        className={`${poppins.variable} ${la_belle_aurora.variable} bg-[var(--base-bg-color)] text-[var(--dark-text-color)]`}
      >
        <Header />
        <main className="font-sans relative contentContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
