
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-ezra-purple mb-4">ezra</div>
            <p className="text-ezra-muted dark:text-gray-300 mb-6 leading-relaxed">
              We are committed to make your online and web development design and development experience truly special across all platforms.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-ezra-purple rounded-full flex items-center justify-center text-white">
                f
              </div>
              <div className="w-10 h-10 bg-ezra-purple rounded-full flex items-center justify-center text-white">
                t
              </div>
              <div className="w-10 h-10 bg-ezra-purple rounded-full flex items-center justify-center text-white">
                in
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-ezra-text dark:text-white mb-6">Quick Link</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">About us</a></li>
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">Blog</a></li>
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">Pricing</a></li>
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-ezra-text dark:text-white mb-6">Features</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">Pixel-Perfect</a></li>
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">Brand Guideline</a></li>
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">Social Market</a></li>
              <li><a href="#" className="text-ezra-muted dark:text-gray-300 hover:text-ezra-purple dark:hover:text-ezra-purple">Online Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-ezra-text dark:text-white mb-6">Newsletter</h4>
            <p className="text-ezra-muted dark:text-gray-300 mb-4">Get monthly updates on new deals</p>
            <div className="flex gap-2">
              <Input placeholder="Email here" className="flex-1 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
              <Button className="bg-ezra-purple hover:bg-ezra-purple/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 text-center text-ezra-muted dark:text-gray-400">
          <p>Copyright Ezra, 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
