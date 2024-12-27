import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import AOS from "aos";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    AOS.init({ duration: 1000 });
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-10 space-y-8 container mx-auto gap-32">
        <div>
          <Navbar />
          <Hero />
          <div data-aos="fade-up">
            <Skills />
          </div>
        </div>
        <Project />
        <Experiences />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
