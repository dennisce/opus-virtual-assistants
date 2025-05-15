
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

const NavBar = () => {
  return (
    <header className=" absolute top-0 left-0 z-50 w-full flex items-center justify-between p-2 shadow-md">
      {/* Logo na esquerda */}
      <div className="flex items-center">
        <img src="/Opus.svg" alt="Logo Opus" className="h-10" />
      </div>

      {/* Botão de login na direita */}
      <div>
      <a
        href="https://dashboard.opusapp.com.br"
        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-thin rounded-full shadow-lg hover:ring-2 hover:ring-purple-500 hover:from-purple-700 hover:to-purple-500 transition-all duration-300"
      >
        Login
      </a>
      </div>
    </header>
    // <div className="w-full absolute">
    //   <div className="container mx-auto px-4">
    //     <NavigationMenu className="flex items-center justify-between py-4">
          
    //       {/* Logo */}
    //       <NavigationMenuList>
    //         <NavigationMenuItem>
    //           <img src="/Opus.svg" alt="Opus Logo" className="h-8" />
    //         </NavigationMenuItem>
    //       </NavigationMenuList>

    //       {/* Botão de Login */}
    //       <NavigationMenuList className="ml-auto">
    //         <NavigationMenuItem>
    //           <Button variant="outline" className="gap-2">
    //             <UserCircle className="h-5 w-5" />
    //             Login
    //           </Button>
    //         </NavigationMenuItem>
    //       </NavigationMenuList>

    //     </NavigationMenu>
    //   </div>
    // </div>
  );
};

export default NavBar;
