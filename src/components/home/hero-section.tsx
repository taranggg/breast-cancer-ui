import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-20">
      {/* Full width hero background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 relative z-10">
        {/* Left */}
        <div>
          <Badge className="mb-4 bg-pink-100 text-pink-600 rounded-xl px-3 py-1 text-sm shadow">
            Early Detection Matters
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            Check Your Breast Health with AI Support
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Upload your mammogram or breast scan image and let our AI model
            estimate whether it looks normal, benign, or suspicious. Always
            consult a doctor for confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/predict">
              <Button className="rounded-xl bg-pink-500 text-white shadow hover:bg-pink-400 w-full sm:w-auto">
                Predict Your Breast Cancer
              </Button>
            </Link>
            <a
              href="#learn-more"
              className="text-pink-500 font-medium underline underline-offset-4 text-center sm:text-left"
            >
              Learn About Breast Cancer
            </a>
          </div>
        </div>
        {/* Right: Illustration Card */}
        {/* <Card className="relative bg-white/80 rounded-3xl shadow-lg p-8 flex items-center justify-center min-h-[300px]">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <ellipse cx="90" cy="90" rx="80" ry="70" fill="#FCE4EC" />
            <ellipse cx="90" cy="110" rx="60" ry="40" fill="#E0F7FA" />
            <path
              d="M60 120 Q90 60 120 120"
              stroke="#F48FB1"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="90"
              cy="90"
              r="18"
              fill="#FFF"
              stroke="#80CBC4"
              strokeWidth="4"
            />
            <text
              x="90"
              y="95"
              textAnchor="middle"
              fontSize="18"
              fill="#F48FB1"
              fontWeight="bold"
            >
              💖
            </text>
          </svg>
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-30 animate-pulse" />
        </Card> */}
      </div>
    </section>
  );
}
