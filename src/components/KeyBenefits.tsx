
const KeyBenefits = () => {
  const benefits = [
    {
      number: "1",
      title: "Explore the features",
      description: "From easy web-interface design and easy to use, bringing experiences to everyone."
    },
    {
      number: "2", 
      title: "Set up your profile",
      description: "Set up your enterprise management and join our community of other like-minded companies."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-ezra-text dark:text-white mb-8">
              Experience the key benefits
            </h2>
            <p className="text-xl text-ezra-muted dark:text-gray-300 mb-12">
              Split platform into its own dashboard can be found through finding flexible integration, through business-to-business solutions.
            </p>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 bg-ezra-purple text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ezra-text dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-ezra-muted dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=center" 
              alt="Woman using laptop"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
