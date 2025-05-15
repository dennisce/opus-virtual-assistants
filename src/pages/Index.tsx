
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
  Image as ImageIcon,
  LayoutDashboard,
  BarChart,
  TrendingUp,
  PieChart,
  LineChart,
  MessageSquare,
  Calendar
} from "lucide-react";
import CalendarSyncIcon from "@/components/icons/CalendarSyncIcon";
import { Link } from "react-router-dom";

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

      {/* Dashboard Analytics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Dashboard Analítico de Desempenho</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Acompanhe e otimize seu negócio com análises detalhadas de todas as interações com seus clientes.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/19756d8d-7697-46f4-9ad6-a1232ffae1df.png" 
                alt="Dashboard Analítico Opus" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <BarChart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Análises Estratégicas</h3>
                  <p className="text-gray-600">
                    Visualize pontos fortes e oportunidades de melhoria nas conversas com seus clientes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comportamento dos Clientes</h3>
                  <p className="text-gray-600">
                    Identifique padrões de comportamento e adapte seu negócio às necessidades reais.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recomendações Inteligentes</h3>
                  <p className="text-gray-600">
                    Receba sugestões concretas para melhorar seu atendimento e aumentar a satisfação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <LayoutDashboard className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalizável e Intuitivo</h3>
                  <p className="text-gray-600">
                    Dashboard adaptável às necessidades específicas do seu negócio, com interface amigável.
                  </p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 italic">
                * Análises avançadas com inteligência artificial disponíveis apenas no plano Assistente Sênior.
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button id="verDashboard" onClick={() => callAssistente("Olá, gostaria de saber mais sobre o dashboard analítico")} className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-full">
              Conheça nosso Dashboard Analítico
            </Button>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO - Monitoramento de Conversões */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Monitoramento Completo de Conversões</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Acompanhe em tempo real todas as conversões e indicadores-chave do seu negócio em um painel intuitivo.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <PieChart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Taxa de Conversão em Tempo Real</h3>
                  <p className="text-gray-600">
                    Monitore quanto do seu tráfego está se convertendo em clientes e oportunidades de negócio.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <LineChart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horários de Maior Engajamento</h3>
                  <p className="text-gray-600">
                    Identifique os períodos de maior demanda para otimizar suas estratégias de comunicação.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acompanhamento de Leads</h3>
                  <p className="text-gray-600">
                    Visualize o crescimento de potenciais clientes e compare com períodos anteriores.
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
                <p className="text-green-800 font-medium">
                  Disponível em todos os planos de assistentes! Transforme dados em decisões estratégicas para o seu negócio.
                </p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg order-1 lg:order-2 relative">
              <div className="absolute inset-0 backdrop-blur-md bg-white/30 z-10"></div>
              <img 
                src="/lovable-uploads/f88043ea-4c83-480f-84a7-61df0f42c8ef.png" 
                alt="Dashboard de Conversões Opus" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Button id="saibaMaisConversoes" onClick={() => callAssistente("Olá, gostaria de saber mais sobre o monitoramento de conversões")} className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-full">
              Saiba Mais Sobre Métricas de Conversão
            </Button>
          </div>
        </div>
      </section>
      
      {/* NOVA SEÇÃO - Acompanhamento de Conversas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Acompanhamento Detalhado de Conversas</h2>
          <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Acompanhe todas as interações entre seu assistente virtual e seus clientes com total transparência.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 backdrop-blur-md bg-white/30 z-10"></div>
              <img 
                src="/lovable-uploads/2131abd7-15eb-46b2-94bc-893724744281.png" 
                alt="Acompanhamento de Conversas Opus" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Histórico Completo</h3>
                  <p className="text-gray-600">
                    Acesse todo o histórico de conversas organizadas por data e cliente para análise detalhada.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Agendamentos Automáticos</h3>
                  <p className="text-gray-600">
                    Acompanhe todos os compromissos que seu assistente agenda diretamente com seus clientes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Supervisão de Qualidade</h3>
                  <p className="text-gray-600">
                    Avalie o desempenho do seu assistente e faça ajustes para melhorar o atendimento.
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
                <p className="text-green-800 font-medium">
                  Recurso disponível em todos os planos! Mantenha-se informado sobre todas as interações com seus clientes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button id="saibaMaisConversas" onClick={() => callAssistente("Olá, gostaria de saber mais sobre o acompanhamento de conversas")} className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-full">
              Conheça o Sistema de Acompanhamento
            </Button>
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
      
      {/* Terms of Use Footer Citation */}
      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Opus - Assistentes Inteligentes. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Ao usar nossos serviços, você concorda com nossos <Link to="/termos-de-uso" className="text-purple-600 hover:text-purple-800 underline">Termos de Uso</Link>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
