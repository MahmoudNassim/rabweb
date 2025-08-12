import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
import BrowseListings from "./components/BrowseListings";
import Navbar from "./components/Navbar";
import Sell from "./components/Sell";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#10023f] to-[#300c92] text-white">
      <Navbar />
      <Hero />
      <BrowseListings />
      <Sell />
    </div>
  );
}

export default App;
