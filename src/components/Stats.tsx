
const Stats = () => {
  const stats = [
    { number: "10+", label: "Year of Experience" },
    { number: "120+", label: "Launched Products" },
    { number: "2k", label: "Happy Clients" },
    { number: "20+", label: "Experience Developers" },
  ];

  return (
    <section className="py-20 px-6 bg-ezra-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ezra-text mb-4">
            World acclaimed leaders the field
          </h2>
          <p className="text-xl text-ezra-muted">
            Super talented and collaborative team and enterprise how resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-ezra-purple mb-2">
                {stat.number}
              </div>
              <div className="text-ezra-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
