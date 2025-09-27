# SkywardVision - Advertisement Agency Website

A modern, responsive advertisement agency website built with React, TypeScript, Tailwind CSS, and shadcn/ui components. This production-ready application showcases comprehensive business solutions across multiple industries in Pakistan.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient themes and smooth animations
- **Responsive Layout**: Mobile-first design that works seamlessly on all devices
- **SEO Optimized**: Complete meta tags, structured data (JSON-LD), and accessibility features
- **Contact Form**: Validated contact form with file upload and email integration
- **Portfolio Gallery**: Interactive project showcase with filtering and modal views
- **Multi-Service Platform**: Comprehensive services including outdoor advertising, digital marketing, real estate, dairy farming, and transportation
- **SMD Screen**: Dedicated full-screen display page with auto-advancing slides
- **WhatsApp Integration**: Fixed floating WhatsApp button for instant communication
- **Performance Optimized**: Lazy loading, optimized images, and efficient code structure

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Forms**: React Hook Form with Yup validation
- **HTTP Client**: Axios for API communication
- **Icons**: Lucide React, React Icons
- **SEO**: React Helmet Async
- **Notifications**: Sonner for toast messages
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── PortfolioGallery.jsx
│   │   ├── Testimonials.jsx
│   │   └── ContactForm.jsx
│   ├── ui/                 # shadcn/ui components
│   └── SEOHead.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Contact.jsx
│   └── SmdScreen.jsx
├── lib/
│   ├── api.js              # Axios configuration
│   ├── validators.js       # Form validation schemas
│   └── utils.ts           # Utility functions
├── utils/
│   ├── constants.js        # App constants
│   └── seo.js             # SEO utility functions
├── hooks/
│   └── useWindowSize.js    # Custom hooks
└── styles/
    └── index.css          # Global styles
```

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd skywardvision
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Update the environment variables:

   ```env
   # API Configuration
   VITE_API_BASE_URL=https://your-api-endpoint.com

   # WhatsApp Configuration
   VITE_WHATSAPP_NUMBER=923315484042

   # Google Maps Configuration
   VITE_GOOGLE_MAP_EMBED_URL=your-google-maps-embed-url

   # Site Configuration
   VITE_SITE_URL=https://your-domain.com
   VITE_SITE_NAME=SkywardVision
   ```

4. **Start Development Server**

   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### API Integration

The contact form is configured to work with any REST API endpoint. Update the API base URL in your `.env` file:

```env
VITE_API_BASE_URL=https://your-api-endpoint.com
```

Expected API endpoint: `POST /contact`

**Request payload:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+92 331 5484042",
  "subject": "general",
  "message": "Message content...",
  "file": "uploaded-file.pdf" // optional
}
```

### WhatsApp Integration

Configure the WhatsApp number in your environment variables:

```env
VITE_WHATSAPP_NUMBER=923315484042
```

The WhatsApp button will automatically format the link as: `https://wa.me/923315484042?text=Hello%20SkywardVision`

### Google Maps Integration

1. Get a Google Maps embed URL from [Google Maps](https://maps.google.com)
2. Click "Share" → "Embed a map" → Copy the URL from the iframe src
3. Add it to your `.env` file:

```env
VITE_GOOGLE_MAP_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

## 🎨 Customization

### Colors & Themes

The color system is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#0ea5e9', // Blue
    50: '#f0f9ff',
    // ... more shades
  },
  blackish: {
    DEFAULT: '#101727', // Dark background
    light: '#1e293b',
    dark: '#0f172a',
  }
}
```

### Content Updates

All content can be easily updated through the constants file at `src/utils/constants.js`:

- Site information
- Contact details
- Services data
- Navigation menu items
- Social media links
- SEO meta tags

## 📱 Pages Overview

### Home Page (`/`)

- Hero section with CTA buttons
- Services grid showcase
- Portfolio preview
- Client testimonials carousel
- Contact form

### About Page (`/about`)

- Company story and mission
- Team member profiles
- Values and achievements
- Call-to-action sections

### Services Page (`/services`)

- Detailed service descriptions
- Features and benefits
- Pricing information
- Process explanation

### Portfolio Page (`/portfolio`)

- Filterable project gallery
- Detailed case studies
- Project modal views
- Results and metrics

### Contact Page (`/contact`)

- Multiple contact methods
- Interactive contact form
- Office location map
- FAQ section

### SMD Screen Page (`/smd-screen`)

- Full-screen display mode
- Auto-advancing slideshow
- Keyboard controls
- Professional presentation layout

## 🚀 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD for Organization, Services, and Breadcrumbs
- **Canonical URLs**: Proper canonical link implementation
- **Accessibility**: WCAG AA compliant with ARIA labels
- **Performance**: Optimized images and lazy loading
- **Mobile-First**: Responsive design for all devices

## 📧 Contact Form Features

- **Validation**: Real-time form validation using Yup schemas
- **File Upload**: Support for images, PDFs, and documents (max 5MB)
- **Accessibility**: ARIA labels and error announcements
- **Success States**: User-friendly success and error messaging
- **Security**: Form sanitization and validation

## 🎯 SMD Screen Features

The SMD Screen page (`/smd-screen`) provides a professional display solution:

- **Auto-play**: Slides advance automatically every 5 seconds
- **Keyboard Controls**:
  - `Space`: Play/Pause
  - `Arrow Keys`: Navigate slides
  - `F`: Toggle fullscreen
  - `M`: Mute/Unmute
  - `Escape`: Exit fullscreen
- **Progress Indicators**: Visual progress bar and slide dots
- **Responsive**: Works on all screen sizes and orientations

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Style

This project follows modern React patterns:

- Functional components with hooks
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint and Prettier for code formatting

## 🚀 Deployment

The application is ready for deployment on any static hosting service:

1. **Build the project**: `npm run build`
2. **Deploy the `dist` folder** to your hosting service
3. **Configure environment variables** on your hosting platform
4. **Set up redirects** for client-side routing (if needed)

### Recommended Hosting Services

- Vercel (with automatic Git integration)
- Netlify (with form handling features)
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Support

For support or questions about this project, please contact:

- **Email**: support@skywardvision.com.pk
- **Phone**: +92 331 5484042
- **WhatsApp**: Available through the floating button on the website

---

Built with ❤️ by the SkywardVision team
