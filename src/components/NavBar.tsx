
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100/20">
      <div className="container mx-auto px-4">
        <NavigationMenu className="flex justify-between items-center py-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <img src="/Opus.svg" alt="Opus Logo" className="h-8" />
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="ml-auto">
            <NavigationMenuItem>
              <Button variant="outline" className="gap-2 bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0 hover:from-purple-700 hover:to-blue-700">
                <UserCircle className="h-5 w-5" />
                Login
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
