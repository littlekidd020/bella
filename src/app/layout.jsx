import { Montserrat, Cormorant, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import ConciergeBar from "../components/layout/ConciergeBar";
import Footer from "../components/layout/Footer";
import { LanguageProvider } from "../context/LanguageContext";
import AgeGate from "../components/common/AgeGate";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant" });
const notoSansCN = Noto_Sans_SC({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-noto-sans-cn",
  display: 'swap',
});
const notoSerifCN = Noto_Serif_SC({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif-cn",
  display: 'swap',
});

export const metadata = {
  title: "Angel Cuties Collection | High-End Service",
  description: "A premium, editorial collection of sophisticated relaxation services.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${montserrat.variable} ${cormorant.variable} ${notoSansCN.variable} ${notoSerifCN.variable} font-sans antialiased bg-[#FFE3EC] text-[#2D1822]`}>
        <LanguageProvider>
          <AgeGate>
            <Navbar />
            {children}
            <Footer />
            <ConciergeBar />
          </AgeGate>
        </LanguageProvider>
      </body>
    </html>
  );
}
