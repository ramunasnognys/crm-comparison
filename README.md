# CRM Comparison Landing Page - OffshoreMate

A modern, conversion-focused landing page comparing OffshoreMate with leading CRM competitors (Salesforce, HubSpot, and Zoho CRM).

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📊 Comprehensive feature comparison table
- 💰 Transparent pricing comparison
- 📱 Fully responsive design
- ⚡ Built with Next.js 15 and TypeScript
- 🎯 Conversion-optimized CTAs

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel, Netlify, or any Next.js hosting

## Project Structure

```
crm-comparison/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main comparison landing page
│   └── globals.css      # Global styles
├── public/              # Static assets
└── package.json         # Dependencies
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

## Customization

To customize the comparison data:

1. Edit `app/page.tsx`
2. Update the pricing cards in the pricing section
3. Modify the feature comparison table rows
4. Adjust the CTAs to point to your desired URLs

## License

MIT

## Author

Built for OffshoreMate (app.offshoremate.com)
