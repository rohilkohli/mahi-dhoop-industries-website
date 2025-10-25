import React from 'react';

const Features = () => {
  const features = [
    {
      number: '25+',
      title: 'Years of Excellence',
      description: 'Trusted manufacturer with decades of experience',
    },
    {
      number: '100%',
      title: 'Natural Ingredients',
      description: 'Pure and authentic materials in every product',
    },
    {
      number: '500+',
      title: 'Distribution Points',
      description: 'Wide network across India',
    },
    {
      number: '10K+',
      title: 'Happy Customers',
      description: 'Building relationships, one fragrance at a time',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3 font-serif">
                {feature.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-white/90 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;