
import { Code, Cloud, Layout, Shield, Database, Settings } from "lucide-react";

const serviceItems = [
  {
    icon: <Code className="h-8 w-8 text-blue-700" />,
    title: "Web Development",
    description: "Custom websites and web applications built using the latest technologies and best practices."
  },
  {
    icon: <Cloud className="h-8 w-8 text-blue-700" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to support your business applications."
  },
  {
    icon: <Layout className="h-8 w-8 text-blue-700" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that create seamless and engaging experiences."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-700" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from evolving threats."
  },
  {
    icon: <Database className="h-8 w-8 text-blue-700" />,
    title: "Data Management",
    description: "Effective strategies for organizing, storing, and analyzing your business data."
  },
  {
    icon: <Settings className="h-8 w-8 text-blue-700" />,
    title: "IT Consulting",
    description: "Expert guidance to help you make informed technology decisions for your business."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive IT solutions tailored to meet the unique needs of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
