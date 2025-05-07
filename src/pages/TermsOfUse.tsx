
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Política de Uso da Plataforma Opus
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-700">
                Ao utilizar os serviços da Opus, o usuário concorda com os termos e condições estabelecidos nesta Política de Uso, 
                comprometendo-se a respeitar todas as diretrizes aqui descritas.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                2. Descrição dos Serviços
              </h2>
              <p className="text-gray-700 mb-3">
                A Opus oferece soluções de automação de atendimento via WhatsApp, utilizando inteligência artificial para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Responder automaticamente a mensagens</li>
                <li>Agendar compromissos</li>
                <li>Confirmar atendimentos</li>
                <li>Gerenciar interações com clientes</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Esses serviços visam otimizar o atendimento ao cliente, proporcionando agilidade e eficiência para clínicas e negócios locais.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                3. Cadastro e Acesso
              </h2>
              <p className="text-gray-700 mb-3">
                Para utilizar a plataforma Opus, o usuário deve:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fornecer informações precisas e atualizadas durante o processo de cadastro</li>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Notificar imediatamente a Opus sobre qualquer uso não autorizado de sua conta</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                4. Uso Adequado dos Serviços
              </h2>
              <p className="text-gray-700 mb-3">
                O usuário compromete-se a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Utilizar os serviços da Opus de maneira ética e legal</li>
                <li>Não empregar a plataforma para fins ilícitos, fraudulentos ou que infrinjam direitos de terceiros</li>
                <li>Abster-se de enviar mensagens não solicitadas (spam)</li>
                <li>Respeitar as políticas de uso do WhatsApp e demais plataformas integradas</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                5. Privacidade e Proteção de Dados
              </h2>
              <p className="text-gray-700">
                A Opus valoriza a privacidade dos usuários e adota medidas para proteger os dados pessoais coletados. As informações fornecidas são 
                utilizadas exclusivamente para a prestação dos serviços contratados e não são compartilhadas com terceiros sem o consentimento do 
                usuário, exceto quando exigido por lei.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                6. Responsabilidades do Usuário
              </h2>
              <p className="text-gray-700 mb-3">
                O usuário é responsável por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Garantir que as informações fornecidas à Opus sejam verdadeiras e atualizadas</li>
                <li>Utilizar os serviços de acordo com esta Política de Uso</li>
                <li>Responder por quaisquer consequências decorrentes do uso indevido da plataforma</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                7. Modificações na Política de Uso
              </h2>
              <p className="text-gray-700">
                A Opus reserva-se o direito de alterar esta Política de Uso a qualquer momento, sendo responsabilidade do usuário verificar 
                periodicamente as atualizações. O uso contínuo dos serviços após alterações implica na aceitação dos novos termos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                8. Contato
              </h2>
              <p className="text-gray-700">
                Em caso de dúvidas ou esclarecimentos sobre esta Política de Uso, o usuário pode entrar em contato com a Opus através 
                dos canais disponíveis no site oficial: <a href="https://opusapp.com.br" className="text-purple-600 hover:text-purple-800 underline">opusapp.com.br</a>.
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
          <p>© {new Date().getFullYear()} Opus - Assistentes Inteligentes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
