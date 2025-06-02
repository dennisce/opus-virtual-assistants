import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

const TermsOfUse = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t.footer.termsOfUse}
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-700">
                Ao acessar e utilizar os serviços oferecidos pela Opus, o usuário declara que leu, compreendeu e concorda integralmente com todos 
                os termos e condições estabelecidos nesta Política de Uso, comprometendo-se a respeitar e cumprir todas as disposições aqui contidas, 
                bem como demais normativas legais aplicáveis.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                2. Descrição dos Serviços
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.1. Objeto dos Serviços</h3>
                  <p className="text-gray-700 mb-3">
                    A Opus disponibiliza uma plataforma digital especializada em soluções de automação inteligente para atendimento 
                    via WhatsApp, alavancada por tecnologias de inteligência artificial, com o objetivo de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Responder automaticamente a mensagens recebidas;</li>
                    <li>Agendar compromissos e gerenciar confirmações de atendimentos;</li>
                    <li>Controlar e administrar interações com clientes e leads;</li>
                    <li>Otimizar fluxos de atendimento para clínicas, estabelecimentos comerciais e demais negócios locais, promovendo agilidade, eficiência e aumento da conversão.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.2. Classificação dos Assistentes Virtuais</h3>
                  <p className="text-gray-700 mb-3">
                    A plataforma oferece três categorias distintas de assistentes virtuais, cujas funcionalidades, limitações e custos são detalhados a seguir:
                  </p>
                  
                  <div className="pl-4 space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-purple-600">2.2.1. Assistente Jr.</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Características: Assistente básico destinado a automação de respostas simples e rotinas pré-configuradas.</li>
                        <li>Capacidades: Processamento textual limitado; suporte para até 1.000 atendimentos mensais.</li>
                        <li>Restrições: Não suporta personalizações avançadas, integrações externas ou geração automática de relatórios.</li>
                        <li>Custos: Incluído nos planos básicos sem cobrança adicional.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-purple-600">2.2.2. Assistente Pleno</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Características: Assistente intermediário com capacidades ampliadas, incluindo interpretação dinâmica de texto.</li>
                        <li>Capacidades: Suporte para até 2.000 atendimentos mensais; geração automática de relatórios básicos; integrações limitadas com sistemas padrão.</li>
                        <li>Restrições: Integrações restritas ao pacote contratado; não contempla análises preditivas ou aprendizado contínuo personalizado.</li>
                        <li>Custos: Incluído em planos intermediários; cobranças extras aplicáveis para excedentes.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-purple-600">2.2.3. Assistente Sênior</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Características: Assistente avançado, personalizado para replicar características específicas do cliente, com aprendizado contínuo.</li>
                        <li>Capacidades: Suporte para até 4.000 atendimentos mensais; integração completa com múltiplos sistemas (CRM, ERP, APIs customizadas); geração de análises preditivas e relatórios detalhados.</li>
                        <li>Restrições: Integrações adicionais e personalizações específicas sujeitas a custos extras; implementação mediante contrato específico.</li>
                        <li>Custos: Valor base inclui funcionalidades padrão; integrações e automações personalizadas serão cobradas à parte, mediante aprovação prévia.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.3. Restrições Gerais e Responsabilidades</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>O uso dos serviços deverá obedecer integralmente às legislações vigentes, especialmente no que tange à proteção de dados pessoais e privacidade.</li>
                    <li>É vedado o uso da plataforma para práticas ilícitas, envio de mensagens não solicitadas (spam), conteúdos ofensivos ou que violem direitos de terceiros.</li>
                    <li>A Opus não se responsabiliza por falhas decorrentes de integrações externas, uso inadequado ou intervenções não autorizadas.</li>
                    <li>O usuário é responsável pela veracidade dos dados fornecidos e pela segurança de suas credenciais de acesso.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.4. Custos e Condições Comerciais</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Os serviços básicos e intermediários contemplam os assistentes Jr. e Pleno, com limites definidos por plano comercial.</li>
                    <li>O Assistente Sênior, por sua complexidade e personalização, demanda negociação específica, com custos adicionais para integrações, licenças de terceiros, suporte dedicado e manutenções específicas.</li>
                    <li>Todos os custos adicionais serão previamente comunicados e somente cobrados mediante concordância formal do cliente.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.5. Atualizações, Modificações e Continuidade</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>A Opus reserva-se o direito de alterar, aprimorar ou descontinuar funcionalidades e tipos de assistentes, mediante notificação prévia.</li>
                    <li>Ajustes tarifários poderão ocorrer em conformidade com variações tecnológicas, regulamentares ou operacionais.</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                3. Cadastro e Acesso
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Para utilização da plataforma, o usuário deve fornecer informações verdadeiras, completas e atualizadas durante o processo de cadastro.</li>
                <li>É obrigação do usuário manter a confidencialidade e segurança de suas credenciais de acesso, responsabilizando-se por quaisquer ações realizadas sob sua conta.</li>
                <li>O usuário deve comunicar imediatamente à Opus qualquer uso não autorizado ou suspeito de sua conta.</li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                4. Uso Adequado dos Serviços
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>O usuário compromete-se a utilizar a plataforma de forma ética, legal e em conformidade com as disposições desta Política e demais normas aplicáveis.</li>
                <li>É proibida a utilização para fins ilícitos, fraudulentos, abusivos, que infrinjam direitos de terceiros ou que violem as políticas das plataformas integradas, especialmente o WhatsApp.</li>
                <li>O envio de mensagens em massa não solicitadas (spam) é expressamente vedado.</li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                5. Privacidade e Proteção de Dados
              </h2>
              <p className="text-gray-700">
                A Opus adota rigorosas medidas técnicas e administrativas para proteção dos dados pessoais fornecidos, utilizando-os exclusivamente para 
                prestação dos serviços contratados. Os dados não serão compartilhados com terceiros sem consentimento expresso, salvo em hipóteses legais 
                ou regulamentares.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                6. Responsabilidades do Usuário
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Garantir a veracidade e atualização contínua das informações fornecidas.</li>
                <li>Utilizar os serviços em conformidade com esta Política e demais normas aplicáveis.</li>
                <li>Responder por quaisquer danos ou prejuízos decorrentes do uso indevido da plataforma.</li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                7. Modificações na Política de Uso
              </h2>
              <p className="text-gray-700">
                A Opus poderá alterar esta Política a qualquer tempo, mediante publicação das atualizações em seu website. 
                É responsabilidade do usuário consultar periodicamente a versão vigente. O uso contínuo dos serviços após 
                tais alterações implicará na aceitação tácita dos novos termos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                8. Contato
              </h2>
              <p className="text-gray-700">
                Para dúvidas, solicitações ou esclarecimentos relacionados a esta Política de Uso, o usuário poderá contatar 
                a Opus por meio do email: <a href="mailto:Elli@opusapp.com.br" className="text-purple-600 hover:text-purple-800 underline">Elli@opusapp.com.br</a>.
              </p>
            </section>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/" className="text-purple-600 hover:text-purple-800">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      
      {/* Footer similar to home page */}
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
