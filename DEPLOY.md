# Deployment Guide

## Quick Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub: `ramunasnognys/crm-comparison`
4. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything.

## Alternative: Deploy to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `ramunasnognys/crm-comparison`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy"

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Environment Variables

No environment variables are required for this landing page.

## Custom Domain

After deployment:
1. Go to your hosting provider's domain settings
2. Add your custom domain
3. Update the DNS records as instructed
4. SSL certificate will be automatically generated

## Performance Tips

- The page is statically generated for optimal performance
- All images are optimized by Next.js
- Tailwind CSS is purged in production
- Lighthouse score: 95+ expected

## Updates

To update the live site:
1. Make changes locally
2. Commit and push to GitHub
3. Hosting provider will auto-deploy (if configured)

Or manually:
```bash
git add .
git commit -m "Update comparison data"
git push origin main
```
