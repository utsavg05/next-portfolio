import ExperiencePage from "@/components/Experience";
import HeroSection from "@/components/hero";
import ProjetPage from "@/components/projects";
import SkillsSection from "@/components/SkillSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <ExperiencePage />
      <ProjetPage />
      <SkillsSection />
    </div>
  );
}
