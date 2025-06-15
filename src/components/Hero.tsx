
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6 bg-gradient-to-br from-white via-purple-50/30 to-ezra-gray dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ezra-purple/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-ezra-yellow/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-ezra-purple/5 to-ezra-yellow/5 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-ezra-purple/10 dark:bg-ezra-purple/20 rounded-full text-ezra-purple dark:text-ezra-yellow text-sm font-medium mb-6 animate-pulse">
              <span className="w-2 h-2 bg-ezra-purple dark:bg-ezra-yellow rounded-full mr-2 animate-ping"></span>
              New features available
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-ezra-text dark:text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-ezra-purple to-purple-600 bg-clip-text text-transparent animate-pulse">
                level-up
              </span>{" "}
              your online business?
            </h1>
            
            <p className="text-xl text-ezra-muted dark:text-gray-300 mb-8 leading-relaxed opacity-90">
              Transform your digital presence with our intelligent SaaS platform. Scale faster, work smarter, and achieve sustainable growth with tools designed for modern entrepreneurs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-to-r from-ezra-purple to-purple-600 hover:from-purple-600 hover:to-ezra-purple text-white px-8 py-4 text-lg group transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="px-8 py-4 text-lg group hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-ezra-muted dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-ezra-yellow rounded-full flex items-center justify-center mr-2">
                  <span className="text-ezra-text font-bold text-xs">✓</span>
                </div>
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-ezra-yellow rounded-full flex items-center justify-center mr-2">
                  <span className="text-ezra-text font-bold text-xs">✓</span>
                </div>
                No credit card needed
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-ezra-purple/20 to-ezra-yellow/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
            
            <div className="relative transform group-hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop&crop=center" 
                alt="Person working on laptop"
                className="rounded-2xl shadow-2xl w-full relative z-10 hover:shadow-purple-500/25 transition-all duration-500"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-ezra-yellow text-ezra-text px-6 py-3 rounded-2xl font-bold shadow-lg z-20 animate-bounce">
                SaaS
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-ezra-yellow rotate-45"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-20 float-animation">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-ezra-text dark:text-white">Growing Fast</span>
                </div>
                <div className="text-xs text-ezra-muted dark:text-gray-400 mt-1">+127% this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
