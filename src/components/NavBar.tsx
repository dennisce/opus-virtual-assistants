
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/translations";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center space-x-8">
            <img 
              src="/Opus.png" 
              alt="Opus Logo" 
              className="h-5"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSelector />
            <Button variant="outline" size="sm">{t.navbar.login}</Button>
            <Button size="sm">{t.navbar.startNow}</Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-3 space-y-2">
            <Button variant="outline" size="sm" className="w-full">{t.navbar.login}</Button>
            <Button size="sm" className="w-full">{t.navbar.startNow}</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
