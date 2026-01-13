# Quick Start Guide

Get up and running with Product Explorer in under 5 minutes!

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Installation (1 minute)

```bash
# 1. Navigate to the project
cd product-explorer

# 2. Install dependencies
npm install
```

## Development (30 seconds)

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Project Tour

### Main Pages
- **Home** (`/`) - Product listing with search and filters
- **Product Details** (`/products/[id]`) - Individual product page

### Key Features to Try
1. **Search** - Type in the search bar to filter products
2. **Category Filter** - Click category buttons to filter
3. **Favorites** - Click hearts to mark favorites
4. **Responsive** - Resize browser to see mobile/tablet/desktop views
5. **Navigation** - Click products to see details

## Development Tips

### Hot Reload
Changes to files automatically refresh the browser. No restart needed!

### File Structure
```
app/          → Pages and routing
components/   → Reusable UI components
lib/          → Utilities and API functions
types/        → TypeScript definitions
hooks/        → Custom React hooks
```

### Making Changes

**Add a new component:**
```bash
# Create file in components/
components/MyComponent.tsx
```

**Modify API:**
```bash
# Edit API functions in
lib/api.ts
```

**Update types:**
```bash
# Add/modify interfaces in
types/product.ts
```

## Common Tasks

### Adding a New Feature
1. Create component in `components/`
2. Import in appropriate page
3. Test in browser
4. Run `npm run lint` to check code quality

### Styling with Tailwind
Use utility classes directly in JSX:
```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello!
</div>
```

### API Calls
All API functions are in `lib/api.ts`:
```typescript
import { fetchProducts } from '@/lib/api';

const products = await fetchProducts();
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check all TypeScript errors
npx tsc --noEmit
```

## Testing the App

### Manual Testing Checklist
- [ ] Search for "shirt"
- [ ] Filter by "electronics"
- [ ] Mark a product as favorite
- [ ] Click on a product card
- [ ] Refresh and check favorites persist
- [ ] Toggle favorites filter
- [ ] Resize browser window

### Expected Behavior
- Search filters instantly
- Categories toggle properly
- Favorites persist after refresh
- Product details load correctly
- Responsive on all screen sizes

## Next Steps

1. Read [README.md](README.md) for full documentation
2. Check [FEATURES_CHECKLIST.md](FEATURES_CHECKLIST.md) for implemented features
3. See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for architecture
4. Review [DEPLOYMENT.md](DEPLOYMENT.md) when ready to deploy

## Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## Quick Commands Reference

```bash
npm run dev     # Start development
npm run build   # Build for production
npm run lint    # Check code quality
npm start       # Run production build
```

---

**Happy Coding!**
