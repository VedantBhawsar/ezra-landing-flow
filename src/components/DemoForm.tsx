
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DemoForm = () => {
  return (
    <section className="py-20 px-6 bg-gradient-purple relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Get a demo
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of business using digital online of their funding.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop&crop=center" 
              alt="3D Illustration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email" 
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Company Size" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="200+">200+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-12 text-lg">
                    <SelectValue placeholder="Approx. Budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                    <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                    <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                    <SelectItem value="50k+">$50k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-ezra-yellow hover:bg-ezra-yellow/90 text-ezra-text h-12 text-lg font-semibold">
                Get a free demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
