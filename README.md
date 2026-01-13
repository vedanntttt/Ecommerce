# Product Explorer Dashboard

A modern, responsive product catalog application built with Next.js 15, TypeScript, and Tailwind CSS. Browse, search, filter, and favorite products with a seamless user experience.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

## Features

### Core Features
- **Product Listing** - Browse products in a responsive grid layout
- **Search Functionality** - Real-time search by product title
- **Category Filtering** - Filter products by category
- **Product Details** - Detailed view with full product information
- **Favorites System** - Mark products as favorites with localStorage persistence
- **Responsive Design** - Mobile-first design that works across all devices
- **Loading States** - Skeleton loaders for better UX
- **Error Handling** - Graceful error states with user-friendly messages

### Technical Highlights
- Next.js App Router with Server Components
- Full TypeScript implementation (no `any` types)
- Tailwind CSS for styling
- Client-side state management with React hooks
- LocalStorage for favorites persistence
- Clean component architecture
- Accessibility features (ARIA labels, keyboard navigation)
- Optimized images with Next.js Image component

## Project Structure

```
product-explorer/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (product listing)
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx    # Dynamic product detail page
│   └── globals.css         # Global styles
├── components/
│   ├── ProductCard.tsx           # Individual product card
│   ├── ProductCardSkeleton.tsx   # Loading skeleton
│   ├── ProductList.tsx           # Product grid with filters
│   ├── ProductDetails.tsx        # Product detail view
│   ├── SearchBar.tsx             # Search input
│   ├── CategoryFilter.tsx        # Category buttons
│   ├── FavoritesToggle.tsx       # Favorites filter toggle
│   ├── ErrorMessage.tsx          # Error state component
│   └── EmptyState.tsx            # Empty state component
├── hooks/
│   └── useFavorites.ts     # Custom hook for favorites logic
├── lib/
│   ├── api.ts              # API functions
│   └── favorites.ts        # Favorites utilities
└── types/
    └── product.ts          # TypeScript interfaces

```

## Setup Instructions

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** 18.17 or later ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js), **yarn**, or **pnpm**

### Installation Steps

#### 1. Clone or Download the Repository

```
# If using Git
git clone <repository-url>
cd product-explorer

# OR download and extract the ZIP file, then navigate to the folder
cd path/to/product-explorer
```

#### 2. Install Dependencies

```
npm install
```

*This will download and install all required packages. It may take 1-2 minutes.*

#### 3. Start the Development Server

```
npm run dev
```

*You should see output like:*

```
▲ Next.js 16.1.1
- Local:        http://localhost:3000
✓ Ready in 2s
```

#### 4. Open in Browser
Navigate to **[http://localhost:3000](http://localhost:3000)**

**That's it!** The application should now be running.

---

### Available Scripts

```
# Development
npm run dev          # Start dev server with hot reload at http://localhost:3000

# Production
npm run build        # Create optimized production build
npm start            # Run production server (must build first)

# Code Quality
npm run lint         # Run ESLint to check code quality
```

### Troubleshooting

**Port 3000 already in use?**

```
# Kill the process using port 3000
npx kill-port 3000

# Or specify a different port
npm run dev -- -p 3001
```

**Dependencies not installing?**

```
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**

```
# Check for TypeScript errors
npm run build

# Check for linting issues
npm run lint
```

### Building for Production

```
# Create optimized build
npm run build

# Start production server
npm start
```

The production build will be optimized and ready for deployment.

## Features Implemented

### Required Features

| Feature | Status | Implementation |
|---------|--------|----------------|
| Product Listing | Complete | Server-side data fetching with responsive grid |
| Search | Complete | Client-side filtering by product title |
| Category Filter | Complete | Dynamic category buttons from API |
| Product Details | Complete | Dynamic routing with `/products/[id]` |
| Favorites | Complete | LocalStorage persistence with custom hook |
| Loading States | Complete | Skeleton loaders for better UX |
| Error States | Complete | Error boundaries and error messages |
| Responsive Design | Complete | Mobile-first with Tailwind breakpoints |

### Bonus Features

| Feature | Status | Notes |
|---------|--------|-------|
| Server Components | Complete | Used for data fetching on main page |
| TypeScript | Complete | Fully typed, no `any` types |
| Clean Architecture | Complete | Separated concerns, reusable components |
| Accessibility | Complete | ARIA labels, semantic HTML |
| Image Optimization | Complete | Next.js Image component |

## Technical Decisions & Trade-offs

### Architecture Choices

1. **Server Components for Data Fetching**
   - Main product listing uses Server Components for initial data fetch
   - Reduces client-side JavaScript bundle
   - Better SEO and initial load performance

2. **Client Components for Interactivity**
   - Search, filters, and favorites use Client Components
   - Necessary for client-side state and localStorage
   - Optimal balance between server and client rendering

3. **Custom Hook for Favorites**
   - Encapsulates favorites logic
   - Reusable across components
   - Handles localStorage synchronization

4. **Component Composition**
   - Small, focused components
   - Easy to test and maintain
   - Follows single responsibility principle

### Trade-offs

1. **Client-side Filtering vs. API Filtering**
   - **Decision**: Client-side filtering for search and categories
   - **Rationale**: Faster UX, no additional API calls, data set is small (20 products)
   - **Trade-off**: Not scalable for large datasets, but perfect for this use case

2. **LocalStorage for Favorites**
   - **Decision**: LocalStorage instead of database
   - **Rationale**: No backend required, simple implementation, fast access
   - **Trade-off**: Not synced across devices, but meets requirements

3. **No State Management Library**
   - **Decision**: Using React hooks and prop drilling
   - **Rationale**: Application state is simple enough
   - **Trade-off**: Might need Redux/Zustand for larger apps, but overkill here

4. **Fake Store API**
   - **Decision**: Using provided API without caching
   - **Rationale**: Simplicity and meeting requirements
   - **Trade-off**: Could implement Next.js caching strategies, but not critical for demo

## Styling Approach

- **Tailwind CSS** for utility-first styling
- **Mobile-first** responsive design
- **Consistent spacing** using Tailwind's spacing scale
- **Smooth transitions** for interactive elements
- **Shadow and hover effects** for depth and feedback

## Testing Considerations

For production, I would add:
- Unit tests for utility functions (favorites, filtering)
- Component tests with React Testing Library
- E2E tests with Playwright for critical user flows
- Accessibility testing with axe-core

## Deployment

This project can be deployed on:
- **Vercel** (recommended) - Zero configuration
- **Netlify** - Good Next.js support
- **Any Node.js hosting** - Supports Next.js

### Deploy to Vercel

```
npm install -g vercel
vercel
```

## Future Enhancements

If I had more time, I would add:
- Dark mode toggle with system preference detection
- Pagination or infinite scroll for scalability
- Sort by price (ascending/descending)
- Advanced filters (price range, rating)
- Product comparison feature
- Shopping cart functionality
- Unit and E2E tests
- Performance optimizations (image lazy loading, etc.)
- Backend API with real database
- User authentication

## API Used

- **Fake Store API**: https://fakestoreapi.com/
  - Products endpoint: `/products`
  - Single product: `/products/:id`
  - Categories: `/products/categories`

## Development

Built with:
- Next.js 15 (App Router)
- TypeScript 5
- Tailwind CSS 3
- React 19
- Lucide React (icons)

## License

This project is built as a technical assignment demonstration.

---

**Note**: This project was built as a technical assignment to demonstrate modern React/Next.js development practices, clean code architecture, and attention to user experience.
