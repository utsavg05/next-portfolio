"use client"
import ContactPage from "@/components/ContactPage";
import ExperiencePage from "@/components/Experience";
import HeroSection from "@/components/hero";
import ProjetPage from "@/components/projects";
import SkillsSection from "@/components/SkillSection";
// import Snowfall from 'react-snowfall';

export default function Home() {
  return (
    <div id="/" className="flex flex-col items-center">
      {/* <Snowfall color="white"/> */}
      <HeroSection />
      <ExperiencePage />
      <SkillsSection />
      <ProjetPage />
      <ContactPage />
    </div>
  );
}
