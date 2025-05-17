
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About C P REDDY</h2>
            <p className="text-lg text-gray-600 mb-6">
              C P REDDY is a leading IT solutions provider focused on delivering innovative technology 
              solutions to businesses of all sizes. With years of experience in the industry, we have 
              established ourselves as a trusted partner for businesses looking to leverage technology 
              for growth and competitive advantage.
            </p>
            <div className="mb-8">
              <div className="flex items-start mb-3">
                <CheckCircle2 className="h-6 w-6 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Expert team with extensive industry experience</p>
              </div>
              <div className="flex items-start mb-3">
                <CheckCircle2 className="h-6 w-6 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Customized solutions tailored to your business needs</p>
              </div>
              <div className="flex items-start mb-3">
                <CheckCircle2 className="h-6 w-6 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Commitment to quality and customer satisfaction</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-blue-700 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Continuous innovation and adoption of new technologies</p>
              </div>
            </div>
            <Button className="bg-blue-700 hover:bg-blue-800">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="bg-blue-100 w-full h-72 md:h-96 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-700/10 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">Established in 2010</h3>
                  <p className="text-blue-900 mb-4">Serving clients worldwide</p>
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-700">200+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-700">50+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
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

export default About;
