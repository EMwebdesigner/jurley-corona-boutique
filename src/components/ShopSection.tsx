import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Vestido Elegante Blanco",
    price: 89.99,
    image: product1,
    category: "Vestidos",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco"],
  },
  {
    id: 2,
    name: "Jeans Premium Azul",
    price: 69.99,
    image: product2,
    category: "Jeans",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul"],
  },
  {
    id: 3,
    name: "Blusa de Seda Lavanda",
    price: 59.99,
    image: product3,
    category: "Tops",
    sizes: ["S", "M", "L"],
    colors: ["Lavanda"],
  },
  {
    id: 4,
    name: "Set de Accesorios Dorados",
    price: 49.99,
    image: product4,
    category: "Accesorios",
    sizes: ["Único"],
    colors: ["Dorado"],
  },
];

export const ShopSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const sizeMatch = selectedSize === "all" || product.sizes.includes(selectedSize);
    const colorMatch = selectedColor === "all" || product.colors.includes(selectedColor);
    return categoryMatch && sizeMatch && colorMatch;
  });

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  return (
    <section id="shop" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold">Tienda Online</h2>
          <p className="text-lg text-muted-foreground">Catálogo Exclusivo</p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent className="bg-card z-50">
              <SelectItem value="all">Todas las Categorías</SelectItem>
              <SelectItem value="Vestidos">Vestidos</SelectItem>
              <SelectItem value="Jeans">Jeans</SelectItem>
              <SelectItem value="Tops">Tops</SelectItem>
              <SelectItem value="Accesorios">Accesorios</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Talla" />
            </SelectTrigger>
            <SelectContent className="bg-card z-50">
              <SelectItem value="all">Todas las Tallas</SelectItem>
              <SelectItem value="S">S</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="XL">XL</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent className="bg-card z-50">
              <SelectItem value="all">Todos los Colores</SelectItem>
              <SelectItem value="Blanco">Blanco</SelectItem>
              <SelectItem value="Negro">Negro</SelectItem>
              <SelectItem value="Rojo">Rojo</SelectItem>
              <SelectItem value="Lavanda">Lavanda</SelectItem>
              <SelectItem value="Azul">Azul</SelectItem>
              <SelectItem value="Dorado">Dorado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover-lift bg-background border-border">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-gold mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <Select
                    value={selectedSizes[product.id] || ""}
                    onValueChange={(size) => handleSizeSelect(product.id, size)}
                  >
                    <SelectTrigger className="w-full mb-3 bg-card">
                      <SelectValue placeholder="Seleccionar Talla" />
                    </SelectTrigger>
                    <SelectContent className="bg-card z-50">
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="gold" className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Añadir al Carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground text-lg mt-8">
            No se encontraron productos con los filtros seleccionados.
          </p>
        )}
      </div>
    </section>
  );
};
