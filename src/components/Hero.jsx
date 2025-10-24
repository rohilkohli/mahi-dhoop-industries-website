import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary">
        {/* Animated particles pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 100px 100px',
              backgroundPosition: '0 0, 25px 25px',
              animation: 'float 20s linear infinite'
            }}
          />
        </div>
        
        {/* Decorative overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-8 animate-fade-in">
          <span className="px-6 py-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium tracking-widest uppercase">
            Est. 1999
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up">
          Rethink the Essential.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 font-light italic opacity-95 animate-fade-in-up animation-delay-200">
          Experience the authentic fragrance of tradition and spirituality
        </p>

        {/* Description */}
        <p className="text-base md:text-lg mb-12 opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          Leading manufacturer of premium Dhoop Batti, Incense Sticks, and FMCG products in Lucknow, Uttar Pradesh
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <a
            href="#products"
            className="px-10 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-transparent text-white border-2 border-white/80 rounded-full font-semibold hover:bg-white/10 hover:border-white transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { background-position: 0 0, 25px 25px; }
          100% { background-position: 50px 50px, 75px 75px; }
        }
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
