import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.png";

export const HeroSection = () => {
  const scrollToShop = () => {
    const element = document.querySelector("#shop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Donde el estilo se corona
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Viste la moda que te define
        </p>
        <Button
          variant="gold"
          size="lg"
          onClick={scrollToShop}
          className="text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          Ver Colección
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToShop}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};
