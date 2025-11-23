"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Predict", href: "/predict" },
  { name: "Results", href: "/result" },
  { name: "About", href: "/#about-project" },
  { name: "Learn More", href: "/#breast-cancer-info" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 border-b border-muted shadow-sm transition-all duration-300 ${
        scrolled
          ? "bg-background/60 backdrop-blur-lg border-pink-200/40 shadow-lg"
          : "bg-[var(--accent)] backdrop-blur border-muted"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/bcAiLogo.png"
            alt="BreastCare AI Logo"
            width={50}
            height={50}
            className="object-cover"
          />
          <span className="font-bold text-2xl tracking-tight flex items-center gap-1">
            <span className="font-bold text-xl text-foreground tracking-tight">
              BreastCare <span className="text-teal-500">AI</span>
            </span>
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-foreground hover:text-pink-500 transition-colors font-medium ${
                pathname === link.href ? "font-bold text-pink-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="w-full sm:w-auto px-6 py-3 rounded-full text-lg font-semibold shadow-lg backdrop-blur-md bg-gradient-to-r from-white/40 via-teal-200/60 to-teal-400/40 border border-teal-300/60 hover:from-teal-300/80 hover:to-teal-400/80 transition-all duration-300 text-teal-700 hover:text-white"
            onClick={() => router.push("/predict")}
          >
            Predict Now
          </Button>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <svg width="24" height="24" fill="none" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background px-6 py-8">
              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-pink-500"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
