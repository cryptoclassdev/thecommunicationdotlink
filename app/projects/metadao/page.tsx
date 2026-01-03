import { CustomTweetCard } from "@/components/custom-tweet-card"
import { METADAO_TWEETS } from "@/data/metadao-tweets"
import MetaDAOClient from "./metadao-client"

export default function MetaDAOProject() {
  return (
    <div className="min-h-screen bg-white">
      <MetaDAOClient />

      {/* Social Proof Section with Custom Tweet Cards */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-cyan-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Impact</h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              See how our content strategy drives engagement and builds community
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METADAO_TWEETS.map((tweet) => (
              <CustomTweetCard key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
