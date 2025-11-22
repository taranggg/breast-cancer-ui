import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-muted/40 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
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
