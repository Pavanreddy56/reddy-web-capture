
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              IT Solutions for Your Business Success
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Innovative technology solutions to help your business grow and thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                Our Services
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-800 text-lg px-8 py-6 h-auto">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                  <div className="bg-blue-50 rounded-xl p-6 mb-4"></div>
                  <div className="bg-blue-50 rounded-xl p-4 mb-4"></div>
                  <div className="bg-blue-50 rounded-xl p-2 mb-4"></div>
                  <div className="flex justify-end">
                    <div className="bg-blue-700 rounded-lg p-3 w-24"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
