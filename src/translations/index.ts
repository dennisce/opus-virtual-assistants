
import { Language } from '@/contexts/LanguageContext';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    startNow: string;
    learnMore: string;
  };
  navbar: {
    login: string;
    startNow: string;
  };
  conversion: {
    title: string;
    subtitle: string;
  };
  reports: {
    title: string;
    subtitle: string;
    identification: {
      title: string;
      description: string;
    };
    detailed: {
      title: string;
      description: string;
    };
    recovery: {
      title: string;
      description: string;
    };
    learnMore: string;
  };
  benefits: {
    title: string;
    fastImplementation: {
      title: string;
      description: string;
    };
    totalSecurity: {
      title: string;
      description: string;
    };
    specializedSupport: {
      title: string;
      description: string;
    };
    provenROI: {
      title: string;
      description: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: {
      jr: {
        name: string;
        features: string[];
      };
      pleno: {
        name: string;
        features: string[];
      };
      senior: {
        name: string;
        features: string[];
      };
      ceo: {
        name: string;
        features: string[];
      };
    };
    contractNow: string;
    requestProposal: string;
    importantInfo: {
      title: string;
      points: string[];
    };
    popular: string;
    enterprise: string;
  };
  cta: {
    title: string;
    subtitle: string;
    startNow: string;
  };
  footer: {
    copyright: string;
    disclaimer: string;
    privacyPolicy: string;
    termsOfUse: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    hero: {
      title: "Atendimento Inteligente para WhatsApp",
      subtitle: "Automatize suas conversas, agende compromissos e impulsione suas vendas com nossa plataforma de IA",
      startNow: "Começar Agora",
      learnMore: "Saiba Mais"
    },
    navbar: {
      login: "Login",
      startNow: "Começar Agora"
    },
    conversion: {
      title: "Monitoramento Completo de Conversões",
      subtitle: "Acompanhe cada interação e otimize seus resultados com dados precisos e actionáveis"
    },
    reports: {
      title: "Não perca mais nada",
      subtitle: "Receba relatórios diários automáticos sobre todas as pendências e oportunidades perdidas, garantindo que nenhum cliente seja esquecido",
      identification: {
        title: "Identificação de Pendências",
        description: "Nossa IA monitora constantemente todas as conversas e identifica automaticamente clientes que ficaram sem resposta ou com questões em aberto."
      },
      detailed: {
        title: "Relatórios Detalhados",
        description: "Receba diariamente um resumo completo com todas as pendências, incluindo sugestões de mensagens personalizadas para reativar cada cliente."
      },
      recovery: {
        title: "Recuperação de Oportunidades",
        description: "Transforme pendências em vendas com follow-ups inteligentes e automatizados, aumentando sua taxa de conversão e satisfação do cliente."
      },
      learnMore: "Saiba Mais sobre Relatórios"
    },
    benefits: {
      title: "Por que escolher a Opus?",
      fastImplementation: {
        title: "Implementação Rápida",
        description: "Configure em minutos e comece a ver resultados imediatamente"
      },
      totalSecurity: {
        title: "Segurança Total",
        description: "Seus dados protegidos com criptografia de ponta a ponta"
      },
      specializedSupport: {
        title: "Suporte Especializado",
        description: "Equipe técnica disponível para maximizar seus resultados"
      },
      provenROI: {
        title: "ROI Comprovado",
        description: "Aumento sua taxa de conversão por não perder nenhuma oportunidade"
      }
    },
    pricing: {
      title: "Escolha o Plano Ideal",
      subtitle: "Temos o assistente perfeito para cada tipo de negócio",
      plans: {
        jr: {
          name: "Assistente Jr.",
          features: [
            "Processamento de texto inteligente",
            "Até 1.000 atendimentos/mês",
            "Treinamento personalizado",
            "Sem taxa de implantação",
            "Aproveita seu WhatsApp já existente",
            "Aprendizado contínuo baseado no seu negócio",
            "Adaptação gradual à identidade da empresa"
          ]
        },
        pleno: {
          name: "Assistente Pleno",
          features: [
            "Tudo do plano Jr.",
            "Modelo de IA avançado com conversação por áudio",
            "Até 2.000 atendimentos/mês",
            "Inteligência de contexto aprimorada",
            "Integração com Google Calendar",
            "Personalização avançada da identidade empresarial"
          ]
        },
        senior: {
          name: "Assistente Sênior",
          features: [
            "Tudo do plano Pleno",
            "Reconhecimento e análise de imagens",
            "Sugestão de produtos baseada em imagens",
            "Até 4.000 atendimentos/mês",
            "O melhor modelo de IA do mercado",
            "Aprendizado profundo e contínuo",
            "Adaptação completa à identidade do seu negócio",
            "Integrações com sistemas externos"
          ]
        },
        ceo: {
          name: "Assistente CEO",
          features: [
            "Tudo do plano Sênior",
            "Atendimentos Ilimitados e SLA Prioritário",
            "Consultoria Estratégica Mensal",
            "Suporte a Multitenancy / Filiais",
            "Reconhecimento e Processamento de Documentos",
            "IA Generativa Personalizada com fine tuning e RAG",
            "Automatizações Inteligentes de Processos",
            "Gerente de Conta Dedicado",
            "API Personalizada e Webhooks"
          ]
        }
      },
      contractNow: "Contratar Agora",
      requestProposal: "Solicitar Proposta",
      importantInfo: {
        title: "Informações Importantes",
        points: [
          "Apenas o Assistente Sênior inclui integrações com sistemas externos (ERP, CRM, e-commerce, etc.)",
          "As customizações para integrações com sistemas externos precisam ser orçadas e analisadas caso a caso",
          "Para maiores informações, consulte nossos Termos de Uso e Política de Privacidade"
        ]
      },
      popular: "Mais Popular",
      enterprise: "Enterprise"
    },
    cta: {
      title: "Pronto para Transformar seu Atendimento?",
      subtitle: "Junte-se a centenas de empresas que já revolucionaram seu atendimento com nossa plataforma",
      startNow: "Começar Agora"
    },
    footer: {
      copyright: "Opus - Assistentes Inteligentes. Todos os direitos reservados.",
      disclaimer: "Ao usar nossos serviços, você concorda com nossa",
      privacyPolicy: "Política de Privacidade",
      termsOfUse: "Termo de uso"
    }
  },
  en: {
    hero: {
      title: "Intelligent Support for WhatsApp",
      subtitle: "Automate your conversations, schedule appointments and boost your sales with our AI platform",
      startNow: "Start Now",
      learnMore: "Learn More"
    },
    navbar: {
      login: "Login",
      startNow: "Start Now"
    },
    conversion: {
      title: "Complete Conversion Monitoring",
      subtitle: "Track every interaction and optimize your results with precise and actionable data"
    },
    reports: {
      title: "Never miss anything again",
      subtitle: "Receive automatic daily reports on all pending issues and missed opportunities, ensuring no customer is forgotten",
      identification: {
        title: "Pending Issues Identification",
        description: "Our AI constantly monitors all conversations and automatically identifies customers who were left unanswered or with open questions."
      },
      detailed: {
        title: "Detailed Reports",
        description: "Receive daily a complete summary with all pending issues, including personalized message suggestions to reactivate each customer."
      },
      recovery: {
        title: "Opportunity Recovery",
        description: "Transform pending issues into sales with intelligent and automated follow-ups, increasing your conversion rate and customer satisfaction."
      },
      learnMore: "Learn More About Reports"
    },
    benefits: {
      title: "Why choose Opus?",
      fastImplementation: {
        title: "Fast Implementation",
        description: "Set up in minutes and start seeing results immediately"
      },
      totalSecurity: {
        title: "Total Security",
        description: "Your data protected with end-to-end encryption"
      },
      specializedSupport: {
        title: "Specialized Support",
        description: "Technical team available to maximize your results"
      },
      provenROI: {
        title: "Proven ROI",
        description: "Increase your conversion rate by not missing any opportunity"
      }
    },
    pricing: {
      title: "Choose the Ideal Plan",
      subtitle: "We have the perfect assistant for every type of business",
      plans: {
        jr: {
          name: "Jr. Assistant",
          features: [
            "Intelligent text processing",
            "Up to 1,000 interactions/month",
            "Personalized training",
            "No implementation fee",
            "Use your existing WhatsApp",
            "Continuous learning based on your business",
            "Gradual adaptation to company identity"
          ]
        },
        pleno: {
          name: "Mid-level Assistant",
          features: [
            "Everything from Jr. plan",
            "Advanced AI model with audio conversation",
            "Up to 2,000 interactions/month",
            "Enhanced context intelligence",
            "Google Calendar integration",
            "Advanced business identity customization"
          ]
        },
        senior: {
          name: "Senior Assistant",
          features: [
            "Everything from Mid-level plan",
            "Image recognition and analysis",
            "Image-based product suggestions",
            "Up to 4,000 interactions/month",
            "The best AI model on the market",
            "Deep and continuous learning",
            "Complete adaptation to your business identity",
            "External system integrations"
          ]
        },
        ceo: {
          name: "CEO Assistant",
          features: [
            "Everything from Senior plan",
            "Unlimited Interactions and Priority SLA",
            "Monthly Strategic Consulting",
            "Multitenancy / Branch Support",
            "Document Recognition and Processing",
            "Personalized Generative AI with fine tuning and RAG",
            "Intelligent Process Automations",
            "Dedicated Account Manager",
            "Custom API and Webhooks"
          ]
        }
      },
      contractNow: "Contract Now",
      requestProposal: "Request Proposal",
      importantInfo: {
        title: "Important Information",
        points: [
          "Only the Senior Assistant includes external system integrations (ERP, CRM, e-commerce, etc.)",
          "Customizations for external system integrations need to be quoted and analyzed case by case",
          "For more information, check our Terms of Use and Privacy Policy"
        ]
      },
      popular: "Most Popular",
      enterprise: "Enterprise"
    },
    cta: {
      title: "Ready to Transform Your Support?",
      subtitle: "Join hundreds of companies that have already revolutionized their customer service with our platform",
      startNow: "Start Now"
    },
    footer: {
      copyright: "Opus - Intelligent Assistants. All rights reserved.",
      disclaimer: "By using our services, you agree to our",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use"
    }
  },
  it: {
    hero: {
      title: "Supporto Intelligente per WhatsApp",
      subtitle: "Automatizza le tue conversazioni, programma appuntamenti e potenzia le tue vendite con la nostra piattaforma AI",
      startNow: "Inizia Ora",
      learnMore: "Scopri di Più"
    },
    navbar: {
      login: "Accedi",
      startNow: "Inizia Ora"
    },
    conversion: {
      title: "Monitoraggio Completo delle Conversioni",
      subtitle: "Traccia ogni interazione e ottimizza i tuoi risultati con dati precisi e actionabili"
    },
    reports: {
      title: "Non perdere più nulla",
      subtitle: "Ricevi rapporti giornalieri automatici su tutte le questioni in sospeso e le opportunità perse, garantendo che nessun cliente venga dimenticato",
      identification: {
        title: "Identificazione Questioni in Sospeso",
        description: "La nostra IA monitora costantemente tutte le conversazioni e identifica automaticamente i clienti rimasti senza risposta o con questioni aperte."
      },
      detailed: {
        title: "Rapporti Dettagliati",
        description: "Ricevi quotidianamente un riassunto completo con tutte le questioni in sospeso, inclusi suggerimenti di messaggi personalizzati per riattivare ogni cliente."
      },
      recovery: {
        title: "Recupero Opportunità",
        description: "Trasforma le questioni in sospeso in vendite con follow-up intelligenti e automatizzati, aumentando il tuo tasso di conversione e la soddisfazione del cliente."
      },
      learnMore: "Scopri di Più sui Rapporti"
    },
    benefits: {
      title: "Perché scegliere Opus?",
      fastImplementation: {
        title: "Implementazione Rapida",
        description: "Configura in pochi minuti e inizia a vedere risultati immediatamente"
      },
      totalSecurity: {
        title: "Sicurezza Totale",
        description: "I tuoi dati protetti con crittografia end-to-end"
      },
      specializedSupport: {
        title: "Supporto Specializzato",
        description: "Team tecnico disponibile per massimizzare i tuoi risultati"
      },
      provenROI: {
        title: "ROI Comprovato",
        description: "Aumenta il tuo tasso di conversione non perdendo nessuna opportunità"
      }
    },
    pricing: {
      title: "Scegli il Piano Ideale",
      subtitle: "Abbiamo l'assistente perfetto per ogni tipo di business",
      plans: {
        jr: {
          name: "Assistente Jr.",
          features: [
            "Elaborazione intelligente del testo",
            "Fino a 1.000 interazioni/mese",
            "Formazione personalizzata",
            "Nessuna tassa di implementazione",
            "Usa il tuo WhatsApp esistente",
            "Apprendimento continuo basato sul tuo business",
            "Adattamento graduale all'identità aziendale"
          ]
        },
        pleno: {
          name: "Assistente Intermedio",
          features: [
            "Tutto del piano Jr.",
            "Modello AI avanzato con conversazione audio",
            "Fino a 2.000 interazioni/mese",
            "Intelligenza di contesto migliorata",
            "Integrazione con Google Calendar",
            "Personalizzazione avanzata dell'identità aziendale"
          ]
        },
        senior: {
          name: "Assistente Senior",
          features: [
            "Tutto del piano Intermedio",
            "Riconoscimento e analisi di immagini",
            "Suggerimenti di prodotti basati su immagini",
            "Fino a 4.000 interazioni/mese",
            "Il miglior modello AI sul mercato",
            "Apprendimento profondo e continuo",
            "Adattamento completo all'identità del tuo business",
            "Integrazioni con sistemi esterni"
          ]
        },
        ceo: {
          name: "Assistente CEO",
          features: [
            "Tutto del piano Senior",
            "Interazioni Illimitate e SLA Prioritario",
            "Consulenza Strategica Mensile",
            "Supporto Multitenancy / Filiali",
            "Riconoscimento e Elaborazione Documenti",
            "AI Generativa Personalizzata con fine tuning e RAG",
            "Automazioni Intelligenti di Processi",
            "Account Manager Dedicato",
            "API Personalizzata e Webhooks"
          ]
        }
      },
      contractNow: "Contratta Ora",
      requestProposal: "Richiedi Proposta",
      importantInfo: {
        title: "Informazioni Importanti",
        points: [
          "Solo l'Assistente Senior include integrazioni con sistemi esterni (ERP, CRM, e-commerce, ecc.)",
          "Le personalizzazioni per integrazioni con sistemi esterni devono essere quotate e analizzate caso per caso",
          "Per maggiori informazioni, consulta i nostri Termini di Utilizzo e Politica sulla Privacy"
        ]
      },
      popular: "Più Popolare",
      enterprise: "Enterprise"
    },
    cta: {
      title: "Pronto a Trasformare il Tuo Supporto?",
      subtitle: "Unisciti a centinaia di aziende che hanno già rivoluzionato il loro servizio clienti con la nostra piattaforma",
      startNow: "Inizia Ora"
    },
    footer: {
      copyright: "Opus - Assistenti Intelligenti. Tutti i diritti riservati.",
      disclaimer: "Utilizzando i nostri servizi, accetti la nostra",
      privacyPolicy: "Politica sulla Privacy",
      termsOfUse: "Termini di Utilizzo"
    }
  },
  de: {
    hero: {
      title: "Intelligente Unterstützung für WhatsApp",
      subtitle: "Automatisieren Sie Ihre Gespräche, terminieren Sie Termine und steigern Sie Ihre Verkäufe mit unserer KI-Plattform",
      startNow: "Jetzt Starten",
      learnMore: "Mehr Erfahren"
    },
    navbar: {
      login: "Anmelden",
      startNow: "Jetzt Starten"
    },
    conversion: {
      title: "Vollständige Konversionsüberwachung",
      subtitle: "Verfolgen Sie jede Interaktion und optimieren Sie Ihre Ergebnisse mit präzisen und umsetzbaren Daten"
    },
    reports: {
      title: "Verpassen Sie nie wieder etwas",
      subtitle: "Erhalten Sie automatische tägliche Berichte über alle ausstehenden Angelegenheiten und verpassten Gelegenheiten, um sicherzustellen, dass kein Kunde vergessen wird",
      identification: {
        title: "Identifikation Ausstehender Angelegenheiten",
        description: "Unsere KI überwacht ständig alle Gespräche und identifiziert automatisch Kunden, die unbeantwortet blieben oder offene Fragen haben."
      },
      detailed: {
        title: "Detaillierte Berichte",
        description: "Erhalten Sie täglich eine vollständige Zusammenfassung aller ausstehenden Angelegenheiten, einschließlich personalisierter Nachrichtenvorschläge zur Reaktivierung jedes Kunden."
      },
      recovery: {
        title: "Chancenwiedergewinnung",
        description: "Verwandeln Sie ausstehende Angelegenheiten in Verkäufe mit intelligenten und automatisierten Follow-ups, wodurch Ihre Konversionsrate und Kundenzufriedenheit steigt."
      },
      learnMore: "Mehr über Berichte erfahren"
    },
    benefits: {
      title: "Warum Opus wählen?",
      fastImplementation: {
        title: "Schnelle Implementierung",
        description: "In Minuten einrichten und sofort Ergebnisse sehen"
      },
      totalSecurity: {
        title: "Vollständige Sicherheit",
        description: "Ihre Daten geschützt mit Ende-zu-Ende-Verschlüsselung"
      },
      specializedSupport: {
        title: "Spezialisierter Support",
        description: "Technisches Team verfügbar, um Ihre Ergebnisse zu maximieren"
      },
      provenROI: {
        title: "Bewiesener ROI",
        description: "Erhöhen Sie Ihre Konversionsrate, indem Sie keine Gelegenheit verpassen"
      }
    },
    pricing: {
      title: "Wählen Sie den Idealen Plan",
      subtitle: "Wir haben den perfekten Assistenten für jeden Geschäftstyp",
      plans: {
        jr: {
          name: "Jr. Assistent",
          features: [
            "Intelligente Textverarbeitung",
            "Bis zu 1.000 Interaktionen/Monat",
            "Personalisierte Schulung",
            "Keine Implementierungsgebühr",
            "Nutzen Sie Ihr bestehendes WhatsApp",
            "Kontinuierliches Lernen basierend auf Ihrem Geschäft",
            "Schrittweise Anpassung an die Unternehmensidentität"
          ]
        },
        pleno: {
          name: "Mittlerer Assistent",
          features: [
            "Alles vom Jr. Plan",
            "Erweiterte KI-Modell mit Audio-Konversation",
            "Bis zu 2.000 Interaktionen/Monat",
            "Verbesserte Kontext-Intelligenz",
            "Google Calendar Integration",
            "Erweiterte Anpassung der Geschäftsidentität"
          ]
        },
        senior: {
          name: "Senior Assistent",
          features: [
            "Alles vom Mittleren Plan",
            "Bilderkennung und -analyse",
            "Bildbasierte Produktvorschläge",
            "Bis zu 4.000 Interaktionen/Monat",
            "Das beste KI-Modell auf dem Markt",
            "Tiefes und kontinuierliches Lernen",
            "Vollständige Anpassung an Ihre Geschäftsidentität",
            "Externe Systemintegrationen"
          ]
        },
        ceo: {
          name: "CEO Assistent",
          features: [
            "Alles vom Senior Plan",
            "Unbegrenzte Interaktionen und Priority SLA",
            "Monatliche Strategische Beratung",
            "Multitenancy / Filial Support",
            "Dokumentenerkennung und -verarbeitung",
            "Personalisierte Generative KI mit Fine-Tuning und RAG",
            "Intelligente Prozessautomatisierungen",
            "Dedicierter Account Manager",
            "Benutzerdefinierte API und Webhooks"
          ]
        }
      },
      contractNow: "Jetzt Beauftragen",
      requestProposal: "Angebot Anfordern",
      importantInfo: {
        title: "Wichtige Informationen",
        points: [
          "Nur der Senior Assistent beinhaltet externe Systemintegrationen (ERP, CRM, E-Commerce, etc.)",
          "Anpassungen für externe Systemintegrationen müssen individuell kalkuliert und analysiert werden",
          "Für weitere Informationen konsultieren Sie unsere Nutzungsbedingungen und Datenschutzrichtlinie"
        ]
      },
      popular: "Beliebteste",
      enterprise: "Enterprise"
    },
    cta: {
      title: "Bereit, Ihren Support zu Transformieren?",
      subtitle: "Schließen Sie sich Hunderten von Unternehmen an, die bereits ihren Kundenservice mit unserer Plattform revolutioniert haben",
      startNow: "Jetzt Starten"
    },
    footer: {
      copyright: "Opus - Intelligente Assistenten. Alle Rechte vorbehalten.",
      disclaimer: "Durch die Nutzung unserer Dienste stimmen Sie unserer",
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfUse: "Nutzungsbedingungen"
    }
  },
  nl: {
    hero: {
      title: "Intelligente Ondersteuning voor WhatsApp",
      subtitle: "Automatiseer uw gesprekken, plan afspraken en boost uw verkoop met ons AI-platform",
      startNow: "Nu Beginnen",
      learnMore: "Meer Weten"
    },
    navbar: {
      login: "Inloggen",
      startNow: "Nu Beginnen"
    },
    conversion: {
      title: "Volledige Conversie Monitoring",
      subtitle: "Volg elke interactie en optimaliseer uw resultaten met precieze en bruikbare data"
    },
    reports: {
      title: "Mis nooit meer iets",
      subtitle: "Ontvang automatische dagelijkse rapporten over alle openstaande zaken en gemiste kansen, zodat geen enkele klant wordt vergeten",
      identification: {
        title: "Identificatie Openstaande Zaken",
        description: "Onze AI monitort voortdurend alle gesprekken en identificeert automatisch klanten die onbeantwoord bleven of openstaande vragen hebben."
      },
      detailed: {
        title: "Gedetailleerde Rapporten",
        description: "Ontvang dagelijks een volledige samenvatting van alle openstaande zaken, inclusief gepersonaliseerde berichtvoorstellen om elke klant te heractiveren."
      },
      recovery: {
        title: "Kansherstel",
        description: "Transformeer openstaande zaken in verkopen met intelligente en geautomatiseerde follow-ups, waardoor uw conversieratio en klanttevredenheid toeneemt."
      },
      learnMore: "Meer Weten Over Rapporten"
    },
    benefits: {
      title: "Waarom Opus kiezen?",
      fastImplementation: {
        title: "Snelle Implementatie",
        description: "Stel in binnen minuten en zie direct resultaten"
      },
      totalSecurity: {
        title: "Totale Veiligheid",
        description: "Uw data beschermd met end-to-end encryptie"
      },
      specializedSupport: {
        title: "Gespecialiseerde Ondersteuning",
        description: "Technisch team beschikbaar om uw resultaten te maximaliseren"
      },
      provenROI: {
        title: "Bewezen ROI",
        description: "Verhoog uw conversieratio door geen enkele kans te missen"
      }
    },
    pricing: {
      title: "Kies het Ideale Plan",
      subtitle: "We hebben de perfecte assistent voor elk type bedrijf",
      plans: {
        jr: {
          name: "Jr. Assistent",
          features: [
            "Intelligente tekstverwerking",
            "Tot 1.000 interacties/maand",
            "Gepersonaliseerde training",
            "Geen implementatiekosten",
            "Gebruik uw bestaande WhatsApp",
            "Continu leren gebaseerd op uw bedrijf",
            "Geleidelijke aanpassing aan bedrijfsidentiteit"
          ]
        },
        pleno: {
          name: "Midden Assistent",
          features: [
            "Alles van Jr. plan",
            "Geavanceerd AI-model met audioconversatie",
            "Tot 2.000 interacties/maand",
            "Verbeterde context intelligentie",
            "Google Calendar integratie",
            "Geavanceerde aanpassing van bedrijfsidentiteit"
          ]
        },
        senior: {
          name: "Senior Assistent",
          features: [
            "Alles van Midden plan",
            "Beeldherkenning en -analyse",
            "Op beeld gebaseerde productsuggesties",
            "Tot 4.000 interacties/maand",
            "Het beste AI-model op de markt",
            "Diep en continu leren",
            "Volledige aanpassing aan uw bedrijfsidentiteit",
            "Externe systeemintegraties"
          ]
        },
        ceo: {
          name: "CEO Assistent",
          features: [
            "Alles van Senior plan",
            "Onbeperkte Interacties en Priority SLA",
            "Maandelijkse Strategische Consultancy",
            "Multitenancy / Filiaal Ondersteuning",
            "Document Herkenning en Verwerking",
            "Gepersonaliseerde Generatieve AI met fine tuning en RAG",
            "Intelligente Proces Automatiseringen",
            "Toegewijde Account Manager",
            "Aangepaste API en Webhooks"
          ]
        }
      },
      contractNow: "Nu Contracteren",
      requestProposal: "Voorstel Aanvragen",
      importantInfo: {
        title: "Belangrijke Informatie",
        points: [
          "Alleen de Senior Assistent bevat externe systeemintegraties (ERP, CRM, e-commerce, etc.)",
          "Aanpassingen voor externe systeemintegraties moeten per geval worden gecalculeerd en geanalyseerd",
          "Voor meer informatie, raadpleeg onze Gebruiksvoorwaarden en Privacybeleid"
        ]
      },
      popular: "Meest Populair",
      enterprise: "Enterprise"
    },
    cta: {
      title: "Klaar om Uw Ondersteuning te Transformeren?",
      subtitle: "Sluit u aan bij honderden bedrijven die hun klantenservice al hebben gerevolutioneerd met ons platform",
      startNow: "Nu Beginnen"
    },
    footer: {
      copyright: "Opus - Intelligente Assistenten. Alle rechten voorbehouden.",
      disclaimer: "Door onze diensten te gebruiken, gaat u akkoord met ons",
      privacyPolicy: "Privacybeleid",
      termsOfUse: "Gebruiksvoorwaarden"
    }
  }
};

export const useTranslations = (language: Language): Translations => {
  return translations[language];
};

export default translations;
