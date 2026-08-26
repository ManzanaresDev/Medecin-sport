import { Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${plexMono.variable}`}>
      <body>{children}</body>
  <Footer />
    </html>
  );
}