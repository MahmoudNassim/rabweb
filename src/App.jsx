import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BrowseListings from "./components/BrowseListings";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#10023f] to-[#300c92] text-white">
      <NavBar />
      <Hero />
      <BrowseListings />
    </div>
  );
}

export default App;
