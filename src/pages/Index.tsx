import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import ParallaxHero from "@/components/ParallaxHero";
import InteractiveFeaturesSection from "@/components/InteractiveFeaturesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle, Calendar, BarChart3, Zap, Shield, Users, TrendingUp, X, FileText, AlertTriangle, Check } from "lucide-react";
import { Link } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

const callAssistente = (msg) => {
  const numero = '5585920021719'; // sem o '+' e sem espaços
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

const Index = () => {
  const { language, formatPrice } = useLanguage();
  const t = useTranslations(language);

  // Preços base em reais
  const prices = {
    jr: 200,
    pleno: 550,
    senior: 1320
  };

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
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t.hero.subtitle}
              </p>
              <div className="space-x-4">
                <Button size="lg" onClick={() => callAssistente("Oi, quero automatizar meu Whatsapp agora!")}>
                  {t.hero.startNow}
                </Button>
                <Button variant="outline" onClick={() => callAssistente("Oi, gostaria saber mais sobre esse assistente")} size="lg">
                  {t.hero.learnMore}
                </Button>
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

      {/* Daily Reports Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Não perca mais nada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Receba relatórios diários automáticos sobre todas as pendências e oportunidades perdidas, 
              garantindo que nenhum cliente seja esquecido
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/f8c3f461-7773-4c69-bb1e-37dcbe653d98.png" 
                alt="Relatório de Pendências" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Identificação de Pendências</h3>
                  <p className="text-gray-600">
                    Nossa IA monitora constantemente todas as conversas e identifica automaticamente 
                    clientes que ficaram sem resposta ou com questões em aberto.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Relatórios Detalhados</h3>
                  <p className="text-gray-600">
                    Receba diariamente um resumo completo com todas as pendências, incluindo 
                    sugestões de mensagens personalizadas para reativar cada cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recuperação de Oportunidades</h3>
                  <p className="text-gray-600">
                    Transforme pendências em vendas com follow-ups inteligentes e automatizados, 
                    aumentando sua taxa de conversão e satisfação do cliente.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  onClick={() => callAssistente("Oi, quero saber mais sobre os relatórios de pendências")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Saiba Mais sobre Relatórios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.benefits.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.benefits.fastImplementation.title}</h3>
              <p className="text-gray-600">{t.benefits.fastImplementation.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.benefits.totalSecurity.title}</h3>
              <p className="text-gray-600">{t.benefits.totalSecurity.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.benefits.specializedSupport.title}</h3>
              <p className="text-gray-600">{t.benefits.specializedSupport.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.benefits.provenROI.title}</h3>
              <p className="text-gray-600">{t.benefits.provenROI.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Plano Jr */}
            <Card className="relative border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">{t.pricing.plans.jr.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">{formatPrice(prices.jr)}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {t.pricing.plans.jr.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200"
                    onClick={() => callAssistente(`Oi, quero contratar o ${t.pricing.plans.jr.name} por ${formatPrice(prices.jr)}/mês`)}
                    size="lg"
                  >
                    {t.pricing.contractNow}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Pleno */}
            <Card className="relative border-2 border-blue-400 hover:border-blue-500 transition-all duration-300 transform scale-105 hover:scale-110 shadow-xl hover:shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Mais Popular
                </span>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">{t.pricing.plans.pleno.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">{formatPrice(prices.pleno)}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {t.pricing.plans.pleno.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-600 ${index === 0 ? 'font-semibold' : ''}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
                    onClick={() => callAssistente(`Oi, quero contratar o ${t.pricing.plans.pleno.name} por ${formatPrice(prices.pleno)}/mês`)}
                    size="lg"
                  >
                    {t.pricing.contractNow}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano Sênior */}
            <Card className="relative border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">{t.pricing.plans.senior.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">{formatPrice(prices.senior)}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {t.pricing.plans.senior.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-600 ${index === 0 || index === 7 ? 'font-semibold' : ''}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200"
                    onClick={() => callAssistente(`Oi, quero contratar o ${t.pricing.plans.senior.name} por ${formatPrice(prices.senior)}/mês`)}
                    size="lg"
                  >
                    {t.pricing.contractNow}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plano CEO */}
            <Card className="relative border-2 border-gradient-to-r from-amber-400 to-orange-500 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Enterprise
                </span>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{t.pricing.plans.ceo.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">PERSONALIZADO</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {t.pricing.plans.ceo.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 ${index === 0 || index === 7 || index === 8 ? 'font-semibold' : ''}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 text-white font-semibold"
                    onClick={() => callAssistente(`Oi, quero saber mais sobre o ${t.pricing.plans.ceo.name} Enterprise`)}
                    size="lg"
                  >
                    {t.pricing.requestProposal}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Observações importantes */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">{t.pricing.importantInfo.title}</h3>
            <div className="space-y-3 text-gray-600 max-w-4xl mx-auto">
              {t.pricing.importantInfo.points.map((point, index) => (
                <p key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">•</span>
                  {index === 2 ? (
                    <span>
                      {point.split('Termos de Uso')[0]}
                      <Link to="/termos-de-uso" className="text-purple-600 hover:text-purple-800 underline">
                        Termos de Uso
                      </Link>
                      {point.includes('Política de Privacidade') && (
                        <>
                          {' e '}
                          <Link to="/politica-de-privacidade" className="text-purple-600 hover:text-purple-800 underline">
                            Política de Privacidade
                          </Link>
                        </>
                      )}
                    </span>
                  ) : (
                    <span>{point}</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Button size="lg" onClick={() => callAssistente("Oi, gostaria de começar agora esse assistente")} className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
            {t.cta.startNow}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="mt-4">
            {t.footer.disclaimer}&nbsp;
            <Link 
              to="/politica-de-privacidade" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              {t.footer.privacyPolicy}
            </Link>
            &nbsp;e&nbsp;
            <Link 
              to="/termos-de-uso" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              {t.footer.termsOfUse}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
