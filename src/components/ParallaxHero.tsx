
import { Parallax } from "react-parallax";
import { Button } from "./ui/button";

const ParallaxHero = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/hero-bg.jpg"
      bgImageAlt="Tecnologia e varejo"
      strength={200}
      className="relative"
    >
      <div className="min-h-[80vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transforme seu Atendimento com Assistentes Virtuais Inteligentes
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Automatize seu suporte ao cliente com assistentes virtuais que entendem, aprendem e resolvem problemas 24/7.
            </p>
            <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700">
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxHero;
