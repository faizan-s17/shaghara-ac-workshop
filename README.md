# Shaghara AC Workshop Website

A professional, modern, mobile-first business website for Shaghara AC Workshop - a leading home appliance repair service in Abu Shagara, Sharjah, UAE.

## 🌟 Features

- **7 Complete Pages**: Home, About Us, Services, Service Areas, FAQ, Contact Us, Book Service
- **Mobile-First Responsive Design**: Optimized for all device sizes
- **WhatsApp Integration**: Direct booking and inquiry forms that send messages to WhatsApp
- **SEO Optimized**: Meta tags, descriptions, and keywords for local SEO
- **Professional Design**: Clean, trustworthy, conversion-focused layout
- **Fast Performance**: Built with Vite + React for optimal speed
- **Easy Navigation**: Sticky header with smooth scrolling
- **Click-to-Call**: Integrated phone dialing functionality
- **Floating WhatsApp Button**: Always accessible customer support

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Styling**: Pure CSS (no framework dependencies)
- **SEO**: React Helmet Async
- **Build Tool**: Vite

## 📁 Project Structure

```
shaghara-ac-workshop/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx & .css
│   │   ├── Footer.jsx & .css
│   │   ├── ServiceCard.jsx & .css
│   │   ├── FAQAccordion.jsx & .css
│   │   ├── FloatingWhatsApp.jsx & .css
│   │   └── CTAButtons.jsx & .css
│   ├── pages/
│   │   ├── Home.jsx & .css
│   │   ├── About.jsx & .css
│   │   ├── Services.jsx & .css
│   │   ├── ServiceAreas.jsx & .css
│   │   ├── FAQ.jsx & .css
│   │   ├── Contact.jsx & .css
│   │   └── BookService.jsx & .css
│   ├── data/
│   │   ├── services.js
│   │   ├── faqs.js
│   │   └── areas.js
│   ├── utils/
│   │   └── whatsapp.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── index.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd shaghara-ac-workshop
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser and visit: `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Specifications

### Color Palette

- **Primary Navy Blue**: `#1e3a5f`
- **Secondary Deep Blue**: `#2c5282`
- **Accent Light Cyan**: `#38b2ac`
- **Background White**: `#ffffff`
- **Background Light Gray**: `#f7fafc`
- **Text Dark Gray**: `#2d3748`
- **WhatsApp Green**: `#25D366`

### Typography

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto')
- **Headings**: Bold (700 weight)
- **Body**: Regular (400 weight), line-height 1.6

## 📱 Pages Overview

### 1. Home Page
- Hero section with CTAs
- Trust highlights (25+ years, door-to-door, etc.)
- About preview
- Services overview (6 service cards)
- Why choose us section
- AC specialty section
- Service areas preview
- FAQ preview
- Final CTA section

### 2. About Us Page
- Banner section
- Company introduction
- Experience highlights
- Main expertise areas
- Mission statement
- Core values
- Why customers trust us
- CTA section

### 3. Services Page
- Detailed service sections for:
  - AC Repair & Service (Split & Window)
  - Washing Machine Repair (Top & Front Load)
  - Refrigerator Repair
  - Water Dispenser Repair
- CTA buttons after each section

### 4. Service Areas Page
- Primary service areas with descriptions
- Nearby areas list
- Coverage information
- WhatsApp check availability CTA

### 5. FAQ Page
- Accordion-style FAQ component
- 9 common questions answered
- Additional help section
- Final CTA

### 6. Contact Us Page
- Contact details (phone, WhatsApp, location, hours)
- Map placeholder with Google Maps link
- Contact form with WhatsApp submission
- Quick contact buttons

### 7. Book Service Page
- Booking form with WhatsApp integration
- Working hours display
- Direct contact options
- Final CTA

## 🔗 WhatsApp Integration

The website uses WhatsApp Business API for form submissions. When users submit the Contact or Book Service forms, the data is formatted into a message and opens WhatsApp with the pre-filled content.

### Form Fields

**Contact Form:**
- Full Name (required)
- Phone Number (required)
- Area / Location (required)
- Appliance Type (required)
- Problem Description (required)

**Book Service Form:**
- All Contact fields plus:
- Preferred Time (optional)

### WhatsApp Message Format

```
Hello, I want to book a service.

Name: [Customer Name]
Phone: [Phone Number]
Location: [Area / Location]
Appliance: [Appliance Type]
Problem: [Problem Description]
Preferred Time: [Preferred Time]
```

## Image optimization

This project includes a small image optimization script that converts raster images in `public/` to WebP for better loading performance.

- Install the required package:
```bash
npm install --save-dev sharp
```
- Run the optimizer:
```bash
npm run optimize:images
```

The script generates `.webp` versions next to the originals. Update references in CSS/JSX to point to the `.webp` versions when possible (some have already been updated).

## ⚙️ Configuration

### Update Phone Numbers

Edit `src/utils/whatsapp.js`:

```javascript
export const BUSINESS_PHONE = '+971507971172'; // Your actual phone
export const BUSINESS_WHATSAPP = '+971507971172'; // Your WhatsApp number
```

### Update Working Hours

Edit the Footer component and relevant pages:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/pages/BookService.jsx`

### Update Service Areas

Edit `src/data/areas.js` to add or modify service areas.

### Update Services

Edit `src/data/services.js` to modify service offerings.

### Update FAQs

Edit `src/data/faqs.js` to add or modify frequently asked questions.

## 📊 SEO Features

- Page-specific meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Local SEO keywords (Sharjah, Abu Shagara, AC repair, etc.)
- Semantic HTML structure
- Mobile-friendly design
- Fast page load times

## ✅ Quality Features

- **Responsive Design**: Tested on mobile, tablet, and desktop
- **Cross-Browser Compatible**: Works on Chrome, Firefox, Safari, Edge
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Optimized images, code splitting, lazy loading
- **Clean Code**: Component-based architecture, reusable utilities

## 🔄 Deployment

### Recommended Hosting Options

1. **Vercel** (Recommended for React apps)
2. **Netlify**
3. **GitHub Pages**
4. **Traditional hosting** (with FTP upload)

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📝 Maintenance

### Regular Updates

1. Keep dependencies updated: `npm update`
2. Test all forms regularly
3. Verify phone numbers and WhatsApp links
4. Update content seasonally (working hours, services, etc.)

### Content Management

All content is stored in JavaScript files for easy updates:
- `src/data/services.js` - Service offerings
- `src/data/faqs.js` - FAQ content
- `src/data/areas.js` - Service areas

## 🎯 Conversion Optimization

- Multiple CTA buttons throughout
- Sticky header for easy navigation
- Floating WhatsApp button for instant contact
- Click-to-call functionality
- Simple, intuitive forms
- Trust signals (25+ years, local business, etc.)
- Clear value propositions

## 📞 Support & Contact

**Business Information:**
- **Name**: Shaghara AC Workshop
- **Location**: Abu Shagara, Sharjah, UAE
- **Phone**: +971 50 797 1172
- **WhatsApp**: +971 50 797 1172
- **Hours**: Saturday-Thursday 8:00 AM - 2:30 PM & 4:30 PM - 10:00 PM, Friday Closed

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with ❤️ for Shaghara AC Workshop**

*Professional AC & Home Appliance Repair in Sharjah*
