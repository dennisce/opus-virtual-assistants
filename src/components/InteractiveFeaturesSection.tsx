
import { useState } from "react";
import { ChevronRight, Bot, Calendar, Users, Link, Bell, Megaphone, Star, ShoppingCart, CreditCard, UserCheck, BarChart3, ArrowRightLeft, FileText, MessageSquare, Globe, CheckCircle, Send, Clock, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

interface Feature {
  id: number;
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  img: string;
}

const features: Feature[] = [
  {
    id: 1,
    titleKey: "autoResponse",
    descriptionKey: "autoResponse",
    icon: Bot,
    img: "/features/img11.png"
  },
  {
    id: 2,
    titleKey: "scheduling",
    descriptionKey: "scheduling",
    icon: Calendar,
    img: "/features/img6.png"
  },
  {
    id: 3,
    titleKey: "leadGeneration",
    descriptionKey: "leadGeneration",
    icon: Users,
    img: "/features/img9.png"
  },
  {
    id: 4,
    titleKey: "integration",
    descriptionKey: "integration",
    icon: Link,
    img: "/features/img4.png"
  },
  {
    id: 5,
    titleKey: "notifications",
    descriptionKey: "notifications",
    icon: Bell,
    img: "/features/img.png"
  },
  {
    id: 6,
    titleKey: "promotions",
    descriptionKey: "promotions",
    icon: Megaphone,
    img: "/features/img5.png"
  },
  {
    id: 7,
    titleKey: "satisfaction",
    descriptionKey: "satisfaction",
    icon: Star,
    img: "/features/img1.png"
  },
  {
    id: 8,
    titleKey: "sales",
    descriptionKey: "sales",
    icon: ShoppingCart,
    img: "/features/img8.png"
  },
  {
    id: 9,
    titleKey: "payments",
    descriptionKey: "payments",
    icon: CreditCard,
    img: "/features/img14.png"
  },
  {
    id: 10,
    titleKey: "multipleAgents",
    descriptionKey: "multipleAgents",
    icon: UserCheck,
    img: "/features/img15.png"
  },
  {
    id: 11,
    titleKey: "segmentation",
    descriptionKey: "segmentation",
    icon: Users,
    img: "/features/img9.png"
  },
  {
    id: 12,
    titleKey: "analytics",
    descriptionKey: "analytics",
    icon: BarChart3,
    img: "/features/img13.png"
  },
  {
    id: 13,
    titleKey: "humanTransfer",
    descriptionKey: "humanTransfer",
    icon: ArrowRightLeft,
    img: "/features/img15.png"
  },
  {
    id: 14,
    titleKey: "documents",
    descriptionKey: "documents",
    icon: FileText,
    img: "/features/img7.png"
  },
  {
    id: 15,
    titleKey: "personalizedMessages",
    descriptionKey: "personalizedMessages",
    icon: MessageSquare,
    img: "/features/img9.png"
  },
  {
    id: 16,
    titleKey: "multilingual",
    descriptionKey: "multilingual",
    icon: Globe,
    img: "/features/img15.png"
  },
  {
    id: 17,
    titleKey: "validation",
    descriptionKey: "validation",
    icon: CheckCircle,
    img: "/features/img12.png"
  },
  {
    id: 18,
    titleKey: "fileSharing",
    descriptionKey: "fileSharing",
    icon: Send,
    img: "/features/img7.png"
  },
  {
    id: 19,
    titleKey: "contextResponses",
    descriptionKey: "contextResponses",
    icon: Clock,
    img: "/features/img2.png"
  },
  {
    id: 20,
    titleKey: "orderStatus",
    descriptionKey: "orderStatus",
    icon: Search,
    img: "/features/img.png"
  }
];

const InteractiveFeaturesSection = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  const handleClose = () => {
    setSelectedFeature(null);
  };

  const callAssistente = (msg) => {
    const numero = '5585920021719'; // sem o '+' e sem espaços
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
    handleClose();
    window.open(url, '_blank');
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            const featureData = t.features.features[feature.titleKey];
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
                    {featureData.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-purple-500 transition-colors duration-300">
                    {t.features.clickForDetails}
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
                      {t.features.features[selectedFeature.titleKey].title}
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
                    src={selectedFeature.img}
                    alt={t.features.features[selectedFeature.titleKey].title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.features.features[selectedFeature.descriptionKey].description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={ () => callAssistente("Oi, como funciona a funcionalidade de " + t.features.features[selectedFeature.titleKey].title)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    {t.features.talkToElli}
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
