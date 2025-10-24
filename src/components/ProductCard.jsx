import React from 'react';

const ProductCard = ({ imageUrl, title, price, features = [] }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4">
      {/* Top Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          // Icon placeholder
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {price && (
          <p className="text-3xl font-bold text-gradient mb-6">
            {price}
          </p>
        )}

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start text-gray-600 text-sm"
              >
                <svg
                  className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
