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
    <section id="products" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Crafted with care, blessed with tradition
          </p>
        </div>

        {/* Products Grid - Placeholder for now */}
        <div className="min-h-[300px]">
          {/* Empty placeholder matching the screenshot */}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
