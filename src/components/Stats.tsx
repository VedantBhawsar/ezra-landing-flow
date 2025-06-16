
import { TrendingUp, Users, Zap, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    { number: "10+", label: "Year of Experience", icon: Award, color: "text-blue-500" },
    { number: "120+", label: "Launched Products", icon: Zap, color: "text-green-500" },
    { number: "2k", label: "Happy Clients", icon: Users, color: "text-purple-500" },
    { number: "20+", label: "Experience Developers", icon: TrendingUp, color: "text-orange-500" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-ezra-gray via-purple-50/30 to-ezra-gray dark:from-gray-800 dark:via-purple-900/20 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-20 h-20 bg-ezra-purple/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-ezra-yellow/10 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ezra-text dark:text-white mb-4">
            World acclaimed leaders in the field
          </h2>
          <p className="text-xl text-ezra-muted dark:text-gray-300">
            Super talented and collaborative team with enterprise-grade resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-ezra-purple/5 to-ezra-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              {/* Number with animation */}
              <div className="relative text-5xl font-bold text-ezra-purple dark:text-ezra-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-ezra-yellow rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              </div>
              
              <div className="relative text-ezra-muted dark:text-gray-300 font-medium group-hover:text-ezra-text dark:group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-ezra-purple to-ezra-yellow group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Revenue Growth Card - Properly positioned */}
        <div className="flex justify-center">
          <div className="relative group max-w-md w-full">
            <div className="bg-gradient-to-r from-ezra-purple to-purple-600 dark:from-purple-700 dark:to-purple-800 rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-300 border border-purple-200 dark:border-purple-600">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white/80 text-sm font-medium">Revenue Growth</div>
                  <TrendingUp className="w-5 h-5 text-white/80" />
                </div>
                
                <div className="flex items-end gap-3 mb-4">
                  <div className="text-4xl font-bold text-white">245%</div>
                  <div className="text-white/80 text-sm mb-1">since now</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-ezra-yellow/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-yellow-300/30">
                    <span className="text-white text-sm font-medium">View Progress</span>
                  </div>
                  <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-ezra-yellow/20 rounded-full blur-lg"></div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-ezra-purple/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
