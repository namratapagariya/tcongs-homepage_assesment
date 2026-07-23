import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import CtaBanner from "./components/CtaBanner";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseTrail from "./components/MouseTrail";
function App() {
  return (
    <div className="min-h-screen bg-[#040814] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CtaBanner />
        <FaqSection />
        <Contact />
        <Footer />
        <MouseTrail />
      </main>
    </div>
  );
}

export default App;