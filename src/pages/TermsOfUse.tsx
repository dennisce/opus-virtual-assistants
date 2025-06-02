
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

const TermsOfUse = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const content = {
    pt: {
      title: "Termos de Uso",
      sections: [
        {
          title: "1. Aceitação dos Termos",
          content: (
            <p className="text-gray-700">
              Ao acessar e utilizar os serviços oferecidos pela Opus, o usuário declara que leu, compreendeu e concorda integralmente com todos 
              os termos e condições estabelecidos nesta Política de Uso, comprometendo-se a respeitar e cumprir todas as disposições aqui contidas, 
              bem como demais normativas legais aplicáveis.
            </p>
          )
        },
        {
          title: "2. Descrição dos Serviços",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.1. Objeto dos Serviços</h3>
                <p className="text-gray-700 mb-3">
                  A Opus disponibiliza uma plataforma digital especializada em soluções de automação inteligente para atendimento 
                  via WhatsApp, alavancada por tecnologias de inteligência artificial.
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    en: {
      title: "Terms of Use",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: (
            <p className="text-gray-700">
              By accessing and using the services offered by Opus, the user declares that they have read, understood and fully agree with all 
              terms and conditions established in this Use Policy, committing to respect and comply with all provisions contained herein, 
              as well as other applicable legal regulations.
            </p>
          )
        },
        {
          title: "2. Service Description",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.1. Service Object</h3>
                <p className="text-gray-700 mb-3">
                  Opus provides a digital platform specialized in intelligent automation solutions for customer service 
                  via WhatsApp, powered by artificial intelligence technologies.
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    it: {
      title: "Termini di Utilizzo",
      sections: [
        {
          title: "1. Accettazione dei Termini",
          content: (
            <p className="text-gray-700">
              Accedendo e utilizzando i servizi offerti da Opus, l'utente dichiara di aver letto, compreso e accettato integralmente tutti 
              i termini e le condizioni stabiliti in questa Politica di Utilizzo, impegnandosi a rispettare e adempiere a tutte le disposizioni qui contenute, 
              così come ad altre normative legali applicabili.
            </p>
          )
        },
        {
          title: "2. Descrizione dei Servizi",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.1. Oggetto dei Servizi</h3>
                <p className="text-gray-700 mb-3">
                  Opus fornisce una piattaforma digitale specializzata in soluzioni di automazione intelligente per il servizio clienti 
                  via WhatsApp, alimentata da tecnologie di intelligenza artificiale.
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    de: {
      title: "Nutzungsbedingungen",
      sections: [
        {
          title: "1. Annahme der Bedingungen",
          content: (
            <p className="text-gray-700">
              Durch den Zugang und die Nutzung der von Opus angebotenen Dienste erklärt der Benutzer, dass er alle 
              Bedingungen und Konditionen dieser Nutzungsrichtlinie gelesen, verstanden und vollständig akzeptiert hat und sich verpflichtet, 
              alle hierin enthaltenen Bestimmungen sowie andere anwendbare rechtliche Vorschriften zu respektieren und einzuhalten.
            </p>
          )
        },
        {
          title: "2. Servicebeschreibung",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.1. Gegenstand der Dienste</h3>
                <p className="text-gray-700 mb-3">
                  Opus bietet eine digitale Plattform, die auf intelligente Automatisierungslösungen für den Kundenservice 
                  über WhatsApp spezialisiert ist und von Technologien der künstlichen Intelligenz angetrieben wird.
                </p>
              </div>
            </div>
          )
        }
      ]
    },
    nl: {
      title: "Gebruiksvoorwaarden",
      sections: [
        {
          title: "1. Acceptatie van Voorwaarden",
          content: (
            <p className="text-gray-700">
              Door toegang te krijgen tot en gebruik te maken van de diensten aangeboden door Opus, verklaart de gebruiker dat hij alle 
              voorwaarden en condities vastgesteld in dit Gebruiksbeleid heeft gelezen, begrepen en volledig accepteert, en zich verplicht 
              alle hierin vervatte bepalingen te respecteren en na te leven, evenals andere toepasselijke wettelijke voorschriften.
            </p>
          )
        },
        {
          title: "2. Servicebeschrijving",
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">2.1. Object van Diensten</h3>
                <p className="text-gray-700 mb-3">
                  Opus biedt een digitaal platform gespecialiseerd in intelligente automatiseringsoplossingen voor klantenservice 
                  via WhatsApp, aangedreven door kunstmatige intelligentie technologieën.
                </p>
              </div>
            </div>
          )
        }
      ]
    }
  };

  const currentContent = content[language] || content.pt;

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/" className="text-purple-600 hover:text-purple-800">
              {language === 'pt' ? 'Voltar para a página inicial' : 
               language === 'en' ? 'Back to home page' :
               language === 'it' ? 'Torna alla pagina iniziale' :
               language === 'de' ? 'Zurück zur Startseite' :
               'Terug naar homepage'}
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
