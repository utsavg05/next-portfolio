"use client"
import ContactPage from "@/components/ContactPage";
import GithubGraph from "@/components/ContibutionGraph";
import ExperiencePage from "@/components/Experience";
import GitHubCalender from "@/components/GitHubCalender";
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
      {/* <GithubGraph /> */}
      <GitHubCalender />
      <ProjetPage />
      <ContactPage />
    </div>
  );
}
