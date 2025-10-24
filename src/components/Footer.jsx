import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'Dhoop Batti', href: '#products' },
        { name: 'Incense Sticks', href: '#products' },
        { name: 'FMCG Products', href: '#products' },
      ],
    },
    {
      title: 'Contact Info',
      links: [
        { name: 'Lucknow, Uttar Pradesh', href: null },
        { name: 'info@mahidhoopindustries.com', href: 'mailto:info@mahidhoopindustries.com' },
        { name: '+91-XXXXXXXXXX', href: 'tel:+91XXXXXXXXXX' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Mahi Dhoop Industries
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Premium manufacturer of Dhoop Batti, Incense Sticks, and FMCG products.
            </p>
            <p className="text-accent font-medium">
              Lucknow, Uttar Pradesh, India
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-accent transition-all duration-300 inline-block hover:translate-x-1"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <span className="text-gray-400">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mahi Dhoop Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
