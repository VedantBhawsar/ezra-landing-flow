
import { Users, Shield, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "User-centered design",
      description: "A radical approach to bringing a seamless user experience to developers and teams worldwide.",
    },
    {
      icon: Shield,
      title: "Security For Business",
      description: "We offer users speed excellent through world-class functionality through our data analytics.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "We utilize collaborative software engineering as a key cornerstone solution for our customers.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-ezra-text dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-ezra-muted dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
