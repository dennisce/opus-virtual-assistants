
import { Parallax } from "react-parallax";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

const callAssistente = (msg) => {
  const numero = '5585920021719'; // sem o '+' e sem espaços
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

const ParallaxHero = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

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
              {t.parallaxHero.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              {t.parallaxHero.subtitle}
            </p>
            
            <div className="space-y-6">
              <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700" id="comecarAssistente" onClick={() => callAssistente("Olá, gostaria de começar a entender melhor sobre os assistentes")}>
                {t.parallaxHero.startNow}
              </Button>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mt-8 border border-white/20 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2">{t.parallaxHero.tryAssistant.title}</h3>
                <p className="text-white/80 mb-4">
                  {t.parallaxHero.tryAssistant.description}
                </p>
                <Button
                  onClick={() => callAssistente("Oi, gostaria de testar esse assistente")} 
                  id="testarAssistente"  
                  size="lg" 
                  variant="default" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white w-full md:w-auto animate-pulse"
                >
                  <MessageCircle className="mr-2"/>
                  {t.parallaxHero.tryAssistant.button}
                </Button>
                <p className="text-xs text-white/70 mt-2">
                  {t.parallaxHero.tryAssistant.disclaimer}
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
