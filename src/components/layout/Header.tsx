"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/plan-trip", label: "Plan a Trip" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Compass className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block text-lg">
            WanderWise
          </span>
        </Link>
        <div className="hidden md:flex flex-1 items-center space-x-6 text-sm">
          <nav className="flex gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  (pathname === href || (href.startsWith("/#") && pathname === "/"))
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button className="hidden md:inline-flex" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>Sign Up</Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden px-2.5"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Compass className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline inline-block">WanderWise</span>
                </Link>
                <SheetTrigger asChild>
                   <Button variant="ghost" className="px-2.5" aria-label="Close menu">
                    <X className="h-5 w-5" />
                   </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={cn(
                      "text-lg transition-colors hover:text-foreground/80",
                      pathname === href
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
               <div className="mt-8 flex flex-col gap-2">
                <Button variant="outline">Log In</Button>
                <Button style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
