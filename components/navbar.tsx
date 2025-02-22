import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavbarProps {
  openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openModal }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-background">
      {/* Logo */}
      <div className="text-lg font-semibold text-primary">
        VelocityCompliance
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-foreground">
        {["Home", "Features", "ROI Calculator", "Why Compliance"].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-primary"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Action Button */}
      <div className="hidden md:block">
        <Button variant="outline" onClick={openModal}>
          Get Early Access
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="p-2">
              <Menu className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-background text-foreground">
            {["Home", "Features", "ROI Calculator", "Why Compliance"].map(
              (item, index) => (
                <DropdownMenuItem asChild key={index}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                    {item}
                  </a>
                </DropdownMenuItem>
              )
            )}
            <DropdownMenuItem>
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={openModal}
              >
                Get Early Access
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
