import { Montserrat } from "next/font/google";
import "./globals.css";
import "./index.css";
import ScrollToTop from "@/components/common/ScrollToTop";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Footer from "@/components/layout/Footer";

const MontserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontserratFont.variable} antialiased`}>
        {/* scrolling to the top of page */}

        {/* scrolling to the top of page */}
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue via-blue-900 to-blue-900 scroll-smooth">
          <Header />
          <main className="flex-1 container min-w-full mx-auto w-full">
            {children}
            <WhatsAppButton />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
