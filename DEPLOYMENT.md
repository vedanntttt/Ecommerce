# Deployment Guide

## Quick Deployment to Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd product-explorer
vercel
```

4. **Follow the prompts**
- Link to existing project or create new one
- Select default settings
- Wait for deployment

5. **Production Deployment**
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Vercel auto-detects Next.js configuration
- Click "Deploy"

3. **Automatic Deployments**
- Every push to main branch deploys to production
- Pull requests get preview deployments

## Deploy to Netlify

### Via Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Initialize**
```bash
netlify init
```

4. **Deploy**
```bash
netlify deploy --prod
```

### Via Netlify Dashboard

1. **Build Settings**
- Build command: `npm run build`
- Publish directory: `.next`

2. **Environment Variables**
- No environment variables needed for this project

## Deploy to Other Platforms

### Docker Deployment

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

2. **Build and Run**
```bash
docker build -t product-explorer .
docker run -p 3000:3000 product-explorer
```

### Traditional Node.js Hosting

1. **Build the application**
```bash
npm run build
```

2. **Start the server**
```bash
npm start
```

3. **Use PM2 for production**
```bash
npm install -g pm2
pm2 start npm --name "product-explorer" -- start
pm2 save
pm2 startup
```

## Environment Variables

This project doesn't require environment variables, but if you add features that do:

1. **Create `.env.local`**
```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

2. **Add to deployment platform**
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Build & deploy → Environment

## Post-Deployment Checklist

- Site loads correctly
- Images display properly
- Search functionality works
- Filters work correctly
- Product details pages load
- Favorites persist on refresh
- Responsive on mobile devices
- No console errors
- Fast load times

## Performance Optimization

### After Deployment

1. **Check Lighthouse scores**
```bash
npx lighthouse https://your-site.com
```

2. **Enable Vercel Analytics** (if using Vercel)
- Add `@vercel/analytics` package
- Monitor Core Web Vitals

3. **Add Image Domains** (if needed)
```typescript
// next.config.ts
const config = {
  images: {
    domains: ['fakestoreapi.com'],
  },
};
```

## Monitoring

### Recommended Tools

1. **Vercel Analytics** - Built-in for Vercel deployments
2. **Google Analytics** - User behavior tracking
3. **Sentry** - Error tracking
4. **LogRocket** - Session replay

## Troubleshooting

### Build Fails

1. **Check TypeScript errors**
```bash
npm run build
```

2. **Check ESLint errors**
```bash
npm run lint
```

### API Issues

1. **Check API availability**
```bash
curl https://fakestoreapi.com/products
```

2. **Add error boundaries** - Already implemented!

### Performance Issues

1. **Optimize images** - Already using Next.js Image!
2. **Enable caching** - Configure in next.config.ts
3. **Use CDN** - Automatic with Vercel/Netlify

## Custom Domain

### Vercel

1. Go to Project Settings
2. Navigate to Domains
3. Add your custom domain
4. Configure DNS records

### Netlify

1. Go to Site Settings
2. Domain Management
3. Add custom domain
4. Follow DNS instructions

## CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## Support

For deployment issues:
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support
- Next.js: https://nextjs.org/docs

---

**Note**: This guide assumes you're deploying the application as-is. If you add authentication, databases, or other backend services, additional configuration will be required.
