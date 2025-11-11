import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import collectionAutumn from "@/assets/collection-autumn.jpg";
import collectionBasics from "@/assets/collection-basics.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

const collections = [
  {
    id: 1,
    title: "Colección Otoño",
    description: "Tonos cálidos y elegantes para la temporada",
    image: collectionAutumn,
  },
  {
    id: 2,
    title: "Básicos de Lujo",
    description: "Prendas esenciales de alta calidad",
    image: collectionBasics,
  },
  {
    id: 3,
    title: "Accesorios Glam",
    description: "Complementos que hacen la diferencia",
    image: collectionAccessories,
  },
];

export const CollectionsSection = () => {
  const scrollToShop = () => {
    const element = document.querySelector("#shop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="collections" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold">
            Nuestras Colecciones para Inspirarte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="hover-lift overflow-hidden bg-card border-border"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gold">{collection.title}</h3>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                  <Button variant="gold" onClick={scrollToShop}>
                    Ver Colección Completa
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
