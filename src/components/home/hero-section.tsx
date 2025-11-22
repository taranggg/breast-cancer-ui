import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

function HeroText() {
  return (
    <div>
      <Badge className="mb-4 bg-pink-100 text-pink-600 rounded-xl px-3 py-1 text-sm shadow">
        Your Health, Your Power
      </Badge>
      <h1
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        <span className="animate-gradient-text">Reading Between the Cells</span>
      </h1>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background: linear-gradient(90deg, #0a5353, #fce4ec, #d72660, #1699adff);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientMove 24s ease-in-out infinite;
        }
      `}</style>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        Scan. Discover. Take control.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/predict">
          <Button className="rounded-xl bg-pink-500 text-white shadow hover:bg-pink-400 w-full sm:w-auto text-lg font-semibold">
            Start Your AI Scan
          </Button>
        </Link>
        <a
          href="#learn-more"
          className="text-pink-500 font-medium underline underline-offset-4 text-center sm:text-left text-lg"
        >
          Learn & Stay Safe
        </a>
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

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Gradient background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-200 via-pink-100 to-teal-100 z-0" />
        {/* Sparkles above gradient, below content */}
        <div className="absolute inset-0 w-full h-full z-10">
          <SparklesCore
            background="transparent"
            particleColor="#fff"
            minSize={1}
            maxSize={3}
            speed={4}
            particleDensity={120}
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 relative z-10">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
