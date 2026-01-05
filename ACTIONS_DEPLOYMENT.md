# GitHub Actions Pages Deployment

This repository uses GitHub Actions to deploy to GitHub Pages (not gh-pages branch).

## Setup (One-time)

1. Go to your repository: https://github.com/fb-techo/H-H
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

## How It Works

- When you push to `main` branch, the workflow automatically:
  1. Builds your Next.js site
  2. Creates a deployment artifact
  3. Deploys to GitHub Pages

## Your Site URL

After deployment completes:
```
https://fb-techo.github.io/H-H/
```

## Deployment Status

Check deployment status at:
- Actions tab: https://github.com/fb-techo/H-H/actions
- Pages settings: https://github.com/fb-techo/H-H/settings/pages

## Notes

- Deployments are automatic on every push to `main`
- The workflow uses GitHub Actions Pages (not gh-pages branch)
- Build output goes to `/out` directory (Next.js static export)
- BASE_PATH is set to `/H-H` to match repository name

