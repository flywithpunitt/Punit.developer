"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Education from "@/components/Education";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutSection />
        {/* <Grid />
        <RecentProjects /> */}
        <Education />
        <Footer />
      </div>
      <h1>its Comingggggggggggg !!</h1>
    </main>
  );
};

export default Home;