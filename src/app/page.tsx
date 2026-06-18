import ContactPage from "@/components/pages/ContactPage";
import ExperiencePage from "@/components/pages/Experience";
import GitHubCalender from "@/components/pages/GitHubCalender";
import HeroSection from "@/components/pages/hero";
import ProjetPage from "@/components/pages/projects";
import RecentBlogs from "@/components/pages/RecentBlogs";
import SkillsSection from "@/components/pages/SkillSection";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div id="/" className="flex flex-col items-center max-w-4xl mx-auto">
      <ScrollProgress className="top-0 " />
      <HeroSection />
      <SkillsSection />
      <ExperiencePage />
      <GitHubCalender />
      <ProjetPage />
      <RecentBlogs />
      <ContactPage />
    </div>
  );
}
