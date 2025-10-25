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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">
              Mahi Dhoop Industries
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium manufacturer of Dhoop Batti, Incense Sticks, and FMCG products.
            </p>
            <p className="text-orange-400 text-sm font-medium">
              Lucknow, Uttar Pradesh, India
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mahi Dhoop Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
