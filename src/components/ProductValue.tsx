
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target } from "lucide-react";

const ProductValue = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-ezra-purple via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-ezra-yellow/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Boost Your Revenue
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Improve your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-ezra-yellow to-yellow-300 bg-clip-text text-transparent">
                  bottom line
                </span>
                <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-ezra-yellow animate-spin" />
              </span>
              {" "}with our scalable SaaS
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We offer comprehensive services that help you communicate your complete requirements and develop leading-edge solutions without unnecessary complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-ezra-yellow hover:bg-yellow-400 text-ezra-text px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Get started now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
                View Pricing
              </Button>
            </div>
            
            {/* Floating metrics */}
            <div className="absolute -bottom-8 left-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <div className="text-ezra-yellow font-bold text-lg">+245%</div>
              <div className="text-white/80 text-sm">Revenue Growth</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-ezra-yellow/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            <div className="relative transform group-hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop&crop=center" 
                alt="Laptop with analytics"
                className="rounded-2xl shadow-2xl w-full relative z-10"
              />
              
              {/* Floating dashboard preview */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl z-20 float-animation">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-ezra-text dark:text-white">Live Analytics</span>
                </div>
                <div className="text-2xl font-bold text-ezra-purple">$24.5k</div>
                <div className="text-xs text-green-500">↗ +12.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductValue;
