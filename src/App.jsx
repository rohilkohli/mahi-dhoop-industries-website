import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Features from './components/Features.jsx';
import Mission from './components/Mission.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Features />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
