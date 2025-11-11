import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import collectionAutumn from "@/assets/collection-autumn.jpg";
import collectionBasics from "@/assets/collection-basics.jpg";

const galleryImages = [product1, product2, product3, product4, collectionAutumn, collectionBasics];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold">
            #JurleyCoronaStyle
          </h2>
          <p className="text-lg text-muted-foreground">Síguenos en Instagram</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg hover-lift cursor-pointer"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open("https://instagram.com/jurleycoronaboutique", "_blank")}
          >
            <Instagram className="mr-2 h-5 w-5" />
            @jurleycoronaboutique
          </Button>
        </div>
      </div>
    </section>
  );
};
