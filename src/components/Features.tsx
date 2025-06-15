
import { Users, Shield, Globe, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "User-centered design",
      description: "A radical approach to bringing a seamless user experience to developers and teams worldwide.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Security For Business",
      description: "We offer users speed excellent through world-class functionality through our data analytics.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "We utilize collaborative software engineering as a key cornerstone solution for our customers.",
      color: "from-orange-500 to-red-600"
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-ezra-purple/10 dark:bg-ezra-purple/20 rounded-full text-ezra-purple dark:text-ezra-yellow text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Core Features
          </div>
          
          <h2 className="text-4xl font-bold text-ezra-text dark:text-white mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-ezra-purple to-purple-600 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          
          <p className="text-xl text-ezra-muted dark:text-gray-300 max-w-2xl mx-auto">
            Powerful tools designed to help you build, scale, and optimize your online business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative text-center p-8 rounded-3xl hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-ezra-yellow rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-ezra-purple rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
              
              <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-ezra-text dark:text-white mb-4 group-hover:text-ezra-purple dark:group-hover:text-ezra-yellow transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-ezra-muted dark:text-gray-300 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ezra-purple to-ezra-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
