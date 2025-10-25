import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#d97706] via-[#ea580c] to-[#c2410c]"
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-32">
        {/* Badge */}
        <div className="inline-block mb-8 animate-fade-in">
          <span className="px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium tracking-wide">
            Est. 1999
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up font-serif">
          Premium Quality Dhoop & Incense
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-4 font-light opacity-95 animate-fade-in-up animation-delay-200">
          Experience the authentic fragrance of tradition and spirituality
        </p>

        {/* Description */}
        <p className="text-base md:text-lg mb-12 opacity-90 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          Leading manufacturer of premium Dhoop Batti, Incense Sticks, and FMCG products in Lucknow, Uttar Pradesh
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <a
            href="#products"
            className="px-10 py-3 bg-white text-orange-600 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-10 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
