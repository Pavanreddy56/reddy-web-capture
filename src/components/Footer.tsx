
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">C P REDDY</h3>
              <p className="text-blue-200 mb-6">
                Providing innovative IT solutions to help businesses thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">Web Development</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Cloud Solutions</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">UI/UX Design</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Cybersecurity</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">IT Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-blue-200 hover:text-white">About</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-blue-300" />
                  <span className="text-blue-200">123 Tech Street, IT Park, Hyderabad, India, 500081</span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-blue-300" />
                  <span className="text-blue-200">+91 9876543210</span>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-blue-300" />
                  <span className="text-blue-200">contact@cpreddy.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-4 border-t border-blue-800 text-center">
          <p className="text-blue-300">
            &copy; {currentYear} C P REDDY. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
