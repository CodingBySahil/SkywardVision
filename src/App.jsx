import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Portfolio from '@/pages/Portfolio';
import Contact from '@/pages/Contact';
import SmdScreen from '@/pages/SmdScreen';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* SMD Screen route without header/footer */}
            {/* <Route path="/smd-screen" element={<SmdScreen />} /> */}
            
            {/* All other routes with header/footer */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                     {/* SMD Screen route without header/footer */}
            <Route path="/smd-screen" element={<SmdScreen />} />
                  </Routes>
                  <Footer />
                  <WhatsAppButton />
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
                background: 'white',
                color: '#333',
                border: '1px solid #e2e8f0',
              },
            }}
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;