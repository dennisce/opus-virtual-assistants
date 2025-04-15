
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle, Bot, Database, BrainCircuit, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Transforme seu Atendimento com Assistentes Virtuais Inteligentes</h1>
            <p className="text-xl mb-8">Automatize seu suporte ao cliente com assistentes virtuais que entendem, aprendem e resolvem problemas 24/7.</p>
            <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700">
              Começar Agora
            </Button>
          </div>
        </div>
      </section>

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
                </ul>
                <Button className="w-full mt-6">Contratar</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 rounded-bl-lg text-sm">
                Mais Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Assistente Pleno</CardTitle>
                <div className="text-3xl font-bold text-center text-purple-600 my-4">R$ 500/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Tudo do plano Jr</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Mensagens de áudio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Até 2.000 atendimentos/mês</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Contratar</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Assistente Sênior</CardTitle>
                <div className="text-3xl font-bold text-center text-purple-600 my-4">R$ 1.200/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Tudo do plano Pleno</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Processamento de imagens</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Atendimentos ilimitados</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Contratar</Button>
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
          <Button variant="outline" size="lg" className="border-purple-500 text-purple-600 hover:bg-purple-50">
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
          <Button size="lg" variant="secondary" className="text-purple-600 hover:text-purple-700">
            Começar Gratuitamente
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
