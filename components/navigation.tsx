"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">
                {/* T2 */}
                <Image
                  src={"/app-icon-1.png"}
                  alt="icon"
                  width={60}
                  height={60}
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                />
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">T2client</span>
          </Link>

          <div className="flex items-center space-x-1 md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
