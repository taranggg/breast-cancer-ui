import HeroSection from "@/components/home/hero-section";
import InfoSections from "@/components/home/info-sections";
import AboutProjectSection from "@/components/home/about-project-section";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        size="80%"
        blendingValue="hard-light"
      />
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, rgb(253, 181, 205) 0%, rgb(252, 228, 236) 40%, #fdf6f0 100%)",
          opacity: 0.2,
        }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      <div className="relative z-10">
        <HeroSection />
        <InfoSections />
        <AboutProjectSection />
      </div>
    </div>
  );
}
