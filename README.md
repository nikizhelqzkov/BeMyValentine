# Be My Valentine 💝

Special Valentine's Day App created with love ❤️

## 🌹 Features

- Beautiful Valentine's Day themed design
- Interactive animations
- Responsive layout
- Environment variables for personalization

## 🚀 Getting Started

### Local Development

```bash
# Use correct Node version
nvm use

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env
# Edit .env and set VITE_NAME to your desired name

# Start dev server
pnpm dev
```

### Environment Variables

Create a `.env` file with:
```
VITE_NAME=YourName
```

## 📦 Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already)
git init

# Add files
git add .
git commit -m "Initial commit: Valentine's Day App"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/BeMyValentine.git
git push -u origin master
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
5. Add Environment Variables:
   - Key: `VITE_NAME`
   - Value: `Дими` (or your desired name)
6. Click "Deploy"

## 🎨 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Deployed on Vercel

---

Made with 💝 for Дими
