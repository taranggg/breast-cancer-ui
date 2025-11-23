import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-[var(--accent)] backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative rounded-full">
                <Image
                  src="/bcAiLogo.png"
                  alt="BreastCare AI Logo"
                  width={70}
                  height={70}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl text-foreground tracking-tight">
                BreastCare <span className="text-teal-500">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Scan. Discover. Take control. Empowering early detection with
              advanced artificial intelligence algorithms.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Platform</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="hover:text-pink-500 transition-colors"
                >
                  Scan Image
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-pink-500 transition-colors"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-pink-500 transition-colors"
                >
                  Accuracy Metrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="hover:text-pink-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-pink-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-pink-500 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section: Copyright & Disclaimer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} BreastCare AI. All rights
            reserved.
          </p>

          <p className="text-center md:text-right max-w-md opacity-70">
            **Disclaimer:** This tool is for educational purposes only and does
            not replace professional medical diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
}
