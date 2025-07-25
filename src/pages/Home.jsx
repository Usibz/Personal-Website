import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
<<<<<<< HEAD
        <HeroSection />
        <AboutSection />
=======
        <SkillsSection />
        <ProjectsSection />
>>>>>>> skills-and-projects-sections

      </main>

      {/* Footer */}
      
    </div>
    );
}
