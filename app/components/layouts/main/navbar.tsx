import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import AppButton from "~/components/button";
import { navLinks } from "~/utils/constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  useEffect(() => {}, []);
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="#" className="text-xl font-bold tracking-tight hover:text-primary">
          RG <span className="text-primary">.</span>
        </Link>
        {/* Desktop Navbar menu */}
        <div className="hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((item, index) => (
              <Link
                to={item.to}
                key={item.label + index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <AppButton>Contact me</AppButton>
        </div>

        <button className="md:hidden p-2 text-foreground">
          {React.createElement(isMobileMenuOpen ? X : Menu, {
            size: 24,
            onClick: () => {
              setIsMobileMenuOpen((s) => !s);
            },
            className: "cursor-pointer",
          })}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <Link
                to={item.to}
                key={"mobile" + item.label + index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2">
                {item.label}
              </Link>
            ))}
            <AppButton size="lg">Contact Me</AppButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
