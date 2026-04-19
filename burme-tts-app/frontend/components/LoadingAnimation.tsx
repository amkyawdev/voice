export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      <p className="text-gray-400 text-sm">Generating speech...</p>
    </div>
  )
}