import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t.footer.privacyPolicy}
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                1. Identificação do Controlador de Dados
              </h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Empresa:</strong> Opus</p>
                <p><strong>CNPJ:</strong> 36.558.676/0001-42</p>
                <p><strong>Endereço:</strong> AV PONTES VIEIRA,2340 SALA 719 - DIONÍSIO TORRES CEP:60.135-238 | FORTALEZA-CE</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                2. Dados Pessoais Coletados e Finalidades
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">A Opus coleta os seguintes dados pessoais dos usuários e clientes:</p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">Dados cadastrais:</h3>
                  <p className="text-gray-700">Nome completo, telefone, e-mail, CPF, endereço, informações comerciais para autenticação, personalização dos serviços e comunicação.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">Dados de navegação e cookies:</h3>
                  <p className="text-gray-700">IP, localização aproximada, dispositivo, tipo de navegador e histórico de navegação para melhoria da plataforma e análise estatística.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">Dados das APIs de mensageria (WhatsApp):</h3>
                  <p className="text-gray-700">Histórico de mensagens, número de telefone, metadados das interações para execução do serviço contratado e aprimoramento dos modelos de inteligência artificial.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                3. Bases Legais para o Tratamento
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">A coleta e o tratamento dos dados são fundamentados nas seguintes bases legais, conforme previsto na LGPD:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Consentimento:</strong> quando o usuário opta voluntariamente por fornecer seus dados para fins específicos como marketing.</li>
                  <li><strong>Execução de Contrato:</strong> quando necessário para prestação dos serviços contratados.</li>
                  <li><strong>Legítimo Interesse:</strong> para aprimoramento contínuo da plataforma e segurança dos sistemas.</li>
                  <li><strong>Cumprimento de Obrigação Legal:</strong> cumprimento de requisitos legais e regulatórios aplicáveis.</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                4. Período de Retenção dos Dados
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">Os dados pessoais serão retidos enquanto houver necessidade para cumprimento das finalidades mencionadas. Especificamente:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Dados cadastrais:</strong> mantidos durante o relacionamento contratual e até 5 anos após o término.</li>
                  <li><strong>Dados de navegação e cookies:</strong> armazenados por até 12 meses.</li>
                  <li><strong>Histórico de mensagens e interação via WhatsApp:</strong> retidos por até 2 anos para aprimoramento dos modelos de IA e análise estatística.</li>
                </ul>
                <p className="text-gray-700">Após os períodos indicados, os dados serão anonimizados ou excluídos definitivamente, observando técnicas seguras de descarte.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                5. Direitos dos Titulares dos Dados
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">Conforme LGPD, o titular pode solicitar:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Acesso aos dados pessoais tratados;</li>
                  <li>Correção de dados incompletos ou imprecisos;</li>
                  <li>Exclusão ou anonimização dos dados;</li>
                  <li>Portabilidade dos dados;</li>
                  <li>Revogação do consentimento previamente fornecido.</li>
                </ul>
                <p className="text-gray-700">
                  Solicitações podem ser feitas através do canal: <a href="mailto:Elli@opusapp.com.br" className="text-purple-600 hover:text-purple-800 underline">Elli@opusapp.com.br</a>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                6. Práticas e Medidas de Segurança
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">A Opus adota medidas técnicas e organizacionais rigorosas para proteção dos dados, incluindo:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Criptografia dos dados em trânsito (TLS/SSL) e repouso;</li>
                  <li>Controle rigoroso de acesso, com autenticação multifator;</li>
                  <li>Registro de logs detalhados;</li>
                  <li>Realização periódica de testes de vulnerabilidades;</li>
                  <li>Políticas de backup regulares e seguras.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                7. Compartilhamento de Dados com Terceiros
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">A Opus pode compartilhar dados com fornecedores e parceiros que viabilizam a prestação dos serviços:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provedores de infraestrutura em nuvem;</li>
                  <li>Plataformas de análise estatística (analytics);</li>
                  <li>Serviços de envio de e-mails.</li>
                </ul>
                <p className="text-gray-700">Estes parceiros são contratualmente obrigados a garantir a segurança dos dados pessoais e seguir estritamente esta política.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                8. Incidentes de Segurança e Notificação
              </h2>
              <p className="text-gray-700">
                Em caso de incidente ou vazamento de dados pessoais, a Opus compromete-se a notificar os titulares afetados e a Autoridade Nacional de Proteção de Dados (ANPD) dentro do prazo legal máximo de 48 horas após o conhecimento do fato, através de comunicação direta e por meio do website oficial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                9. Referências Normativas
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">Esta política está baseada nas normas nacionais e internacionais de referência:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Lei Geral de Proteção de Dados (LGPD);</li>
                  <li>Regulamento Geral sobre a Proteção de Dados (GDPR);</li>
                  <li>ISO 27001;</li>
                  <li>NIST Cybersecurity Framework (NIST CSF).</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                10. Atualizações desta Política
              </h2>
              <p className="text-gray-700">
                Esta política poderá ser revisada periodicamente para refletir alterações nas práticas de privacidade e segurança da Opus, sendo publicada uma nova versão em nosso website com a data da última atualização claramente indicada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                11. Responsabilidade pelo Conteúdo das Mensagens
              </h2>
              <p className="text-gray-700">
                A Opus não se responsabiliza pelo conteúdo das mensagens trocadas através da plataforma, sendo estas de responsabilidade exclusiva do tomador do serviço. Cabe ao cliente garantir a conformidade dessas comunicações com as leis aplicáveis e boas práticas comerciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                12. Uso dos Dados para Aperfeiçoamento da IA
              </h2>
              <p className="text-gray-700">
                Os dados pessoais e as interações realizadas serão utilizados para contínuo aprimoramento da performance dos modelos de Inteligência Artificial empregados pela Opus, buscando sempre melhorar a experiência dos usuários e a eficiência dos serviços prestados.
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

export default PrivacyPolicy;
