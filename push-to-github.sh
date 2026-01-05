#!/bin/bash

# Script to push H&H Landing Page to GitHub

echo "🚀 H&H Landing Page - GitHub Push Script"
echo "=========================================="
echo ""

# Check if repository URL is provided
if [ -z "$1" ]; then
    echo "❌ Please provide your GitHub repository URL"
    echo ""
    echo "Usage: ./push-to-github.sh https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo ""
    echo "Or run manually:"
    echo "  git remote add origin YOUR_REPO_URL"
    echo "  git branch -M main"
    echo "  git push -u origin main"
    exit 1
fi

REPO_URL=$1

echo "📦 Adding remote repository: $REPO_URL"
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"

echo "🌿 Ensuring main branch..."
git branch -M main

echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📝 Next steps:"
    echo "  1. Go to your repository on GitHub"
    echo "  2. Click Settings → Pages"
    echo "  3. Under Source, select 'GitHub Actions'"
    echo "  4. Your site will deploy automatically!"
    echo ""
    # Extract username and repo name from URL
    REPO_NAME=$(basename "$REPO_URL" .git)
    USERNAME=$(echo "$REPO_URL" | sed -E 's|https://github.com/([^/]+)/.*|\1|')
    echo "🌐 Your site will be available at:"
    echo "   https://${USERNAME}.github.io/${REPO_NAME}/"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "  - Your repository URL is correct"
    echo "  - You have access to the repository"
    echo "  - Your GitHub credentials are configured"
fi

