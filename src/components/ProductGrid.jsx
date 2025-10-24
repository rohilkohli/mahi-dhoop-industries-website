import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductGrid = () => {
  const products = [
    {
      title: 'Dhoop Batti',
      price: null,
      imageUrl: null,
      features: [
        '100% Natural Ingredients',
        'Long-lasting Fragrance',
        'Eco-friendly Packaging',
      ],
    },
    {
      title: 'Incense Sticks',
      price: null,
      imageUrl: null,
      features: [
        'Multiple Fragrances',
        'Slow Burning',
        'Premium Quality',
      ],
    },
    {
      title: 'FMCG Products',
      price: null,
      imageUrl: null,
      features: [
        'Quality Assured',
        'Affordable Pricing',
        'Wide Distribution',
      ],
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-gray-600 font-light italic">
            Crafted with care, blessed with tradition
          </p>
          
          {/* Decorative underline */}
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
