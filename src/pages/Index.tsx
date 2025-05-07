import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import ParallaxHero from "@/components/ParallaxHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  BrainCircuit, 
  Database, 
  Check, 
  Lightbulb, 
  Brain, 
  MessageCircle,
  Bot,
  Image as ImageIcon
} from "lucide-react";
import CalendarSyncIcon from "@/components/icons/CalendarSyncIcon";

const callAssistente = (msg) => {
  const numero = '5585920018032';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <ParallaxHero />
      
      {/* Benefícios Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nossos Assistentes Virtuais?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Disponibilidade 24/7</h3>
              <p className="text-gray-600">Atendimento ininterrupto para seus clientes, sem pausas ou esperas.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IA Avançada</h3>
              <p className="text-gray-600">Tecnologia de ponta para entender e resolver as necessidades dos clientes.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integração Completa</h3>
              <p className="text-gray-600">Conecte com seus sistemas existentes para um atendimento personalizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Escolha o Plano Ideal para seu Negócio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Assistente Jr</CardTitle>
                <div className="text-3xl font-bold text-center text-purple-600 my-4">R$ 200/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Processamento de texto inteligente</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Até 1.000 atendimentos/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Treinamento personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Sem taxa de implantação</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Aproveita seu whatsapp já existente</span>
                  </li>
                  <li className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                    <span>Aprendizado contínuo baseado no seu negócio</span>
                  </li>
                  <li className="flex items-center">
                    <Brain className="w-5 h-5 text-purple-500 mr-2" />
                    <span>Adaptação gradual à identidade da empresa</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" id="contratarJr"  onClick={() => callAssistente("Oi, gostaria de contratar um assistente Jr")} >Contratar</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 rounded-bl-lg text-sm">
                Mais Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Assistente Pleno</CardTitle>
                <div className="text-3xl font-bold text-center text-purple-600 my-4">R$ 550/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Tudo do plano Jr</span>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-blue-500 mr-2" />
                    <span>Modelo de IA avançado com conversação por áudio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Até 2.000 atendimentos/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                    <span>Inteligência de contexto aprimorada</span>
                  </li>
                  <li className="flex items-center">
                    <CalendarSyncIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span>Integração com Google Calendar</span>
                  </li>
                  <li className="flex items-center">
                    <Brain className="w-5 h-5 text-purple-500 mr-2" />
                    <span>Personalização avançada da identidade empresarial</span>
                  </li>
                </ul>
                <Button id="contratarJr"  onClick={() => callAssistente("Oi, gostaria de contratar um assistente Pleno")} className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Contratar</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Assistente Sênior</CardTitle>
                <div className="text-3xl font-bold text-center text-purple-600 my-4">R$ 1.320/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Tudo do plano Pleno</span>
                  </li>
                  <li className="flex items-center">
                    <ImageIcon className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Reconhecimento e análise de imagens</span>
                  </li>
                  <li className="flex items-center">
                    <Bot className="w-5 h-5 text-green-500 mr-2" />
                    <span>Sugestão de produtos baseada em imagens</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Até 4.000 atendimentos/mês</span>
                  </li>
                  <li className="flex items-center">
                    <BrainCircuit className="w-5 h-5 text-red-500 mr-2" />
                    <span>O melhor modelo de IA do mercado</span>
                  </li>
                  <li className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                    <span>Aprendizado profundo e contínuo</span>
                  </li>
                  <li className="flex items-center">
                    <Brain className="w-5 h-5 text-purple-500 mr-2" />
                    <span>Adaptação completa à identidade do seu negócio</span>
                  </li>
                </ul>
                <Button id="contratarJr"  onClick={() => callAssistente("Oi, gostaria de contratar um assistente Sênior")} className="w-full mt-6">Contratar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integração Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Integração Personalizada</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossos assistentes podem ser integrados aos seus sistemas existentes, garantindo um atendimento ainda mais eficiente e personalizado.
          </p>
          <Button id="faleComEspecialista"  onClick={() => callAssistente("Oi, gostaria de falar com um especialista")} variant="outline" size="lg" className="border-purple-500 text-purple-600 hover:bg-purple-50">
            Fale com um Especialista
          </Button>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Revolucionar seu Atendimento?</h2>
          <p className="text-xl mb-8">
            Comece agora mesmo com nossos assistentes virtuais e veja seu negócio crescer.
          </p>
          <Button id="comeceGratuitamente"  onClick={() => callAssistente("Oi, gostaria de fazer um teste gratuito")} size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700">
            Começar Gratuitamente
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
