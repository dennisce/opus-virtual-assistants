
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleLeave = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Experiência Personalizada
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Para oferecer a melhor experiência possível, utilizamos tecnologias que nos ajudam a entender como você interage com nosso site. Isso nos permite aprimorar continuamente nossos serviços.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Ao continuar navegando, você nos permite aperfeiçoar sua jornada conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleContinue}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
            >
              Continuar Navegando
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
