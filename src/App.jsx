import useReveal from "./useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Features from "./components/Features";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
