import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Soft pink gradient background with animated sparkles */}
      <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br from-pink-200 via-pink-100 to-white" />
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-pink-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      {/* Animated sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-1/3 animate-bounce-slow">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="3" fill="#F48FB1" />
            <circle cx="30" cy="10" r="2" fill="#F8BBD0" />
            <circle cx="10" cy="30" r="1.5" fill="#F8BBD0" />
          </svg>
        </div>
        <div className="absolute right-1/4 bottom-1/4 animate-bounce">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="2.5" fill="#F48FB1" />
            <circle cx="24" cy="8" r="1.5" fill="#F8BBD0" />
          </svg>
        </div>
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
      </div>
    </section>
  );
}
