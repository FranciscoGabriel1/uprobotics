const Loading = () => (
  <div className="animate-pulse w-full max-w-2xl">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-56 mb-4" />
    <div className="space-y-3">
      <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-3/4" />
      <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-1/2" />
      <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-5/6" />
    </div>
    <div className="flex gap-3 mt-4">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-9 w-24" />
      <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-9 w-24" />
    </div>
  </div>
)

export default Loading
