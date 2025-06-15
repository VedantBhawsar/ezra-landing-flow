
import { Button } from "@/components/ui/button";

const ProductValue = () => {
  return (
    <section className="py-20 px-6 bg-gradient-purple relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Improve your bottom line with our scalable SaaS
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We offer more control services through which you can talk to your complete the requirement and develop more leading-edge without extra text that isn't helping.
            </p>
            <Button className="bg-ezra-yellow hover:bg-ezra-yellow/90 text-ezra-text px-8 py-4 text-lg font-semibold">
              Get started now
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop&crop=center" 
              alt="Laptop with analytics"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductValue;
