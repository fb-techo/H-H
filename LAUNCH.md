# How to Launch H&H Landing Page Locally

## Prerequisites

Make sure you have **Node.js** installed (version 18 or higher recommended).

Check if Node.js is installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

## Quick Start

### Step 1: Install Dependencies

Open terminal in the project directory and run:
```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, Framer Motion, etc.)

### Step 2: Start Development Server

Run the development server:
```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### Step 3: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

The landing page should now be running!

## Available Routes

Once running, you can visit:

- **Home Page**: http://localhost:3000
- **Hotels**: http://localhost:3000/hotels
- **Hospitals**: http://localhost:3000/hospitals
- **F&B**: http://localhost:3000/f-and-b
- **Property Developers**: http://localhost:3000/property-developers

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Next.js will automatically try the next available port (3001, 3002, etc.). Check the terminal output for the actual port number.

To specify a different port:
```bash
npm run dev -- -p 3001
```

### Dependencies Not Installing

If you encounter errors during `npm install`:
1. Make sure you have a stable internet connection
2. Try clearing npm cache: `npm cache clean --force`
3. Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### TypeScript Errors

If you see TypeScript errors, make sure you have the latest version:
```bash
npm install --save-dev typescript@latest
```

## Other Useful Commands

- **Build for production**: `npm run build`
- **Start production server**: `npm start` (after building)
- **Run linter**: `npm run lint`

## Development Tips

- The page will automatically reload when you make changes to files
- Check the browser console for any errors
- Hot reload is enabled by default for fast development

