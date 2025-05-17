
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-4 md:px-6 lg:px-8 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-700">
            C P REDDY
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-700 font-medium">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Services</a>
          <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">Contact</a>
        </nav>
        
        {/* Contact button on desktop */}
        <div className="hidden md:flex">
          <Button className="bg-blue-700 hover:bg-blue-800">
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 border-b shadow-md">
          <nav className="flex flex-col p-4">
            <a href="#" className="py-2 text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="py-2 text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="py-2 text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#contact" className="py-2 text-gray-700 hover:text-blue-700 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="bg-blue-700 hover:bg-blue-800 mt-4">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
