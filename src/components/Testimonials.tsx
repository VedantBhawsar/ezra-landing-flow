
import { Star } from "lucide-react";

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
    <section className="py-20 px-6 bg-ezra-gray dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ezra-text dark:text-white mb-4">
            Customer testimonials
          </h2>
          <p className="text-xl text-ezra-muted dark:text-gray-300">
            We work with only the best for absolute results, and why you can rely on us to lead at our values.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg dark:shadow-gray-700/50 border border-transparent dark:border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-ezra-yellow fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
                <span className="ml-2 text-sm text-ezra-muted dark:text-gray-400">{testimonial.rating}</span>
              </div>
              <p className="text-ezra-text dark:text-gray-200 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-ezra-text dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-ezra-muted dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
