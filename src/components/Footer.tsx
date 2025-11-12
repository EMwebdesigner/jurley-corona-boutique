import { Instagram, Facebook } from "lucide-react";
import LogoImage from "@/assets/Logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <img 
                src={LogoImage} 
                alt="Logo Jurley Corona Boutique" 
                className="h-16 w-16 object-contain" 
            />
              <div>
                <h3 className="text-xl font-bold text-gold">Jurley Corona</h3>
                <p className="text-xs text-muted-foreground">Boutique</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Donde el estilo se corona
            </p>
          </div>

          {/* Legal */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-gold">Información Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-gold">Síguenos</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://instagram.com/jurleycoronaboutique"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gold hover:text-accent-foreground" />
              </a>
              <a
                href="https://facebook.com/jurleycoronaboutique"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gold hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jurley Corona Boutique. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
