import { useEffect, useState } from "react";
import {
  ClientsOpenion,
  Contact,
  Features,
  Footer,
  Hero,
  HowItWorks,
  Navbar,
  MobileNavbar,
} from "./components";

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
      <Hero />
      <HowItWorks />
      <ClientsOpenion />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
