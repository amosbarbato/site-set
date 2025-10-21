"use client";

import { useState } from "react";
import Button from "../ui/button";
import ActiveLink from "../active-link";
import { Menu, X } from "lucide-react";

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative md:hidden">
      <Button size="icon" variant="menu" onClick={toggleMenu} aria-label="menu">
        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </Button>

      {isMenuOpen && (
        <div className="bg-background absolute -right-4 z-50 mt-3.5 w-screen overflow-hidden border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out">
          <nav className="flex flex-col gap-6 p-6">
            <ActiveLink href="/" onClick={toggleMenu}>
              Home
            </ActiveLink>
            <ActiveLink href="/blog" onClick={toggleMenu}>
              Blog
            </ActiveLink>
          </nav>
        </div>
      )}
    </div>
  );
}
