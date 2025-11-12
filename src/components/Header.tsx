import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImage from "@/assets/Logo.png";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Tienda", href: "#shop" },
  { name: "Colecciones", href: "#collections" },
  { name: "Nosotros", href: "#about" },
  { name: "Galería", href: "#gallery" },
  { name: "Contacto", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 group"
          >
            <img 
                src={LogoImage} 
                alt="Logo Jurley Corona Boutique" 
                className="h-16 w-16 object-contain" 
            />
            <div className="text-left">
              <h1 className="text-xl font-bold text-gold leading-tight">Jurley Corona</h1>
              <p className="text-xs text-muted-foreground">Boutique</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground hover:text-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-sm font-medium text-foreground hover:text-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
