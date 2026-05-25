import { HomeSlide } from "./slides/HomeSlide";
import { AboutSlide } from "./slides/AboutSlide";
import { Navbar } from "../component/Navbar";
import Background from "../component/background";
import SkillsSlide from "./slides/SkillsSlide";
import ProjectSlide from "./slides/ProjectSlide";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Fixed Background */}
        <div className="absolute inset-0 -z-10">
          <Background />
        </div>

        {/* Content */}

        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-text">
          <HomeSlide />
          <AboutSlide />
          <SkillsSlide />
          <ProjectSlide />
        </div>
      </div>
    </>
  );
}
