"use client"
import ContactPage from "@/components/ContactPage";
import GithubContributionSection from "@/components/ContibutionGraph";
import GithubGraph from "@/components/ContibutionGraph";
import ExperiencePage from "@/components/Experience";
import GitHubCalender from "@/components/GitHubCalender";
import HeroSection from "@/components/hero";
import ProjetPage from "@/components/projects";
import SkillsSection from "@/components/SkillSection";
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
      {/* <GithubGraph /> */}
      {/* <GithubContributionSection /> */}
      {/* <GitHubCalender /> */}
      <ProjetPage />
      <ContactPage />
    </div>
  );
}
