import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        {/* Logo Section */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <LayoutGrid className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Kroma</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/dashboard"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Dashboard
            </Link>
            <Link
              href="/collections"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Collections
            </Link>
          </nav>
        </div>

        {/* Right Action Section */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search bar will go here later */}
          </div>
          <Button variant="outline" size="sm" className="ml-auto">
            Log In
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" /> Upload
          </Button>
        </div>
      </div>
    </header>
  );
}
