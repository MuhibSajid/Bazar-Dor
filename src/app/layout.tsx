import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Footer from "@/components/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রতিদিনের বাজারদর এক জায়গায়",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className="h-full antialiased">
      <body className={`${hindSiliguri.className} min-h-full`}>
        <div className="flex min-h-screen flex-col">
          <div className="mx-auto w-full max-w-7xl px-4">
            <Header />
            <Navbar />
          </div>
          <PriceTicker />

          <main className="mx-auto w-full max-w-7xl flex-1 px-4">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}