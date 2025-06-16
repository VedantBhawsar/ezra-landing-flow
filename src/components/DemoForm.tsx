
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, ArrowRight, Users, DollarSign } from "lucide-react";

const DemoForm = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-ezra-purple via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-ezra-yellow/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-10 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-25 animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content with enhanced styling */}
          <div className="relative">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/30">
              <Sparkles className="w-4 h-4 mr-2 animate-spin" />
              Book Your Free Demo
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get a{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-ezra-yellow via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  demo
                </span>
                <div className="absolute -top-2 -right-6 w-4 h-4 bg-ezra-yellow rounded-full animate-ping"></div>
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of businesses using digital solutions to transform their funding approach. 
              See how our platform can revolutionize your workflow in just 15 minutes.
            </p>
            
            {/* Enhanced features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-ezra-yellow rounded-full mr-4 animate-pulse"></div>
                <span className="text-lg">Personalized product walkthrough</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-ezra-yellow rounded-full mr-4 animate-pulse"></div>
                <span className="text-lg">Custom solution recommendations</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-ezra-yellow rounded-full mr-4 animate-pulse"></div>
                <span className="text-lg">ROI calculator and pricing options</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=400&fit=crop&crop=center" 
                alt="3D Illustration"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/20"
              />
              
              {/* Floating success metrics */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/30 float-animation">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-ezra-text">Success Rate</span>
                </div>
                <div className="text-2xl font-bold text-ezra-purple">98.5%</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced form with glassmorphism */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
              {/* Form header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ezra-text dark:text-white mb-2">
                  Start Your Journey
                </h3>
                <p className="text-ezra-muted dark:text-gray-300">
                  Fill out the form below and we'll be in touch within 24 hours
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ezra-text dark:text-white font-medium">
                    Full Name *
                  </Label>
                  <Input 
                    id="name"
                    placeholder="Enter your full name" 
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-ezra-purple dark:focus:border-ezra-yellow transition-all duration-300 rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-ezra-text dark:text-white font-medium">
                    Work Email *
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@company.com" 
                    className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-ezra-purple dark:focus:border-ezra-yellow transition-all duration-300 rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-ezra-text dark:text-white font-medium flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Company Size
                  </Label>
                  <Select>
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-ezra-purple dark:focus:border-ezra-yellow transition-all duration-300 rounded-xl">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-900 z-50 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <SelectItem value="1-10" className="text-lg py-3">1-10 employees</SelectItem>
                      <SelectItem value="11-50" className="text-lg py-3">11-50 employees</SelectItem>
                      <SelectItem value="51-200" className="text-lg py-3">51-200 employees</SelectItem>
                      <SelectItem value="200+" className="text-lg py-3">200+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-ezra-text dark:text-white font-medium flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Approximate Budget
                  </Label>
                  <Select>
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-ezra-purple dark:focus:border-ezra-yellow transition-all duration-300 rounded-xl">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-900 z-50 border border-gray-200 dark:border-gray-700 rounded-xl">
                      <SelectItem value="5k-10k" className="text-lg py-3">$5k - $10k</SelectItem>
                      <SelectItem value="10k-25k" className="text-lg py-3">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k" className="text-lg py-3">$25k - $50k</SelectItem>
                      <SelectItem value="50k+" className="text-lg py-3">$50k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-ezra-yellow to-yellow-400 hover:from-yellow-400 hover:to-ezra-yellow text-ezra-text h-16 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105">
                  Get a free demo
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                {/* Trust indicators */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center space-x-6 text-sm text-ezra-muted dark:text-gray-400">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      No spam, ever
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      GDPR compliant
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      SOC 2 certified
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Floating testimonial */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs float-animation">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                  alt="Customer"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-ezra-text dark:text-white text-sm">Mike Chen</div>
                  <div className="text-xs text-ezra-muted dark:text-gray-400">CEO, TechFlow</div>
                </div>
              </div>
              <p className="text-sm text-ezra-muted dark:text-gray-300">
                "The demo showed us exactly what we needed. Implementation was seamless!"
              </p>
              <div className="flex text-ezra-yellow mt-2">
                {"★".repeat(5)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
