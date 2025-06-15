
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6 bg-gradient-to-br from-white to-ezra-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-ezra-text mb-6 leading-tight">
              Ready to level-up your online business?
            </h1>
            <p className="text-xl text-ezra-muted mb-8 leading-relaxed">
              Transform your digital presence with our intelligent SaaS platform. Scale faster, work smarter, and achieve sustainable growth with tools designed for modern entrepreneurs.
            </p>
            <Button className="bg-ezra-purple hover:bg-ezra-purple/90 text-white px-8 py-4 text-lg">
              Get Started
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop&crop=center" 
              alt="Person working on laptop"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -top-4 -right-4 bg-ezra-yellow text-ezra-text px-4 py-2 rounded-full font-semibold shadow-lg">
              SaaS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
