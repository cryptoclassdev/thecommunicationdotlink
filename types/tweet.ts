export interface TweetData {
  id: string
  author: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  content: string
  media?: {
    type: "video" | "image"
    url: string
    thumbnail?: string
  }
  engagement: {
    likes: number
    replies: number
    retweets: number
    views: number
  }
  timestamp: string
  tweetUrl: string
}
