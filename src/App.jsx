import { useEffect, useState } from "react";
import { 
  Contact, 
  Footer,
  Hero,
  HowItWorks,
  Navbar,
  MobileNavbar,
  ClientsOpenion,
  Features,
  Screens,
} from "./components";
import { Route, Routes } from "react-router-dom";
import MobileScreens from "./components/Screens/MobileScreens";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Routes>
      <Route path="/" element={<Hero />} /> 
      <Route path="/how-it-works" element={<HowItWorks />} /> 
      <Route path="/opinions" element={<ClientsOpenion />}/>  
      <Route path="/screens" element={isMobile ? <MobileScreens /> : <Screens />}/>  
      <Route path="/features" element={<Features />}/> 
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
      <Footer />
    </main>
  );
}

export default App;
