# Deployment Guide for Mahi Dhoop Industries Website

This guide will help you deploy the Mahi Dhoop Industries website to various hosting platforms.

## Option 1: GitHub Pages (Recommended - Free)

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select your branch (main or copilot/create-website-for-mahi-dhoop)
   - Select "/ (root)" as the folder
   - Click "Save"
   - Your site will be available at: `https://rohilkohli.github.io/mahi-dhoop-industries-website/`

2. **Wait for deployment:**
   - It may take a few minutes for the site to be live
   - You'll see a success message with your site's URL

## Option 2: Netlify (Free)

1. **Sign up/Login to Netlify:**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign in with GitHub

2. **Deploy from GitHub:**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Branch: `copilot/create-website-for-mahi-dhoop` (or main)
   - Build settings: Leave empty (it's a static site)
   - Click "Deploy site"

3. **Custom Domain (Optional):**
   - After deployment, you can add a custom domain in Site Settings

## Option 3: Vercel (Free)

1. **Sign up/Login to Vercel:**
   - Go to [vercel.com](https://vercel.com/)
   - Sign in with GitHub

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: "Other"
   - Click "Deploy"

## Option 4: Traditional Web Hosting

If you have traditional web hosting (cPanel, etc.):

1. Download all files from the repository
2. Upload via FTP/File Manager:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (optional)
3. Ensure `index.html` is in the root directory or public_html folder
4. Access your domain

## Testing Locally

Before deploying, you can test the website locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open your browser and go to `http://localhost:8000`

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Test contact form (note: currently shows alert, needs backend for email)
- [ ] Check page load speed
- [ ] Verify all sections display correctly
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

## Custom Domain Setup

To use a custom domain (e.g., www.mahidhoopindustries.com):

1. **Purchase domain** from providers like:
   - GoDaddy
   - Namecheap
   - Google Domains
   - BigRock (for .in domains)

2. **Configure DNS:**
   - Add A record pointing to hosting IP
   - Add CNAME for www subdomain
   - Specific steps vary by hosting provider

## Contact Form Integration

The current contact form shows an alert message. To make it functional:

### Option A: Use Form Services (Easy)
- **Formspree** ([formspree.io](https://formspree.io/))
- **FormSubmit** ([formsubmit.co](https://formsubmit.co/))
- **Netlify Forms** (if hosted on Netlify)

### Option B: Backend Integration
- Create a backend API (Node.js, PHP, Python)
- Configure email service (SendGrid, Mailgun, etc.)
- Update `script.js` to POST to your API

## Support

For any issues with the website:
- Check browser console for errors
- Ensure all files are uploaded correctly
- Verify file permissions (644 for files, 755 for directories)
- Clear browser cache

## Next Steps

Consider adding:
- Product images
- Company logo
- Gallery section
- Blog/News section
- E-commerce functionality
- Multi-language support (Hindi/English)
- Google Analytics for tracking
- SSL certificate (HTTPS) - Free with Let's Encrypt or included with most hosts
