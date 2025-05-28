
import { useState } from "react";
import { ChevronRight, Bot, Calendar, Users, Link, Bell, Megaphone, Star, ShoppingCart, CreditCard, UserCheck, BarChart3, ArrowRightLeft, FileText, MessageSquare, Globe, CheckCircle, Send, Clock, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Resposta automática a dúvidas frequentes",
    description: "Atenda seus clientes 24 horas por dia, 7 dias por semana, solucionando as principais dúvidas instantaneamente, sem sobrecarregar sua equipe. Proporcione agilidade e aumente a satisfação, seja você um pequeno comércio ou uma grande operação com alto volume de contatos.",
    icon: Bot
  },
  {
    id: 2,
    title: "Gestão completa de agendamentos",
    description: "Deixe o agente cuidar de todo o fluxo de agendamentos: marca, confirma, cancela e remarca compromissos sem esforço manual. Transforme o WhatsApp em sua agenda inteligente, facilitando o dia a dia do pequeno empreendedor e otimizando o tempo de grandes empresas com múltiplos clientes.",
    icon: Calendar
  },
  {
    id: 3,
    title: "Geração de leads qualificados",
    description: "Capte automaticamente novos clientes interessados em seus produtos ou serviços. A IA identifica oportunidades de negócio, faz perguntas estratégicas e encaminha leads já filtrados para você, potencializando vendas para negócios de qualquer porte.",
    icon: Users
  },
  {
    id: 4,
    title: "Integração com sistemas externos",
    description: "Conecte seu WhatsApp ao seu sistema de gestão, CRM, loja virtual ou plataforma de pagamentos, automatizando tarefas e centralizando informações. Pequenos negócios ganham profissionalismo; grandes empresas aceleram processos e reduzem falhas.",
    icon: Link
  },
  {
    id: 5,
    title: "Notificações e lembretes automáticos",
    description: "Aumente a presença e a recorrência dos seus clientes com lembretes automáticos de agendamentos, pagamentos, entregas e promoções. Evite esquecimentos, reduza faltas e mantenha seu cliente sempre próximo, independentemente do tamanho da sua empresa.",
    icon: Bell
  },
  {
    id: 6,
    title: "Envio de promoções e novidades",
    description: "Divulgue ofertas, lançamentos e eventos automaticamente para seus contatos. Garanta que seus clientes recebam novidades de forma personalizada, aumentando as chances de conversão e promovendo campanhas segmentadas para todos os públicos.",
    icon: Megaphone
  },
  {
    id: 7,
    title: "Pesquisa de satisfação",
    description: "Colete feedbacks valiosos direto no WhatsApp ao final de cada atendimento, serviço ou compra. Melhore a experiência do cliente de forma contínua e utilize os dados para ajustar processos, seja na pequena empresa familiar ou em operações de grande escala.",
    icon: Star
  },
  {
    id: 8,
    title: "Realização de vendas automatizadas",
    description: "Transforme conversas em vendas, guiando o cliente até a finalização do pedido de forma 100% automática. Pequenos negócios conquistam mais vendas sem esforço, enquanto grandes players otimizam o funil e aumentam o ticket médio.",
    icon: ShoppingCart
  },
  {
    id: 9,
    title: "Recebimento de pagamentos via link",
    description: "Envie links de pagamento seguros e receba diretamente pelo WhatsApp, facilitando o fechamento de vendas e reduzindo inadimplência. Uma solução ágil tanto para quem vende de forma autônoma quanto para grandes redes.",
    icon: CreditCard
  },
  {
    id: 10,
    title: "Suporte a múltiplos atendentes",
    description: "Gerencie atendimentos simultâneos, direcionando conversas automaticamente para diferentes setores ou membros da equipe. Pequenos negócios podem crescer sem perder o controle; grandes empresas ganham escala e organização.",
    icon: UserCheck
  },
  {
    id: 11,
    title: "Segmentação automática de clientes",
    description: "Identifique automaticamente o perfil de cada cliente e segmente o atendimento conforme interesses, histórico e comportamento. Proporcione experiências personalizadas para todos e direcione campanhas com maior precisão, nivelando o jogo entre pequenos e grandes.",
    icon: Users
  },
  {
    id: 12,
    title: "Análise de comportamento e relatórios",
    description: "Acompanhe métricas essenciais, descubra padrões de comportamento e tome decisões baseadas em dados. Receba relatórios automatizados com insights que ajudam tanto a pequena loja a crescer quanto grandes empresas a maximizar seus resultados.",
    icon: BarChart3
  },
  {
    id: 13,
    title: "Encaminhamento para atendimento humano",
    description: "Quando necessário, o agente transfere a conversa para um atendente humano, mantendo todo o histórico do cliente. Assim, você garante um atendimento humanizado e ágil, sem perder o contexto.",
    icon: ArrowRightLeft
  },
  {
    id: 14,
    title: "Coleta e envio de documentos",
    description: "Solicite e receba arquivos, documentos ou fotos diretamente pelo WhatsApp, facilitando processos como cadastro, orçamento, suporte técnico e comprovação de entregas. Agilidade e segurança para qualquer negócio.",
    icon: FileText
  },
  {
    id: 15,
    title: "Mensagens personalizadas por perfil",
    description: "Programe mensagens automáticas adaptadas ao horário, à campanha ativa ou ao perfil de cada cliente. Amplie o engajamento e mostre que cada contato é especial, independentemente do volume de atendimentos.",
    icon: MessageSquare
  },
  {
    id: 16,
    title: "Atendimento multilíngue",
    description: "Atenda clientes em diferentes idiomas automaticamente, ampliando suas oportunidades de negócio para além das fronteiras e profissionalizando sua comunicação, seja qual for o porte da empresa.",
    icon: Globe
  },
  {
    id: 17,
    title: "Validação de informações cadastrais",
    description: "Garanta dados atualizados dos clientes, validando informações como nome, CPF, endereço ou e-mail via WhatsApp, automatizando processos e aumentando a confiabilidade do seu cadastro.",
    icon: CheckCircle
  },
  {
    id: 18,
    title: "Envio de arquivos e PDFs",
    description: "Compartilhe rapidamente contratos, orçamentos, tutoriais ou qualquer arquivo necessário com seus clientes, tornando o atendimento mais completo e reduzindo etapas manuais.",
    icon: Send
  },
  {
    id: 19,
    title: "Respostas baseadas em contexto",
    description: "A IA entende o histórico de cada cliente, oferecendo respostas personalizadas e relevantes, o que aumenta a eficiência e a satisfação de quem busca atendimento contínuo e inteligente.",
    icon: Clock
  },
  {
    id: 20,
    title: "Consulta de status de pedidos",
    description: "Permita que seus clientes consultem o andamento de pedidos, entregas ou solicitações diretamente pelo WhatsApp, trazendo mais transparência, autonomia e profissionalismo para seu negócio.",
    icon: Search
  }
];

const InteractiveFeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  const handleClose = () => {
    setSelectedFeature(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Funcionalidades Completas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode transformar seu atendimento no WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.id} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                onClick={() => handleFeatureClick(feature)}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-purple-500 transition-colors duration-300">
                    Clique para detalhes
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Modal */}
        {selectedFeature && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <selectedFeature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedFeature.title}
                    </h3>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-6">
                  <img 
                    src={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center`}
                    alt={selectedFeature.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {selectedFeature.description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleClose}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveFeaturesSection;
