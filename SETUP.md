# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to http://localhost:3000

## Project Structure Overview

### Pages
- `/` - Home page with segment selector
- `/hotels` - Hotels segment landing page
- `/hospitals` - Hospitals segment landing page  
- `/f-and-b` - F&B segment landing page
- `/property-developers` - Property Developers segment landing page

### Key Features Implemented
✅ Adaptive theme system (4 distinct themes)
✅ Segment-specific hero sections
✅ Product showcase (dynamic per segment)
✅ Integration badges (Oracle/Opera PMS)
✅ Lead capture forms with validation
✅ Testimonials (filtered by segment)
✅ Pricing section
✅ Navigation with segment awareness
✅ Footer component
✅ API endpoint for lead capture

### Design Themes

Each segment automatically applies its theme:
- **Hotels**: Luxury (Navy/Gold/Burgundy, elegant serif)
- **Hospitals**: Professional (Medical Blue/Teal, clean sans-serif)
- **F&B**: Vibrant (Orange/Red/Yellow, bold sans-serif)
- **Property Developers**: Modern (Charcoal/Slate/Electric Blue, geometric sans-serif)

### Next Steps (Optional)

1. **Add Animations**: Framer Motion is installed but not yet implemented
2. **Connect Lead Capture**: Replace JSON file storage with database/email service
3. **Add Images**: Replace placeholder content with actual product images
4. **SEO Optimization**: Add meta tags, structured data, Open Graph images
5. **Analytics**: Integrate Google Analytics or similar

## Production Deployment

The project is ready for deployment on Vercel:

```bash
npm run build
```

Or connect your GitHub repository to Vercel for automatic deployments.

