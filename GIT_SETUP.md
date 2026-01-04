# Git & GitHub Pages Setup - Step by Step

Follow these commands in your terminal (run from the project directory: `/Users/fayiz/Cursor/H&H`):

## Step 1: Initialize Git Repository

```bash
cd "/Users/fayiz/Cursor/H&H"
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: H&H Landing Page with adaptive theming and animations"
```

## Step 4: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `h-and-h-landing`)
3. **Don't** initialize with README, .gitignore, or license
4. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/h-and-h-landing.git`)

## Step 5: Connect to GitHub

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site!

## Step 7: Access Your Live Site

After the workflow completes (usually 2-3 minutes), your site will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

## What's Been Configured

✅ Next.js configured for static export (required for GitHub Pages)
✅ GitHub Actions workflow for automatic deployment
✅ Base path configuration for GitHub Pages subdirectory
✅ Image optimization disabled (required for static hosting)

## Important Notes

⚠️ **API Routes**: The lead capture form won't work with static export. You'll need to:
- Use a service like [Formspree](https://formspree.io) or [FormSubmit](https://formsubmit.co)
- Or deploy to Vercel/Netlify for full Next.js API support

See `DEPLOYMENT.md` for alternative deployment options and form service integration.

## Quick Commands Reference

```bash
# Check status
git status

# View remotes
git remote -v

# Push updates
git add .
git commit -m "Your commit message"
git push

# Pull latest
git pull
```

