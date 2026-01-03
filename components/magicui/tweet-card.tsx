import { Tweet } from "react-tweet"

export async function TweetCard({ id }: { id: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 hover:shadow-lg transition-shadow duration-300">
      <Tweet id={id} />
    </div>
  )
}

export function TweetSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white p-6">
      <div className="animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-black/10" />
          <div className="flex-1">
            <div className="h-4 bg-black/10 rounded w-32 mb-2" />
            <div className="h-3 bg-black/10 rounded w-24" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-black/10 rounded w-full" />
          <div className="h-4 bg-black/10 rounded w-5/6" />
          <div className="h-4 bg-black/10 rounded w-4/6" />
        </div>
      </div>
    </div>
  )
}
