"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Image as ImageIcon,
  FolderOpen,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Our utility for conditional classes

const sidebarLinks = [
  { icon: LayoutGrid, label: "Overview", href: "/dashboard" },
  { icon: ImageIcon, label: "All Assets", href: "/dashboard/assets" },
  { icon: FolderOpen, label: "Collections", href: "/dashboard/collections" },
  { icon: Heart, label: "Favorites", href: "/dashboard/favorites" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col border-r border-border bg-card pb-4 pt-6 md:flex">
      {/* App Logo */}
      <div className="px-6 mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <LayoutGrid className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">Kroma</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Library
        </p>

        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3",
                  isActive
                    ? "bg-primary/10 text-primary hover:bg-primary/15"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          );
        })}

        <div className="pt-4 mt-4 border-t border-border">
          <Link href="/dashboard/settings">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-muted-foreground"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
      </nav>

      {/* User Section (Mock for now) */}
      <div className="px-4 mt-auto">
        <div className="rounded-lg border border-border bg-background p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700"></div>
            <div>
              <p className="text-sm font-medium">Demo User</p>
              <p className="text-xs text-muted-foreground">Free Plan</p>
            </div>
          </div>
          <Button variant="outline" className="w-full h-8 text-xs">
            <LogOut className="mr-2 h-3 w-3" /> Sign Out
          </Button>
        </div>
      </div>
    </aside>
  );
}
