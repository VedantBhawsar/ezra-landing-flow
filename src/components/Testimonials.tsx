
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike Smithen, Inc",
      role: "Web Researcher", 
      rating: 4.5,
      text: "I think your app was that effective but you should have far quantity evidence.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Jenny Margaret",
      role: "Product Designer",
      rating: 5.0,
      text: "I think the interface of their far impressive of the months leading partnership. I think web app technology dimensions. Yes this integration.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b5c2b8d4?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Miles",
      role: "Product Manager", 
      rating: 4.8,
      text: "As an manager, I can be amazed at the platform's level of Digital finance insight. Here's how I've been using it.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-ezra-gray via-purple-50/30 to-ezra-gray dark:from-gray-800 dark:via-purple-900/20 dark:to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-ezra-purple/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-ezra-yellow/20 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-ezra-purple/10 dark:bg-ezra-purple/20 rounded-full text-ezra-purple dark:text-ezra-yellow text-sm font-medium mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Customer Love
          </div>
          
          <h2 className="text-4xl font-bold text-ezra-text dark:text-white mb-4">
            What our customers{" "}
            <span className="bg-gradient-to-r from-ezra-purple to-purple-600 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          
          <p className="text-xl text-ezra-muted dark:text-gray-300">
            We work with only the best for absolute results, and why you can rely on us to lead at our values.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-purple-500/10 border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-ezra-purple/5 to-ezra-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-ezra-purple" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-ezra-yellow fill-current' : 'text-gray-300 dark:text-gray-600'} group-hover:animate-pulse`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-ezra-muted dark:text-gray-400 group-hover:text-ezra-purple dark:group-hover:text-ezra-yellow transition-colors duration-300">
                    {testimonial.rating}
                  </span>
                </div>
                
                <p className="text-ezra-text dark:text-gray-200 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r from-ezra-purple to-ezra-yellow opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-ezra-text dark:text-white group-hover:text-ezra-purple dark:group-hover:text-ezra-yellow transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-ezra-muted dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ezra-purple to-ezra-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
