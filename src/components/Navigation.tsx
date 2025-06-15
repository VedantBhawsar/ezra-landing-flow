
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-ezra-purple">ezra</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-ezra-text hover:text-ezra-purple transition-colors">Home</a>
            <a href="#" className="text-ezra-text hover:text-ezra-purple transition-colors">About Us</a>
            <a href="#" className="text-ezra-text hover:text-ezra-purple transition-colors">Features</a>
            <a href="#" className="text-ezra-text hover:text-ezra-purple transition-colors">Projects</a>
            <a href="#" className="text-ezra-text hover:text-ezra-purple transition-colors">Contact Us</a>
          </div>
          
          <Button className="bg-ezra-purple hover:bg-ezra-purple/90 text-white px-6">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
