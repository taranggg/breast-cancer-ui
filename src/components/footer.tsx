import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-muted/40 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/bcAiLogo.png"
            alt="BreastCare AI Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold text-pink-500 tracking-tight">
            BreastCare AI
          </span>
        </div>
        <span className="text-xs text-muted-foreground text-center">
          This tool is for educational purposes only and does not replace
          professional medical diagnosis.
        </span>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="#" className="hover:underline">
            Contact
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="#" className="hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
