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
  parallaxHero: {
    title: string;
    subtitle: string;
    startNow: string;
    tryAssistant: {
      title: string;
      description: string;
      button: string;
      disclaimer: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    clickForDetails: string;
    talkToElli: string;
    features: {
      autoResponse: {
        title: string;
        description: string;
      };
      scheduling: {
        title: string;
        description: string;
      };
      leadGeneration: {
        title: string;
        description: string;
      };
      integration: {
        title: string;
        description: string;
      };
      notifications: {
        title: string;
        description: string;
      };
      promotions: {
        title: string;
        description: string;
      };
      satisfaction: {
        title: string;
        description: string;
      };
      sales: {
        title: string;
        description: string;
      };
      payments: {
        title: string;
        description: string;
      };
      multipleAgents: {
        title: string;
        description: string;
      };
      segmentation: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
      humanTransfer: {
        title: string;
        description: string;
      };
      documents: {
        title: string;
        description: string;
      };
      personalizedMessages: {
        title: string;
        description: string;
      };
      multilingual: {
        title: string;
        description: string;
      };
      validation: {
        title: string;
        description: string;
      };
      fileSharing: {
        title: string;
        description: string;
      };
      contextResponses: {
        title: string;
        description: string;
      };
      orderStatus: {
        title: string;
        description: string;
      };
    };
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
    },
    parallaxHero: {
      title: "Transforme seu Atendimento com Assistentes Virtuais Inteligentes",
      subtitle: "Automatize seu suporte ao cliente com assistentes virtuais que entendem, aprendem e resolvem problemas 24/7.",
      startNow: "Começar Agora",
      tryAssistant: {
        title: "Experimente o Opus AI agora mesmo!",
        description: "Converse com nosso assistente virtual e descubra como a mesma tecnologia pode revolucionar o atendimento do seu negócio.",
        button: "Testar o Assistente Opus",
        disclaimer: "A mesma experiência que seus clientes terão com seu próprio assistente personalizado"
      }
    },
    features: {
      title: "Muitas possibilidades com a Opus",
      subtitle: "Descubra como nossa plataforma pode transformar seu atendimento no WhatsApp",
      clickForDetails: "Clique para detalhes",
      talkToElli: "Fale com a Elli",
      features: {
        autoResponse: {
          title: "Resposta automática a dúvidas frequentes",
          description: "Atenda seus clientes 24 horas por dia, 7 dias por semana, solucionando as principais dúvidas instantaneamente, sem sobrecarregar sua equipe. Proporcione agilidade e aumente a satisfação, seja você um pequeno comércio ou uma grande operação com alto volume de contatos."
        },
        scheduling: {
          title: "Gestão completa de agendamentos",
          description: "Deixe o agente cuidar de todo o fluxo de agendamentos: marca, confirma, cancela e remarca compromissos sem esforço manual. Transforme o WhatsApp em sua agenda inteligente, facilitando o dia a dia do pequeno empreendedor e otimizando o tempo de grandes empresas com múltiplos clientes."
        },
        leadGeneration: {
          title: "Geração de leads qualificados",
          description: "Capte automaticamente novos clientes interessados em seus produtos ou serviços. A IA identifica oportunidades de negócio, faz perguntas estratégicas e encaminha leads já filtrados para você, potencializando vendas para negócios de qualquer porte."
        },
        integration: {
          title: "Integração com sistemas externos",
          description: "Conecte seu WhatsApp ao seu sistema de gestão, CRM, loja virtual ou plataforma de pagamentos, automatizando tarefas e centralizando informações. Pequenos negócios ganham profissionalismo; grandes empresas aceleram processos e reduzem falhas."
        },
        notifications: {
          title: "Notificações e lembretes automáticos",
          description: "Aumente a presença e a recorrência dos seus clientes com lembretes automáticos de agendamentos, pagamentos, entregas e promoções. Evite esquecimentos, reduza faltas e mantenha seu cliente sempre próximo, independentemente do tamanho da sua empresa."
        },
        promotions: {
          title: "Envio de promoções e novidades",
          description: "Divulgue ofertas, lançamentos e eventos automaticamente para seus contatos. Garanta que seus clientes recebam novidades de forma personalizada, aumentando as chances de conversão e promovendo campanhas segmentadas para todos os públicos."
        },
        satisfaction: {
          title: "Pesquisa de satisfação",
          description: "Colete feedbacks valiosos direto no WhatsApp ao final de cada atendimento, serviço ou compra. Melhore a experiência do cliente de forma contínua e utilize os dados para ajustar processos, seja na pequena empresa familiar ou em operações de grande escala."
        },
        sales: {
          title: "Realização de vendas automatizadas",
          description: "Transforme conversas em vendas, guiando o cliente até a finalização do pedido de forma 100% automática. Pequenos negócios conquistam mais vendas sem esforço, enquanto grandes players otimizam o funil e aumentam o ticket médio."
        },
        payments: {
          title: "Recebimento de pagamentos via link",
          description: "Envie links de pagamento seguros e receba diretamente pelo WhatsApp, facilitando o fechamento de vendas e reduzindo inadimplência. Uma solução ágil tanto para quem vende de forma autônoma quanto para grandes redes."
        },
        multipleAgents: {
          title: "Suporte a múltiplos atendentes",
          description: "Gerencie atendimentos simultâneos, direcionando conversas automaticamente para diferentes setores ou membros da equipe. Pequenos negócios podem crescer sem perder o controle; grandes empresas ganham escala e organização."
        },
        segmentation: {
          title: "Segmentação automática de clientes",
          description: "Identifique automaticamente o perfil de cada cliente e segmente o atendimento conforme interesses, histórico e comportamento. Proporcione experiências personalizadas para todos e direcione campanhas com maior precisão, nivelando o jogo entre pequenos e grandes."
        },
        analytics: {
          title: "Análise de comportamento e relatórios",
          description: "Acompanhe métricas essenciais, descubra padrões de comportamento e tome decisões baseadas em dados. Receba relatórios automatizados com insights que ajudam tanto a pequena loja a crescer quanto grandes empresas a maximizar seus resultados."
        },
        humanTransfer: {
          title: "Encaminhamento para atendimento humano",
          description: "Quando necessário, o agente transfere a conversa para um atendente humano, mantendo todo o histórico do cliente. Assim, você garante um atendimento humanizado e ágil, sem perder o contexto."
        },
        documents: {
          title: "Coleta e envio de documentos",
          description: "Solicite e receba arquivos, documentos ou fotos diretamente pelo WhatsApp, facilitando processos como cadastro, orçamento, suporte técnico e comprovação de entregas. Agilidade e segurança para qualquer negócio."
        },
        personalizedMessages: {
          title: "Mensagens personalizadas por perfil",
          description: "Programe mensagens automáticas adaptadas ao horário, à campanha ativa ou ao perfil de cada cliente. Amplie o engajamento e mostre que cada contato é especial, independentemente do volume de atendimentos."
        },
        multilingual: {
          title: "Atendimento multilíngue",
          description: "Atenda clientes em diferentes idiomas automaticamente, ampliando suas oportunidades de negócio para além das fronteiras e profissionalizando sua comunicação, seja qual for o porte da empresa."
        },
        validation: {
          title: "Validação de informações cadastrais",
          description: "Garanta dados atualizados dos clientes, validando informações como nome, CPF, endereço ou e-mail via WhatsApp, automatizando processos e aumentando a confiabilidade do seu cadastro."
        },
        fileSharing: {
          title: "Envio de arquivos e PDFs",
          description: "Compartilhe rapidamente contratos, orçamentos, tutoriais ou qualquer arquivo necessário com seus clientes, tornando o atendimento mais completo e reduzindo etapas manuais."
        },
        contextResponses: {
          title: "Respostas baseadas em contexto",
          description: "A IA entende o histórico de cada cliente, oferecendo respostas personalizadas e relevantes, o que aumenta a eficiência e a satisfação de quem busca atendimento contínuo e inteligente."
        },
        orderStatus: {
          title: "Consulta de status de pedidos",
          description: "Permita que seus clientes consultem o andamento de pedidos, entregas ou solicitações diretamente pelo WhatsApp, trazendo mais transparência, autonomia e profissionalismo para seu negócio."
        }
      }
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
    },
    parallaxHero: {
      title: "Transform Your Customer Service with Intelligent Virtual Assistants",
      subtitle: "Automate your customer support with virtual assistants that understand, learn and solve problems 24/7.",
      startNow: "Start Now",
      tryAssistant: {
        title: "Try Opus AI right now!",
        description: "Chat with our virtual assistant and discover how the same technology can revolutionize your business customer service.",
        button: "Test the Opus Assistant",
        disclaimer: "The same experience your customers will have with your own personalized assistant"
      }
    },
    features: {
      title: "Many possibilities with Opus",
      subtitle: "Discover how our platform can transform your WhatsApp customer service",
      clickForDetails: "Click for details",
      talkToElli: "Talk to Elli",
      features: {
        autoResponse: {
          title: "Automatic response to frequent questions",
          description: "Serve your customers 24 hours a day, 7 days a week, solving main questions instantly, without overloading your team. Provide agility and increase satisfaction, whether you're a small business or a large operation with high contact volume."
        },
        scheduling: {
          title: "Complete appointment management",
          description: "Let the agent handle the entire appointment flow: schedule, confirm, cancel and reschedule appointments without manual effort. Transform WhatsApp into your smart agenda, facilitating the day-to-day of small entrepreneurs and optimizing time for large companies with multiple clients."
        },
        leadGeneration: {
          title: "Qualified lead generation",
          description: "Automatically capture new customers interested in your products or services. AI identifies business opportunities, asks strategic questions and forwards pre-filtered leads to you, boosting sales for businesses of any size."
        },
        integration: {
          title: "Integration with external systems",
          description: "Connect your WhatsApp to your management system, CRM, online store or payment platform, automating tasks and centralizing information. Small businesses gain professionalism; large companies accelerate processes and reduce failures."
        },
        notifications: {
          title: "Automatic notifications and reminders",
          description: "Increase the presence and recurrence of your customers with automatic reminders of appointments, payments, deliveries and promotions. Avoid forgetfulness, reduce absences and keep your customer always close, regardless of your company size."
        },
        promotions: {
          title: "Promotion and news sending",
          description: "Automatically promote offers, launches and events to your contacts. Ensure your customers receive news in a personalized way, increasing conversion chances and promoting targeted campaigns for all audiences."
        },
        satisfaction: {
          title: "Satisfaction survey",
          description: "Collect valuable feedback directly on WhatsApp at the end of each service, service or purchase. Continuously improve customer experience and use data to adjust processes, whether in small family business or large-scale operations."
        },
        sales: {
          title: "Automated sales realization",
          description: "Transform conversations into sales, guiding the customer to order completion 100% automatically. Small businesses achieve more sales without effort, while large players optimize the funnel and increase average ticket."
        },
        payments: {
          title: "Payment receipt via link",
          description: "Send secure payment links and receive directly through WhatsApp, facilitating sales closure and reducing default. An agile solution for both autonomous sellers and large networks."
        },
        multipleAgents: {
          title: "Multiple agent support",
          description: "Manage simultaneous services, automatically directing conversations to different sectors or team members. Small businesses can grow without losing control; large companies gain scale and organization."
        },
        segmentation: {
          title: "Automatic customer segmentation",
          description: "Automatically identify each customer's profile and segment service according to interests, history and behavior. Provide personalized experiences for everyone and direct campaigns with greater precision, leveling the playing field between small and large."
        },
        analytics: {
          title: "Behavior analysis and reports",
          description: "Track essential metrics, discover behavior patterns and make data-based decisions. Receive automated reports with insights that help both small stores grow and large companies maximize their results."
        },
        humanTransfer: {
          title: "Transfer to human service",
          description: "When necessary, the agent transfers the conversation to a human attendant, maintaining the entire customer history. This way, you ensure humanized and agile service, without losing context."
        },
        documents: {
          title: "Document collection and sending",
          description: "Request and receive files, documents or photos directly through WhatsApp, facilitating processes such as registration, budgeting, technical support and delivery proof. Agility and security for any business."
        },
        personalizedMessages: {
          title: "Personalized messages by profile",
          description: "Schedule automatic messages adapted to time, active campaign or each customer's profile. Increase engagement and show that each contact is special, regardless of service volume."
        },
        multilingual: {
          title: "Multilingual service",
          description: "Automatically serve customers in different languages, expanding your business opportunities beyond borders and professionalizing your communication, regardless of company size."
        },
        validation: {
          title: "Registration information validation",
          description: "Ensure updated customer data, validating information such as name, CPF, address or email via WhatsApp, automating processes and increasing your registration reliability."
        },
        fileSharing: {
          title: "File and PDF sending",
          description: "Quickly share contracts, budgets, tutorials or any necessary file with your customers, making service more complete and reducing manual steps."
        },
        contextResponses: {
          title: "Context-based responses",
          description: "AI understands each customer's history, offering personalized and relevant responses, which increases efficiency and satisfaction of those seeking continuous and intelligent service."
        },
        orderStatus: {
          title: "Order status inquiry",
          description: "Allow your customers to check the progress of orders, deliveries or requests directly through WhatsApp, bringing more transparency, autonomy and professionalism to your business."
        }
      }
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
    },
    parallaxHero: {
      title: "Trasforma il Tuo Servizio Clienti con Assistenti Virtuali Intelligenti",
      subtitle: "Automatizza il tuo supporto clienti con assistenti virtuali che comprendono, imparano e risolvono problemi 24/7.",
      startNow: "Inizia Ora",
      tryAssistant: {
        title: "Prova Opus AI subito!",
        description: "Chatta con il nostro assistente virtuale e scopri come la stessa tecnologia può rivoluzionare il servizio clienti della tua azienda.",
        button: "Testa l'Assistente Opus",
        disclaimer: "La stessa esperienza che i tuoi clienti avranno con il tuo assistente personalizzato"
      }
    },
    features: {
      title: "Molte possibilità con Opus",
      subtitle: "Scopri come la nostra piattaforma può trasformare il tuo servizio clienti WhatsApp",
      clickForDetails: "Clicca per dettagli",
      talkToElli: "Parla con Elli",
      features: {
        autoResponse: {
          title: "Risposta automatica alle domande frequenti",
          description: "Servi i tuoi clienti 24 ore al giorno, 7 giorni alla settimana, risolvendo le principali domande istantaneamente, senza sovraccaricare il tuo team. Fornisci agilità e aumenta la soddisfazione, che tu sia un piccolo commercio o una grande operazione con alto volume di contatti."
        },
        scheduling: {
          title: "Gestione completa degli appuntamenti",
          description: "Lascia che l'agente gestisca l'intero flusso di appuntamenti: programma, conferma, cancella e riprogramma appuntamenti senza sforzo manuale. Trasforma WhatsApp nella tua agenda intelligente, facilitando la vita quotidiana dei piccoli imprenditori e ottimizzando il tempo per grandi aziende con più clienti."
        },
        leadGeneration: {
          title: "Generazione di lead qualificati",
          description: "Cattura automaticamente nuovi clienti interessati ai tuoi prodotti o servizi. L'IA identifica opportunità di business, fa domande strategiche e inoltra lead già filtrati a te, potenziando le vendite per aziende di qualsiasi dimensione."
        },
        integration: {
          title: "Integrazione con sistemi esterni",
          description: "Collega il tuo WhatsApp al tuo sistema di gestione, CRM, negozio online o piattaforma di pagamento, automatizzando compiti e centralizzando informazioni. Piccole aziende acquisiscono professionalità; grandi aziende accelerano processi e riducono errori."
        },
        notifications: {
          title: "Notifiche e promemoria automatici",
          description: "Aumenta la presenza e la ricorrenza dei tuoi clienti con promemoria automatici di appuntamenti, pagamenti, consegne e promozioni. Evita dimenticanze, riduci assenze e mantieni il tuo cliente sempre vicino, indipendentemente dalle dimensioni della tua azienda."
        },
        promotions: {
          title: "Invio di promozioni e novità",
          description: "Promuovi automaticamente offerte, lanci ed eventi ai tuoi contatti. Assicurati che i tuoi clienti ricevano novità in modo personalizzato, aumentando le possibilità di conversione e promuovendo campagne mirate per tutti i pubblici."
        },
        satisfaction: {
          title: "Sondaggio di soddisfazione",
          description: "Raccogli feedback preziosi direttamente su WhatsApp alla fine di ogni servizio, servizio o acquisto. Migliora continuamente l'esperienza del cliente e utilizza i dati per regolare i processi, che si tratti di piccole aziende familiari o operazioni su larga scala."
        },
        sales: {
          title: "Realizzazione di vendite automatizzate",
          description: "Trasforma le conversazioni in vendite, guidando il cliente al completamento dell'ordine in modo 100% automatico. Piccole aziende ottengono più vendite senza sforzo, mentre i grandi player ottimizzano il funnel e aumentano il ticket medio."
        },
        payments: {
          title: "Ricezione pagamenti tramite link",
          description: "Invia link di pagamento sicuri e ricevi direttamente tramite WhatsApp, facilitando la chiusura delle vendite e riducendo l'inadempienza. Una soluzione agile sia per venditori autonomi che per grandi reti."
        },
        multipleAgents: {
          title: "Supporto per più agenti",
          description: "Gestisci servizi simultanei, indirizzando automaticamente le conversazioni a diversi settori o membri del team. Piccole aziende possono crescere senza perdere controllo; grandi aziende guadagnano scala e organizzazione."
        },
        segmentation: {
          title: "Segmentazione automatica dei clienti",
          description: "Identifica automaticamente il profilo di ogni cliente e segmenta il servizio secondo interessi, cronologia e comportamento. Fornisci esperienze personalizzate per tutti e indirizza campagne con maggiore precisione, nivellando il campo di gioco tra piccoli e grandi."
        },
        analytics: {
          title: "Analisi del comportamento e rapporti",
          description: "Monitora metriche essenziali, scopri modelli comportamentali e prendi decisioni basate sui dati. Ricevi rapporti automatizzati con insights che aiutano sia piccoli negozi a crescere che grandi aziende a massimizzare i loro risultati."
        },
        humanTransfer: {
          title: "Trasferimento al servizio umano",
          description: "Quando necessario, l'agente trasferisce la conversazione a un operatore umano, mantenendo tutta la cronologia del cliente. Così garantisci un servizio umanizzato e agile, senza perdere il contesto."
        },
        documents: {
          title: "Raccolta e invio di documenti",
          description: "Richiedi e ricevi file, documenti o foto direttamente tramite WhatsApp, facilitando processi come registrazione, preventivo, supporto tecnico e prova di consegna. Agilità e sicurezza per qualsiasi business."
        },
        personalizedMessages: {
          title: "Messaggi personalizzati per profilo",
          description: "Programma messaggi automatici adattati all'orario, alla campagna attiva o al profilo di ogni cliente. Aumenta l'engagement e mostra che ogni contatto è speciale, indipendentemente dal volume di servizi."
        },
        multilingual: {
          title: "Servizio multilingue",
          description: "Servi automaticamente clienti in diverse lingue, espandendo le tue opportunità di business oltre i confini e professionalizzando la tua comunicazione, indipendentemente dalle dimensioni dell'azienda."
        },
        validation: {
          title: "Validazione informazioni di registrazione",
          description: "Garantisci dati clienti aggiornati, validando informazioni come nome, codice fiscale, indirizzo o email tramite WhatsApp, automatizzando processi e aumentando l'affidabilità della tua registrazione."
        },
        fileSharing: {
          title: "Invio di file e PDF",
          description: "Condividi rapidamente contratti, preventivi, tutorial o qualsiasi file necessario con i tuoi clienti, rendendo il servizio più completo e riducendo i passaggi manuali."
        },
        contextResponses: {
          title: "Risposte basate sul contesto",
          description: "L'IA comprende la cronologia di ogni cliente, offrendo risposte personalizzate e rilevanti, il che aumenta l'efficienza e la soddisfazione di chi cerca servizio continuo e intelligente."
        },
        orderStatus: {
          title: "Consultazione stato ordini",
          description: "Permetti ai tuoi clienti di controllare il progresso di ordini, consegne o richieste direttamente tramite WhatsApp, portando più trasparenza, autonomia e professionalità al tuo business."
        }
      }
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
    },
    parallaxHero: {
      title: "Transformieren Sie Ihren Kundendienst mit Intelligenten Virtuellen Assistenten",
      subtitle: "Automatisieren Sie Ihren Kundensupport mit virtuellen Assistenten, die verstehen, lernen und Probleme 24/7 lösen.",
      startNow: "Jetzt Starten",
      tryAssistant: {
        title: "Probieren Sie Opus AI jetzt aus!",
        description: "Chatten Sie mit unserem virtuellen Assistenten und entdecken Sie, wie dieselbe Technologie den Kundendienst Ihres Unternehmens revolutionieren kann.",
        button: "Opus Assistenten Testen",
        disclaimer: "Die gleiche Erfahrung, die Ihre Kunden mit Ihrem eigenen personalisierten Assistenten haben werden"
      }
    },
    features: {
      title: "Viele Möglichkeiten mit Opus",
      subtitle: "Entdecken Sie, wie unsere Plattform Ihren WhatsApp-Kundendienst transformieren kann",
      clickForDetails: "Klicken für Details",
      talkToElli: "Sprechen Sie mit Elli",
      features: {
        autoResponse: {
          title: "Automatische Antwort auf häufige Fragen",
          description: "Bedienen Sie Ihre Kunden 24 Stunden am Tag, 7 Tage die Woche, lösen Sie Hauptfragen sofort, ohne Ihr Team zu überlasten. Bieten Sie Agilität und erhöhen Sie die Zufriedenheit, egal ob Sie ein kleines Geschäft oder ein großer Betrieb mit hohem Kontaktvolumen sind."
        },
        scheduling: {
          title: "Vollständige Terminverwaltung",
          description: "Lassen Sie den Agenten den gesamten Terminfluss handhaben: planen, bestätigen, stornieren und Termine ohne manuellen Aufwand umplanen. Verwandeln Sie WhatsApp in Ihre intelligente Agenda, erleichtern Sie den Alltag kleiner Unternehmer und optimieren Sie die Zeit für große Unternehmen mit mehreren Kunden."
        },
        leadGeneration: {
          title: "Qualifizierte Lead-Generierung",
          description: "Erfassen Sie automatisch neue Kunden, die an Ihren Produkten oder Dienstleistungen interessiert sind. KI identifiziert Geschäftsmöglichkeiten, stellt strategische Fragen und leitet bereits gefilterte Leads an Sie weiter, was Verkäufe für Unternehmen jeder Größe steigert."
        },
        integration: {
          title: "Integration mit externen Systemen",
          description: "Verbinden Sie Ihr WhatsApp mit Ihrem Verwaltungssystem, CRM, Online-Shop oder Zahlungsplattform, automatisieren Sie Aufgaben und zentralisieren Sie Informationen. Kleine Unternehmen gewinnen Professionalität; große Unternehmen beschleunigen Prozesse und reduzieren Fehler."
        },
        notifications: {
          title: "Automatische Benachrichtigungen und Erinnerungen",
          description: "Erhöhen Sie die Präsenz und Wiederkehr Ihrer Kunden mit automatischen Erinnerungen an Termine, Zahlungen, Lieferungen und Aktionen. Vermeiden Sie Vergesslichkeit, reduzieren Sie Abwesenheiten und halten Sie Ihren Kunden immer nah, unabhängig von Ihrer Unternehmensgröße."
        },
        promotions: {
          title: "Versendung von Aktionen und Neuigkeiten",
          description: "Bewerben Sie automatisch Angebote, Launches und Events an Ihre Kontakte. Stellen Sie sicher, dass Ihre Kunden Neuigkeiten personalisiert erhalten, erhöhen Sie Konversionschancen und fördern Sie zielgerichtete Kampagnen für alle Zielgruppen."
        },
        satisfaction: {
          title: "Zufriedenheitsumfrage",
          description: "Sammeln Sie wertvolles Feedback direkt auf WhatsApp am Ende jedes Service, Dienstes oder Kaufs. Verbessern Sie kontinuierlich die Kundenerfahrung und nutzen Sie Daten zur Anpassung von Prozessen, sei es in kleinen Familienunternehmen oder großen Betrieben."
        },
        sales: {
          title: "Automatisierte Verkaufsabwicklung",
          description: "Verwandeln Sie Gespräche in Verkäufe, führen Sie den Kunden 100% automatisch zur Bestellabschluss. Kleine Unternehmen erzielen mehr Verkäufe ohne Aufwand, während große Player den Funnel optimieren und das durchschnittliche Ticket erhöhen."
        },
        payments: {
          title: "Zahlungseingang via Link",
          description: "Senden Sie sichere Zahlungslinks und erhalten Sie direkt über WhatsApp, erleichtern Sie Verkaufsabschlüsse und reduzieren Sie Zahlungsausfälle. Eine agile Lösung sowohl für autonome Verkäufer als auch für große Netzwerke."
        },
        multipleAgents: {
          title: "Unterstützung mehrerer Agenten",
          description: "Verwalten Sie gleichzeitige Services, leiten Sie Gesprekken automatisch naar verschillende afdelingen of teamleden. Kleine bedrijven kunnen groeien zonder controle te verliezen; grote bedrijven krijgen schaal en organisatie."
        },
        segmentation: {
          title: "Automatische klantsegmentatie",
          description: "Identificeer automatisch het profiel van elke klant en segmenteer de service volgens interesses, geschiedenis en gedrag. Bied gepersonaliseerde ervaringen voor iedereen en richt campagnes met meer precisie, nivelleer het speelveld tussen klein en groot."
        },
        analytics: {
          title: "Gedragsanalyse en rapporten",
          description: "Volg essentiële metrics, ontdek gedragspatronen en neem datagestuurde beslissingen. Ontvang geautomatiseerde rapporten met inzichten die zowel kleine winkels helpen groeien als grote bedrijven hun resultaten maximaliseren."
        },
        humanTransfer: {
          title: "Weiterleitung an menschliche service",
          description: "Wanneer nodig draagt de agent het gesprek over aan een menselijke medewerker, waarbij de volledige klantgeschiedenis behouden blijft. Zo garandeert u een gehumaniseerde en behendig service, zonder context te verliezen."
        },
        documents: {
          title: "Documentenverzameling en -verzending",
          description: "Vraag en ontvang bestanden, documenten of foto's direct via WhatsApp, vergemakkelijk processen zoals registratie, begroting, technische ondersteuning en leveringsbewijs. Behendigheid en veiligheid voor elk bedrijf."
        },
        personalizedMessages: {
          title: "Gepersonaliseerde berichten per profiel",
          description: "Programmeer automatische berichten aangepast aan tijd, actieve campagne of het profiel van elke klant. Verhoog betrokkenheid en toon dat elk contact speciaal is, ongeacht het servicevolume."
        },
        multilingual: {
          title: "Meertalige service",
          description: "Bedien automatisch klanten in verschillende talen, breid uw zakelijke kansen uit over grenzen heen en professionaliseer uw communicatie, ongeacht bedrijfsgrootte."
        },
        validation: {
          title: "Validatie van registratie-informatie",
          description: "Waarborg bijgewerkte klantgegevens, valideer informatie zoals naam, belastingnummer, adres of e-mail via WhatsApp, automatiseer processen en verhoog de betrouwbaarheid van uw registratie."
        },
        fileSharing: {
          title: "Bestands- en PDF-verzending",
          description: "Deel snel contracten, begrotingen, tutorials of elk noodzakelijk bestand met uw klanten, maak de service completer en verminder handmatige stappen."
        },
        contextResponses: {
          title: "Context-gebaseerde reacties",
          description: "AI begrijpt de geschiedenis van elke klant, biedt gepersonaliseerde en relevante reacties, wat de efficiëntie en tevredenheid verhoogt van degenen die continue en intelligente service zoeken."
        },
        orderStatus: {
          title: "Bestelling status opvragen",
          description: "Sta uw klanten toe om de voortgang van bestellingen, leveringen of verzoeken direct via WhatsApp te controleren, breng meer transparantie, autonomie en professionaliteit naar uw bedrijf."
        }
      }
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
    },
    parallaxHero: {
      title: "Transformeer Uw Klantenservice met Intelligente Virtuele Assistenten",
      subtitle: "Automatiseer uw klantenondersteuning met virtuele assistenten die begrijpen, leren en problemen 24/7 oplossen.",
      startNow: "Nu Beginnen",
      tryAssistant: {
        title: "Probeer Opus AI nu meteen!",
        description: "Chat met onze virtuele assistent en ontdek hoe dezelfde technologie de klantenservice van uw bedrijf kan revolutioneren.",
        button: "Test de Opus Assistent",
        disclaimer: "Dezelfde ervaring die uw klanten zullen hebben met uw eigen gepersonaliseerde assistent"
      }
    },
    features: {
      title: "Veel mogelijkheden met Opus",
      subtitle: "Ontdek hoe ons platform uw WhatsApp klantenservice kan transformeren",
      clickForDetails: "Klik voor details",
      talkToElli: "Praat met Elli",
      features: {
        autoResponse: {
          title: "Automatische reactie op veelgestelde vragen",
          description: "Bedien uw klanten 24 uur per dag, 7 dagen per week, los hoofdvragen onmiddellijk op, zonder uw team te overbelasten. Bied behendigheid en verhoog tevredenheid, of u nu een kleine handel bent of een grote operatie met hoog contactvolume."
        },
        scheduling: {
          title: "Volledige afspraakmangement",
          description: "Laat de agent de hele afspraakstroom afhandelen: plannen, bevestigen, annuleren en afspraken herplannen zonder handmatige moeite. Transformeer WhatsApp in uw intelligente agenda, vergemakkelijk het dagelijks leven van kleine ondernemers en optimaliseer tijd voor grote bedrijven met meerdere klanten."
        },
        leadGeneration: {
          title: "Gekwalificeerde leadgeneratie",
          description: "Vang automatisch nieuwe klanten op die geïnteresseerd zijn in uw producten of diensten. AI identificeert zakelijke kansen, stelt strategische vragen en stuurt al gefilterde leads naar u door, wat verkoop stimuleert voor bedrijven van elke omvang."
        },
        integration: {
          title: "Integratie met externe systemen",
          description: "Verbind uw WhatsApp met uw beheersysteem, CRM, online winkel of betalingsplatform, automatiseer taken en centraliseer informatie. Kleine bedrijven krijgen professionaliteit; grote bedrijven versnellen processen en verminderen fouten."
        },
        notifications: {
          title: "Automatische meldingen en herinneringen",
          description: "Verhoog de aanwezigheid en herhaling van uw klanten met automatische herinneringen aan afspraken, betalingen, leveringen en promoties. Vermijd vergeetachtigheid, verminder afwezigheden en houd uw klant altijd dichtbij, ongeacht uw bedrijfsgrootte."
        },
        promotions: {
          title: "Verzenden van promoties en nieuws",
          description: "Promoot automatisch aanbiedingen, lanceringen en evenementen naar uw contacten. Zorg ervoor dat uw klanten nieuws op een gepersonaliseerde manier ontvangen, verhoog conversiekansen en promoot gerichte campagnes voor alle doelgroepen."
        },
        satisfaction: {
          title: "Tevredenheidsonderzoek",
          description: "Verzamel waardevolle feedback direct op WhatsApp aan het einde van elke dienst, service of aankoop. Verbeter voortdurend de klantervaring en gebruik gegevens om processen aan te passen, of het nu gaat om kleine familiebedrijven of grootschalige operaties."
        },
        sales: {
          title: "Geautomatiseerde verkoopuitvoering",
          description: "Transformeer gesprekken in verkopen, leid de klant 100% automatisch naar orderafronding. Kleine bedrijven behalen meer verkopen zonder moeite, terwijl grote spelers de funnel optimaliseren en het gemiddelde ticket verhogen."
        },
        payments: {
          title: "Betalingsontvangst via link",
          description: "Verzend veilige betalingslinks en ontvang direct via WhatsApp, vergemakkelijk verkoopafsluitingen en verminder wanbetaling. Een behendig oplossing voor zowel autonome verkopers als grote netwerken."
        },
        multipleAgents: {
          title: "Ondersteuning voor meerdere agenten",
          description: "Beheer gelijktijdige diensten, leid gesprekken automatisch naar verschillende afdelingen of teamleden. Kleine bedrijven kunnen groeien zonder controle te verliezen; grote bedrijven krijgen schaal en organisatie."
        },
        segmentation: {
          title: "Automatische klantsegmentatie",
          description: "Identificeer automatisch het profiel van elke klant en segmenteer de service volgens interesses, geschiedenis en gedrag. Bied gepersonaliseerde ervaringen voor iedereen en richt campagnes met meer precisie, nivelleer het speelveld tussen klein en groot."
        },
        analytics: {
          title: "Gedragsanalyse en rapporten",
          description: "Volg essentiële metrics, ontdek gedragspatronen en neem datagestuurde beslissingen. Ontvang geautomatiseerde rapporten met inzichten die zowel kleine winkels helpen groeien als grote bedrijven hun resultaten maximaliseren."
        },
        humanTransfer: {
          title: "Doorverwijzing naar menselijke service",
          description: "Wanneer nodig draagt de agent het gesprek over aan een menselijke medewerker, waarbij de volledige klantgeschiedenis behouden blijft. Zo garandeert u een gehumaniseerde en behendig service, zonder context te verliezen."
        },
        documents: {
          title: "Documentenverzameling en -verzending",
          description: "Vraag en ontvang bestanden, documenten of foto's direct via WhatsApp, vergemakkelijk processen zoals registratie, begroting, technische ondersteuning en leveringsbewijs. Behendigheid en veiligheid voor elk bedrijf."
        },
        personalizedMessages: {
          title: "Gepersonaliseerde berichten per profiel",
          description: "Programmeer automatische berichten aangepast aan tijd, actieve campagne of het profiel van elke klant. Verhoog betrokkenheid en toon dat elk contact speciaal is, ongeacht het servicevolume."
        },
        multilingual: {
          title: "Meertalige service",
          description: "Bedien automatisch klanten in verschillende talen, breid uw zakelijke kansen uit over grenzen heen en professionaliseer uw communicatie, ongeacht bedrijfsgrootte."
        },
        validation: {
          title: "Validatie van registratie-informatie",
          description: "Waarborg bijgewerkte klantgegevens, valideer informatie zoals naam, belastingnummer, adres of e-mail via WhatsApp, automatiseer processen en verhoog de betrouwbaarheid van uw registratie."
        },
        fileSharing: {
          title: "Bestands- en PDF-verzending",
          description: "Deel snel contracten, begrotingen, tutorials of elk noodzakelijk bestand met uw klanten, maak de service completer en verminder handmatige stappen."
        },
        contextResponses: {
          title: "Context-gebaseerde reacties",
          description: "AI begrijpt de geschiedenis van elke klant, biedt gepersonaliseerde en relevante reacties, wat de efficiëntie en tevredenheid verhoogt van degenen die continue en intelligente service zoeken."
        },
        orderStatus: {
          title: "Bestelling status opvragen",
          description: "Sta uw klanten toe om de voortgang van bestellingen, leveringen of verzoeken direct via WhatsApp te controleren, breng meer transparantie, autonomie en professionaliteit naar uw bedrijf."
        }
      }
    }
  }
};

export const useTranslations = (language: Language): Translations => {
  return translations[language];
};

export default translations;
