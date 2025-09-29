import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import SmdScreen from "@/pages/SmdScreen";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white scroll-smooth">
          <Routes>
            {/* All other routes with header/footer */}
            <Route
              path="/*"
              element={
                <>
                  <main className="flex-1 container max-w-screen-2xl mx-auto w-full">
                  <Header />
                  {/* <main className="flex-1 container max-w-screen-2xl mx-auto w-full"> */}
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/contact" element={<Contact />} />
                      {/* SMD Screen route without header/footer */}
                      <Route path="/smd-screen" element={<SmdScreen />} />
                    </Routes>
                  {/* </main> */}
                  <Footer />
                  <WhatsAppButton />
                  </main>
                </>
              }
            />
          </Routes>

          {/* Toast notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "white",
                color: "#333",
                border: "1px solid #e2e8f0",
              },
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
