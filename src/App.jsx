import useReveal from "./hooks/useReveal";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Products from "./components/sections/Products";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import Cta from "./components/sections/CTA";
import Footer from "./components/sections/Footer";
import FloatingCall from "./components/sections/FloatingCall";

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
        <Cta />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
