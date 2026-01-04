# Deployment Guide

## GitHub Pages Setup

This project is configured for GitHub Pages deployment with Next.js static export.

### Initial Setup

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., `h-and-h-landing`)
   - Don't initialize with README (we already have files)

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: H&H Landing Page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on push to main

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Builds the Next.js static export
- Deploys to GitHub Pages automatically on push to `main` branch

### Manual Deployment

If you want to deploy manually:
```bash
npm run build
# The output will be in the /out directory
# You can upload this to any static hosting service
```

## Alternative: Vercel (Recommended for Next.js)

For better Next.js support with server-side features:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or connect your GitHub repo at: https://vercel.com/new

3. **Benefits**:
   - Full Next.js support (API routes, server components)
   - Automatic deployments on git push
   - Preview deployments for pull requests
   - Better performance with edge functions

## Important Notes

- **API Routes**: The `/api/leads` endpoint won't work with static export. For GitHub Pages, you'll need to:
  - Use a third-party form service (Formspree, FormSubmit, etc.)
  - Or use a serverless function service (Vercel Functions, Netlify Functions)
  
- **Base Path**: The project is configured to work with GitHub Pages subdirectory paths. If deploying to a custom domain, update `next.config.mjs` to remove the `basePath`.

## Update Lead Capture for Static Export

Since API routes don't work with static export, you can modify the form to use an external service:

### Option 1: Formspree
```typescript
// Update LeadCaptureForm.tsx onSubmit:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### Option 2: EmailJS
Use EmailJS to send emails directly from the client.

## Troubleshooting

- If images don't load, ensure `images.unoptimized: true` is set in `next.config.mjs`
- If routes don't work, check the `basePath` matches your repository name
- Clear browser cache if you see old versions

