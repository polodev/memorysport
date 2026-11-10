#!/usr/bin/env bash
# ==============================================================================
# Deploy Hugo site to gh-pages branch without using any GitHub Actions credits!
# ==============================================================================
set -e

echo "🔨 Building Hugo static site..."
hugo --minify

echo "🚀 Preparing deployment to gh-pages branch..."
REMOTE_URL=$(git config --get remote.origin.url)

if [ -z "$REMOTE_URL" ]; then
  echo "❌ Error: Could not determine git remote URL."
  exit 1
fi

TMP_DIR=$(mktemp -d)
cp -r public/* "$TMP_DIR/"

cd "$TMP_DIR"
git init -q
git checkout -b gh-pages
git add .
git commit -m "Deploy Hugo static site $(date '+%Y-%m-%d %H:%M:%S')" -q
git remote add origin "$REMOTE_URL"

echo "📡 Pushing to origin/gh-pages..."
git push -f origin gh-pages

cd - > /dev/null
rm -rf "$TMP_DIR"

echo "✅ Successfully deployed to gh-pages branch!"
echo "💡 GitHub Pages will serve the site directly with ZERO (0) GitHub Actions credits consumed."
