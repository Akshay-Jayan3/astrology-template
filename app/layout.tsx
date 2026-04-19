import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import data from "../data/site.json";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = { 
  title: `${data.site.name} | Astrology Services`, 
  description: "Consult trusted astrologer for guidance on marriage, career, and life." 
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-gray-900 bg-[#F9F6F1] antialiased min-h-screen flex flex-col">
        <Navbar data={data} />
        <div className="flex-grow">
          {children}
        </div>
        <Footer data={data} />
      </body>
    </html>
  );
}
