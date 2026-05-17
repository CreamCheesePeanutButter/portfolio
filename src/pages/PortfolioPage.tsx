import { HomeSlide } from "./slides/HomeSlide";
import { AboutSlide } from "./slides/AboutSlide";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-text w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <HomeSlide />
      <AboutSlide />
    </div>
  );
}
