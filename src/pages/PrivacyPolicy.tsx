
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const content = {
    pt: {
      title: "Política de Privacidade",
      sections: [
        {
          title: "1. Identificação do Controlador de Dados",
          content: (
            <div className="text-gray-700 space-y-2">
              <p><strong>Empresa:</strong> Opus</p>
              <p><strong>CNPJ:</strong> 36.558.676/0001-42</p>
              <p><strong>Endereço:</strong> AV PONTES VIEIRA,2340 SALA 719 - DIONÍSIO TORRES CEP:60.135-238 | FORTALEZA-CE</p>
            </div>
          )
        },
        {
          title: "2. Dados Pessoais Coletados e Finalidades",
          content: (
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
          )
        }
        // ... outros sections mantidos iguais para PT
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Data Controller Identification",
          content: (
            <div className="text-gray-700 space-y-2">
              <p><strong>Company:</strong> Opus</p>
              <p><strong>Tax ID:</strong> 36.558.676/0001-42</p>
              <p><strong>Address:</strong> AV PONTES VIEIRA,2340 SALA 719 - DIONÍSIO TORRES CEP:60.135-238 | FORTALEZA-CE, Brazil</p>
            </div>
          )
        },
        {
          title: "2. Personal Data Collected and Purposes",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Opus collects the following personal data from users and customers:</p>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Registration data:</h3>
                <p className="text-gray-700">Full name, phone, email, tax ID, address, commercial information for authentication, service personalization and communication.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Navigation and cookie data:</h3>
                <p className="text-gray-700">IP, approximate location, device, browser type and browsing history for platform improvement and statistical analysis.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Messaging API data (WhatsApp):</h3>
                <p className="text-gray-700">Message history, phone number, interaction metadata for contracted service execution and artificial intelligence model enhancement.</p>
              </div>
            </div>
          )
        }
      ]
    },
    it: {
      title: "Politica sulla Privacy",
      sections: [
        {
          title: "1. Identificazione del Titolare del Trattamento",
          content: (
            <div className="text-gray-700 space-y-2">
              <p><strong>Azienda:</strong> Opus</p>
              <p><strong>Codice Fiscale:</strong> 36.558.676/0001-42</p>
              <p><strong>Indirizzo:</strong> AV PONTES VIEIRA,2340 SALA 719 - DIONÍSIO TORRES CEP:60.135-238 | FORTALEZA-CE, Brasile</p>
            </div>
          )
        },
        {
          title: "2. Dati Personali Raccolti e Finalità",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Opus raccoglie i seguenti dati personali da utenti e clienti:</p>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Dati di registrazione:</h3>
                <p className="text-gray-700">Nome completo, telefono, email, codice fiscale, indirizzo, informazioni commerciali per autenticazione, personalizzazione dei servizi e comunicazione.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Dati di navigazione e cookie:</h3>
                <p className="text-gray-700">IP, posizione approssimativa, dispositivo, tipo di browser e cronologia di navigazione per miglioramento della piattaforma e analisi statistica.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Dati delle API di messaggistica (WhatsApp):</h3>
                <p className="text-gray-700">Cronologia messaggi, numero di telefono, metadati delle interazioni per esecuzione del servizio contrattuale e miglioramento dei modelli di intelligenza artificiale.</p>
              </div>
            </div>
          )
        }
      ]
    },
    de: {
      title: "Datenschutzrichtlinie",
      sections: [
        {
          title: "1. Identifikation des Datenverantwortlichen",
          content: (
            <div className="text-gray-700 space-y-2">
              <p><strong>Unternehmen:</strong> Opus</p>
              <p><strong>Steuer-ID:</strong> 36.558.676/0001-42</p>
              <p><strong>Adresse:</strong> AV PONTES VIEIRA,2340 SALA 719 - DIONÍSIO TORRES CEP:60.135-238 | FORTALEZA-CE, Brasilien</p>
            </div>
          )
        },
        {
          title: "2. Gesammelte Personendaten und Zwecke",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Opus sammelt die folgenden personenbezogenen Daten von Benutzern und Kunden:</p>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Registrierungsdaten:</h3>
                <p className="text-gray-700">Vollständiger Name, Telefon, E-Mail, Steuer-ID, Adresse, kommerzielle Informationen für Authentifizierung, Service-Personalisierung und Kommunikation.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Navigations- und Cookie-Daten:</h3>
                <p className="text-gray-700">IP, ungefähre Standort, Gerät, Browser-Typ und Browsing-Verlauf für Plattformverbesserung und statistische Analyse.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Messaging-API-Daten (WhatsApp):</h3>
                <p className="text-gray-700">Nachrichtenverlauf, Telefonnummer, Interaktions-Metadaten für die Ausführung vertraglicher Dienstleistungen und Verbesserung der KI-Modelle.</p>
              </div>
            </div>
          )
        }
      ]
    },
    nl: {
      title: "Privacybeleid",
      sections: [
        {
          title: "1. Identificatie van de Gegevensverantwoordelijke",
          content: (
            <div className="text-gray-700 space-y-2">
              <p><strong>Bedrijf:</strong> Opus</p>
              <p><strong>BTW-nummer:</strong> 36.558.676/0001-42</p>
              <p><strong>Adres:</strong> AV PONTES VIEIRA,2340 SALA 719 - DIONÍSIO TORRES CEP:60.135-238 | FORTALEZA-CE, Brazilië</p>
            </div>
          )
        },
        {
          title: "2. Verzamelde Persoonsgegevens en Doeleinden",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Opus verzamelt de volgende persoonsgegevens van gebruikers en klanten:</p>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Registratiegegevens:</h3>
                <p className="text-gray-700">Volledige naam, telefoon, e-mail, BTW-nummer, adres, commerciële informatie voor authenticatie, servicepersonalisatie en communicatie.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Navigatie- en cookiegegevens:</h3>
                <p className="text-gray-700">IP, geschatte locatie, apparaat, browsertype en browsegeschiedenis voor platformverbetering en statistische analyse.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Messaging API-gegevens (WhatsApp):</h3>
                <p className="text-gray-700">Berichtgeschiedenis, telefoonnummer, interactie-metadata voor uitvoering van gecontracteerde diensten en verbetering van AI-modellen.</p>
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

export default PrivacyPolicy;
