import HomeHeroSection from "./components/home/hero-section";
import WorkExperience from "./components/timeline/work-experience";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <div className="min-h-screen flex justify-center items-center w-full">
        <WorkExperience />
      </div>
    </>
  );
}
