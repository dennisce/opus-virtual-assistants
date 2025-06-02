
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <img 
              src="/Opus.png" 
              alt="Opus Logo" 
              className="h-8"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSelector />
            <Button variant="outline">Login</Button>
            <Button>Começar Agora</Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Button variant="outline" className="w-full">Login</Button>
            <Button className="w-full">Começar Agora</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
