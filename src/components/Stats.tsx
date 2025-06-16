
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
        
        {/* Main stats grid */}
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

        {/* Revenue Growth Card - Better positioned */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Card background with enhanced styling */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-3xl shadow-xl border border-green-100 dark:border-green-800/50 backdrop-blur-sm max-w-md mx-auto hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              
              {/* Floating icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center pt-8">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-105 transition-transform duration-300">
                  +245%
                </div>
                <div className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
                  Revenue Growth
                </div>
                <div className="text-sm text-green-600/80 dark:text-green-400/80">
                  Average client increase in first year
                </div>
                
                {/* Progress bar */}
                <div className="mt-6 bg-green-100 dark:bg-green-800/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-1000 group-hover:w-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
