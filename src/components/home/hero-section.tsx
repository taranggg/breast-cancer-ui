import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
function HeroText() {
  return (
    <div>
      <Badge className="mb-4 bg-pink-100 text-pink-600 rounded-xl px-3 py-1 text-sm shadow">
        Your Health, Your Power
      </Badge>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
        <span className="molle-regular-italic" style={{ color: "#b23a5a" }}>
          Reading
        </span>
        <br />
        <span className="molle-regular-italic" style={{ color: "#6c6a89" }}>
          Between the
        </span>
        <br />
        <span className="molle-regular-italic" style={{ color: "#5a8ca3" }}>
          Cells
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        Scan. Discover. Take control.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/predict">
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-full text-lg font-semibold shadow-lg backdrop-blur-md bg-white/20 border border-pink-300/60 hover:from-pink-300/80 hover:to-teal-300/80 transition-all duration-300 text-pink-600 hover:text-teal-600"
            type="button"
          >
            Start Your AI Scan
          </button>
        </Link>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <Image
          src="/be-safe-from-cancer.png"
          alt="Be Safe From Cancer Poster"
          width={400}
          height={400}
          className="rounded-3xl object-cover"
          priority
        />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={85}
          className="w-full h-full"
        />
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 relative z-10 bg-transparent">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

export default HeroSection;
