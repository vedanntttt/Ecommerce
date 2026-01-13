export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="h-6 bg-gray-200 rounded w-32 mb-8 animate-pulse" />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="h-96 md:h-[500px] bg-gray-200 rounded-lg animate-pulse" />

            <div className="flex flex-col space-y-4">
              <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-10 bg-gray-200 rounded w-32 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-40 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded w-32 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              </div>
              <div className="h-14 bg-gray-200 rounded animate-pulse mt-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
