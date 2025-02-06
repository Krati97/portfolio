"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PreviousExperiences from "@/components/PreviousExperiences";
import { FloatingNav } from "@/components/ui/FloatingNav";
import TechStack from "@/components/ui/TechStack";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("../components/Grid"), {
  ssr: false,
  });
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1>
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
          <PreviousExperiences />
          <TechStack />
          <Footer />
        </h1>
      </div>
    </main>
  );
}
