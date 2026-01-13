import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-oxford-dark text-white font-sans selection:bg-brand-primary/30 antialiased">
          <Navbar />

          <main className="pt-28 sm:pt-48 md:pt-56 pb-12 sm:pb-16 md:pb-20 overflow-x-hidden">
            <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 md:space-y-32">
              {/* Hero Component */}
              <Hero />
              <Services />
              <WhyChooseUs />
              <About />
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
