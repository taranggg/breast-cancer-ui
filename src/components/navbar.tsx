"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Predict", href: "/predict" },
  { name: "About", href: "/#learn-more" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-muted shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-2xl text-pink-500 tracking-tight"
        >
          BreastCare AI
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-foreground hover:text-pink-500 transition-colors font-medium ${
                pathname === link.href ? "underline underline-offset-4" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="ml-4 rounded-xl bg-pink-500 text-white shadow hover:bg-pink-400"
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
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col gap-4 mt-8">
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
                <Separator />
                <Button
                  className="rounded-xl bg-pink-500 text-white shadow hover:bg-pink-400"
                  onClick={() => {
                    setOpen(false);
                    router.push("/predict");
                  }}
                >
                  Predict Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
