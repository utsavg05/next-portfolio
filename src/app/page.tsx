"use client"
import ContactPage from "@/components/pages/ContactPage";
import GithubContributionSection from "@/components/pages/ContibutionGraph";
import GithubGraph from "@/components/pages/ContibutionGraph";
import ExperiencePage from "@/components/pages/Experience";
import GitHubCalender from "@/components/pages/GitHubCalender";
import HeroSection from "@/components/pages/hero";
import ProjetPage from "@/components/pages/projects";
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
      {/* <GithubGraph /> */}
      {/* <GithubContributionSection /> */}
      <GitHubCalender />
      <ProjetPage />
      <ContactPage />
    </div>
  );
}
