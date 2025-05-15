
import { Parallax } from "react-parallax";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const callAssistente = (msg) => {
  const numero = '5585920018032'; // sem o '+' e sem espaços
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

const ParallaxHero = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/hero-bg.jpg"
      bgImageAlt="Tecnologia e Varejo"
      strength={200}
      className="relative"
    >
      <div className="min-h-[80vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transforme seu Atendimento com Assistentes Virtuais Inteligentes
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Automatize seu suporte ao cliente com assistentes virtuais que entendem, aprendem e resolvem problemas 24/7.
            </p>
            
            <div className="space-y-6">
              <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700" id="comecarAssistente" onClick={() => callAssistente("Olá, gostaria de começar a entender melhor sobre os assistentes")}>
                Começar Agora
              </Button>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mt-8 border border-white/20 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2">Experimente o Opus AI agora mesmo!</h3>
                <p className="text-white/80 mb-4">
                  Converse com nosso assistente virtual e descubra como a mesma tecnologia pode revolucionar o atendimento do seu negócio.
                </p>
                <Button
                  onClick={() => callAssistente("Oi, gostaria de testar esse assistente")} 
                  id="testarAssistente"  
                  size="lg" 
                  variant="default" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white w-full md:w-auto animate-pulse"
                >
                  <MessageCircle className="mr-2"/>
                  Testar o Assistente Opus
                </Button>
                <p className="text-xs text-white/70 mt-2">
                  A mesma experiência que seus clientes terão com seu próprio assistente personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxHero;
