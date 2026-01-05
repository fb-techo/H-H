# Deploy from Branch (gh-pages)

This repository is configured to deploy to GitHub Pages from the `gh-pages` branch.

## How It Works

1. When you push to `main` branch, GitHub Actions will:
   - Build your Next.js site
   - Deploy the built files to the `gh-pages` branch
   - GitHub Pages serves from `gh-pages` branch

## Setup Steps

### 1. Enable GitHub Pages (One-time setup)

1. Go to your repository: https://github.com/fb-techo/H-H
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

### 2. Automatic Deployment

After the first workflow run completes:
- Your site will be available at: `https://fb-techo.github.io/H-H/`
- Every push to `main` will automatically rebuild and redeploy

## Manual Deployment (Alternative)

If you prefer to deploy manually without Actions:

```bash
# Build the site
npm run build

# The output is in the /out folder
# You can manually push this to gh-pages branch
```

## Current Configuration

- **Build output**: `./out` (Next.js static export)
- **Deploy branch**: `gh-pages`
- **Base path**: `/H-H` (matches repository name)

## Troubleshooting

- If the site doesn't load, check that GitHub Pages is set to serve from `gh-pages` branch
- The first deployment may take a few minutes
- Check the Actions tab to see deployment status

