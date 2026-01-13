export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-200" />
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>
        
        <div className="h-3 bg-gray-200 rounded w-1/3 mb-4" />
        
        <div className="h-8 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
}
