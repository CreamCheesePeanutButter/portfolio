import { HomeSlide } from "./slides/HomeSlide";
import { AboutSlide } from "./slides/AboutSlide";

export default function PortfolioPage() {
  return (
    /* Changed 'overflow-x-auto' to 'flex overflow-x-auto w-screen h-screen' */
    <div className="bg-background text-text flex overflow-x-auto w-screen h-screen">
      {/* Wrapped each slide in a fixed viewport container */}
      <div className="w-screen h-screen shrink-0">
        <HomeSlide />
      </div>

      {/* 
        Note: Your AboutSlide contains TWO full-screen sections. 
        If you want them side-by-side horizontally, wrap them individually 
        or update AboutSlide to use 'flex flex-row' instead of fragment tags.
      */}
      <div className="w-screen h-screen shrink-0">
        <AboutSlide />
      </div>
    </div>
  );
}
