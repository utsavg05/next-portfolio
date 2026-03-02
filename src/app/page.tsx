"use client"
import ContactPage from "@/components/pages/ContactPage";
import ExperiencePage from "@/components/pages/Experience";
import GitHubCalender from "@/components/pages/GitHubCalender";
import HeroSection from "@/components/pages/hero";
import ProjectGateway from "@/components/pages/projects";
import ProjetPage from "@/components/pages/projects";
import ProofOfWork from "@/components/pages/ProofOfWork";
import SkillsSection from "@/components/pages/SkillSection";
import { ScrollProgress } from "@/components/ui/scroll-progress";
// import Snowfall from 'react-snowfall';

export default function Home() {
  return (
    <div id="/" className="flex flex-col items-center max-w-4xl mx-auto">
      <ScrollProgress className="top-0 " />
      {/* <Snowfall color="white"/> */}
      <HeroSection />
      <ExperiencePage />
      <SkillsSection />
      <GitHubCalender />
      <ProjetPage />
      {/* <ProofOfWork /> */}
      <ContactPage />
    </div>
  );
}
