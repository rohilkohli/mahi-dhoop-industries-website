# Mahi Dhoop Industries Website

A modern, elegant React-based website for Mahi Dhoop Industries - a premium manufacturer of Dhoop Batti, Incense Sticks, and FMCG products based in Lucknow, Uttar Pradesh, India.

## Features

- **Modern React Architecture**: Built with React functional components and hooks
- **Tailwind CSS Styling**: Utility-first CSS framework for rapid development
- **Minimalist Design**: Premium, clean aesthetic inspired by cycle.in
- **Fully Responsive**: Works seamlessly on all devices (desktop, tablet, mobile)
- **Component-Based**: Modular, reusable components for easy maintenance
- **Smooth Animations**: CSS transitions and animations for elegant user experience
- **Fast Performance**: Optimized with Vite for lightning-fast builds

## Technologies Used

- **React 18.3**: Modern React with functional components and hooks
- **Vite**: Next-generation frontend build tool
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility
- **Google Fonts**: Playfair Display (serif) + Poppins (sans-serif)

## Project Structure

```
mahi-dhoop-industries-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation with mobile menu
│   │   ├── Logo.jsx            # Brand logo component
│   │   ├── Hero.jsx            # Full-height hero section
│   │   ├── ProductGrid.jsx     # Product showcase section
│   │   ├── ProductCard.jsx     # Reusable product card
│   │   ├── Mission.jsx         # About/mission section
│   │   └── Footer.jsx          # Footer with links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # Documentation
```

## Components

### Header.jsx
Sticky-top navigation component with:
- Logo component on the left
- Navigation links (Story, Shop, Journal) on the right
- Responsive hamburger menu for mobile
- Smooth scroll to sections
- Backdrop blur effect on scroll

### Hero.jsx
Full-viewport-height hero section featuring:
- Gradient background with animated particles
- "Est. 1999" decorative badge
- Large centered headline: "Rethink the Essential."
- Call-to-action buttons
- Smooth fade-in animations

### ProductGrid.jsx
Product showcase section with:
- "Our Collection" title
- Responsive 3-column grid (1-column on mobile)
- Renders ProductCard components for each product

### ProductCard.jsx
Reusable product card with:
- Image or icon placeholder
- Product title and price (optional)
- Feature list with checkmarks
- Hover effects (shadow, lift, scale)
- Top accent bar animation

### Mission.jsx
Two-column responsive layout with:
- Company information and mission
- Core values with gradient backgrounds
- Image placeholder for facility
- Slide-in hover effects

### Footer.jsx
Footer with 4 columns:
- Company information
- Quick links
- Products
- Contact information
- Gradient top border

## Setup & Development

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rohilkohli/mahi-dhoop-industries-website.git
cd mahi-dhoop-industries-website

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` directory, ready for deployment.

## Customization

### Colors
Modify colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#c17817',
      secondary: '#8b5a0a',
      accent: '#e89d3f',
      'accent-light': '#f4d19b',
    },
  },
}
```

### Fonts
Update fonts in `tailwind.config.js` and `src/index.css`

### Content
Edit component files in `src/components/` to modify content

### Styling
Use Tailwind utility classes or add custom CSS in `src/index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Philosophy

This website follows a minimalist, premium aesthetic inspired by cycle.in:
- **Generous White Space**: Clean, uncluttered layouts
- **Premium Typography**: Playfair Display for headings, Poppins for body
- **Subtle Animations**: Smooth transitions and hover effects
- **Refined Color Palette**: Warm amber/gold tones
- **Component-Based**: Modular, maintainable architecture

## Contact

For inquiries about Mahi Dhoop Industries:
- **Location**: Lucknow, Uttar Pradesh, India
- **Email**: info@mahidhoopindustries.com
- **Phone**: +91-XXXXXXXXXX

## License

© 2024 Mahi Dhoop Industries. All rights reserved.