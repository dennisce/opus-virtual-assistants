import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import ParallaxHero from "@/components/ParallaxHero";
import InteractiveFeaturesSection from "@/components/InteractiveFeaturesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Calendar, BarChart3, Zap, Shield, Users, TrendingUp, X } from "lucide-react";
import { Link } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";

const callAssistente = (msg) => {
  const numero = '5585920021719'; // sem o '+' e sem espaços
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

const Index = () => {
  return (
    <div className="min-h-screen">
      <CookieConsent />
      <NavBar />
      
      <ParallaxHero />
      
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Atendimento Inteligente para WhatsApp
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automatize suas conversas, agende compromissos e impulsione suas vendas com nossa plataforma de IA
              </p>
              <div className="space-x-4">
                <Button size="lg" onClick={() => callAssistente("Oi, quero automatizar meu Whatsapp agora!")}>Começar Agora</Button>
                <Button variant="outline" onClick={() => callAssistente("Oi, gostaria saber mais sobre esse assistente")} size="lg">Saiba Mais</Button>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/2131abd7-15eb-46b2-94bc-893724744281.png" 
                alt="Atendimento Inteligente" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Features Section */}
      <InteractiveFeaturesSection />

      {/* Conversion Tracking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Monitoramento Completo de Conversões
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompanhe cada interação e otimize seus resultados com dados precisos e actionáveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/19756d8d-7697-46f4-9ad6-a1232ffae1df.png" 
                alt="Dashboard de Analytics" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/298c7438-cc83-4530-bf48-965d11b10f86.png" 
                alt="Relatórios Detalhados" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Por que escolher a Opus?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementação Rápida</h3>
              <p className="text-gray-600">Configure em minutos e comece a ver resultados imediatamente</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Total</h3>
              <p className="text-gray-600">Seus dados protegidos com criptografia de ponta a ponta</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte Especializado</h3>
              <p className="text-gray-600">Equipe técnica disponível para maximizar seus resultados</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Comprovado</h3>
              <p className="text-gray-600">Aumento sua taxa de conversão por não perder nenhuma oportunidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Transformar seu Atendimento?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já revolucionaram 
            seu atendimento com nossa plataforma
          </p>
          <Button size="lg" onClick={() => callAssistente("Oi, gostaria de começar agora esse assistente")} className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Opus - Assistentes Inteligentes. Todos os direitos reservados.</p>
          <div className="mt-4">
            Ao usar nossos serviços, você concorda com nossa&nbsp;
            <Link 
              to="/politica-de-privacidade" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Política de Privacidade
            </Link>
            &nbsp;e&nbsp;
            <Link 
              to="/termos-de-uso" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Termo de uso
            </Link>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
