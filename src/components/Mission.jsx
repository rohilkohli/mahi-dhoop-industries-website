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
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                About Mahi Dhoop Industries
              </h2>
              <p className="text-xl text-orange-600 italic mb-6">
                Preserving tradition, embracing quality
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Established in the heart of Lucknow, Uttar Pradesh, Mahi Dhoop Industries 
                has been a trusted name in the manufacturing of premium Dhoop Batti, 
                Incense Sticks, and FMCG products. Our commitment to quality and 
                authenticity has made us a preferred choice for customers across India.
              </p>
              <p>
                We believe in the power of natural ingredients and traditional 
                manufacturing processes. Each of our products is crafted with care, 
                ensuring that the essence of Indian spirituality and tradition is 
                preserved in every stick.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl flex flex-col items-center justify-center text-white p-8">
              <svg
                className="w-24 h-24 mb-4"
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
              <p className="text-lg font-medium text-center">Our Manufacturing Facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
