import receptionImage from "@/assets/reception-desk.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={receptionImage}
              alt="Jurley Corona Boutique Interior"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
              Un Espacio Creado para Ti
            </h2>
            <div className="text-lg text-foreground space-y-4 leading-relaxed">
              <p>
                En <span className="font-semibold text-gold">Jurley Corona Boutique</span>, creemos que la moda es una expresión de tu esencia. Hemos diseñado un espacio donde la elegancia y las tendencias se fusionan para ofrecerte prendas y accesorios que te empoderen.
              </p>
              <p>
                Desde la selección más exclusiva hasta la atención más detallada, cada visita es una experiencia pensada para que te sientas única, radiante y a la vanguardia.
              </p>
              <p>
                Descubre tu estilo en nuestro ambiente acogedor, donde la calidad se corona con tu personalidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
