# Project Structure

## Overview
This document explains the architecture and file structure of the Product Explorer application.

## Directory Structure

```
product-explorer/
│
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page (product listing)
│   ├── loading.tsx              # Loading state for home page
│   ├── error.tsx                # Error boundary for home page
│   ├── not-found.tsx            # 404 page
│   ├── globals.css              # Global CSS styles
│   │
│   └── products/
│       └── [id]/                # Dynamic route for product details
│           ├── page.tsx         # Product detail page
│           ├── loading.tsx      # Loading state for product page
│           └── error.tsx        # Error boundary for product page
│
├── components/                   # Reusable React components
│   ├── ProductCard.tsx          # Individual product card (Client Component)
│   ├── ProductCardSkeleton.tsx  # Loading skeleton for product cards
│   ├── ProductList.tsx          # Product grid with filters (Client Component)
│   ├── ProductDetails.tsx       # Product detail view (Client Component)
│   ├── SearchBar.tsx            # Search input component (Client Component)
│   ├── CategoryFilter.tsx       # Category filter buttons (Client Component)
│   ├── FavoritesToggle.tsx      # Favorites toggle button (Client Component)
│   ├── ErrorMessage.tsx         # Error state display component
│   └── EmptyState.tsx           # Empty state component
│
├── hooks/                        # Custom React hooks
│   └── useFavorites.ts          # Hook for managing favorites state
│
├── lib/                          # Utility functions and services
│   ├── api.ts                   # API functions for data fetching
│   └── favorites.ts             # Favorites utility functions
│
├── types/                        # TypeScript type definitions
│   └── product.ts               # Product and filter interfaces
│
├── public/                       # Static assets
│
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── CONTRIBUTING.md              # Contribution guidelines
├── README.md                    # Project documentation
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration (Tailwind)
└── eslint.config.mjs            # ESLint configuration

```

## Architecture Decisions

### Server vs Client Components

**Server Components (Default)**
- `app/page.tsx` - Fetches data on server for better performance and SEO
- `app/products/[id]/page.tsx` - Server-side product fetching

**Client Components ('use client')**
- All components in `/components` that need interactivity
- Hooks in `/hooks` directory
- Components that use state, effects, or browser APIs

### Data Flow

1. **Server Components** fetch initial data from the API
2. Data is passed to **Client Components** as props
3. **Client Components** handle user interactions (search, filter, favorites)
4. **Custom Hooks** manage complex client-side state (favorites)
5. **Utility Functions** in `/lib` handle business logic

### State Management

- **React useState** for component-local state
- **Custom Hooks** for shared logic (useFavorites)
- **localStorage** for persistence (favorites)
- **Props** for data passing

### Routing

- **App Router** (Next.js 13+)
- **Dynamic Routes** for product details: `/products/[id]`
- **Special Files**:
  - `loading.tsx` - Loading UI
  - `error.tsx` - Error boundaries
  - `not-found.tsx` - 404 page

### Styling

- **Tailwind CSS** for utility-first styling
- **Mobile-first** responsive design
- **No external CSS files** except globals.css

### Type Safety

- **TypeScript** throughout the project
- **Interfaces** for all data structures
- **Typed props** for all components
- **No `any` types** used

## Component Responsibilities

### ProductList
- Orchestrates the product listing page
- Manages search, filter, and favorites state
- Handles empty states

### ProductCard
- Displays individual product information
- Handles favorite toggle
- Links to product details

### ProductDetails
- Shows comprehensive product information
- Handles favorite toggle in detail view
- Displays ratings and price

### useFavorites Hook
- Manages favorites array in localStorage
- Provides toggle functionality
- Checks if product is favorited

## API Integration

### Endpoints Used
- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product
- `GET /products/categories` - Fetch all categories

### Error Handling
- Network errors caught by error boundaries
- Loading states with skeletons
- User-friendly error messages

## Performance Optimizations

1. **Server Components** - Reduce client JavaScript
2. **Image Optimization** - Next.js Image component
3. **Lazy Initialization** - useState with initializer function
4. **useMemo** - Memoize filtered products
5. **useCallback** - Stable callback references

## Future Enhancements

See README.md for planned improvements and additional features.
