import React from 'react';

const Mission = () => {
  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our products',
    },
    {
      title: 'Sustainable Practices',
      description: 'Eco-friendly manufacturing for a better tomorrow',
    },
    {
      title: 'Customer Trust',
      description: 'Building lasting relationships with our customers',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About Mahi Dhoop Industries
              </h2>
              <p className="text-2xl text-primary italic font-medium mb-8">
                Preserving tradition, embracing quality
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Established in the heart of Lucknow, Uttar Pradesh, Mahi Dhoop Industries 
                has been a trusted name in the manufacturing of premium Dhoop Batti, 
                Incense Sticks, and FMCG products. Our commitment to quality and 
                authenticity has made us a preferred choice for customers across India.
              </p>
              <p className="text-lg">
                We believe in the power of natural ingredients and traditional 
                manufacturing processes. Each of our products is crafted with care, 
                ensuring that the essence of Indian spirituality and tradition is 
                preserved in every stick.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mt-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border-l-4 border-primary hover:shadow-lg hover:translate-x-2 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent shadow-2xl overflow-hidden relative group">
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
              
              {/* Icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <svg
                  className="w-32 h-32 mb-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M9 22V12h6v10"
                  />
                </svg>
                <p className="text-xl font-medium">Our Manufacturing Facility</p>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
