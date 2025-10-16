import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 bg-card/90 backdrop-blur-md border-b z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-home">
          <PawPrint className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">반려동물 찾기</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" data-testid="link-admin">
            <Link href="/admin">관리자</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
