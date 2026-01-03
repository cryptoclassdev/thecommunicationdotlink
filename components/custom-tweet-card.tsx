"use client"

import type React from "react"

import type { TweetData } from "@/types/tweet"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Heart, MessageCircle, Repeat2, Share, BarChart3 } from "lucide-react"

interface CustomTweetCardProps {
  tweet: TweetData
}

export function CustomTweetCard({ tweet }: CustomTweetCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(tweet.engagement.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <article
      className="bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors overflow-hidden p-4"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Profile Picture */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
              <Image src="/images/meta-icon.jpg" alt={tweet.author.name} fill className="object-cover" sizes="48px" />
            </div>

            {/* Author Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 flex-wrap">
                <Link
                  href={tweet.tweetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[15px] text-gray-900 hover:underline truncate"
                >
                  {tweet.author.name}
                </Link>
                {tweet.author.verified && (
                  <svg
                    viewBox="0 0 22 22"
                    aria-label="Verified Business Account"
                    className="w-[18px] h-[18px] flex-shrink-0"
                    fill="none"
                  >
                    <rect width="22" height="22" rx="6" fill="#FFD700" />
                    <g transform="translate(3, 3)">
                      <path
                        d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8l2.856 1.421.559 3.184 3.201-.452L11 14.4l2.324-2.248 3.201.452.559-3.184L20 8l-2.856-1.421-.559-3.184-3.201.453z"
                        fill="#000000"
                      />
                      <path
                        d="M6.5 8.5l2 2 4-4.5"
                        stroke="#FFD700"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </g>
                  </svg>
                )}
              </div>
              <span className="text-[15px] text-gray-500">@{tweet.author.username}</span>
            </div>
          </div>

          {/* Follow Button */}
          <button
            onClick={() => window.open(tweet.tweetUrl, "_blank")}
            className="px-4 py-1.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
          >
            Follow
          </button>
        </div>

        {/* Tweet Content */}
        <div className="mb-3">
          <p className="text-[15px] text-gray-900 leading-5 whitespace-pre-wrap break-words">{tweet.content}</p>
        </div>

        {/* Media Container */}
        {tweet.media && (
          <div className="mb-3 rounded-2xl overflow-hidden border border-gray-200 relative group">
            {tweet.media.type === "video" ? (
              <div className="relative aspect-video bg-black">
                <video
                  src={tweet.media.url}
                  poster={tweet.media.thumbnail}
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                />
              </div>
            ) : (
              <Image
                src={tweet.media.url || "/placeholder.svg"}
                alt="Tweet media"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            )}
          </div>
        )}

        {/* Timestamp and Views */}
        <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-3">
          <time>{tweet.timestamp}</time>
          <span>·</span>
          <div className="flex items-center gap-1">
            <BarChart3 className="w-[14px] h-[14px]" />
            <span className="font-semibold text-gray-900">{formatNumber(tweet.engagement.views)}</span>
            <span>Views</span>
          </div>
        </div>

        {/* Engagement Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          {/* Reply */}
          <button
            onClick={() => window.open(tweet.tweetUrl, "_blank")}
            className="flex items-center gap-2 group hover:text-[#1D9BF0] transition-colors"
          >
            <div className="p-2 rounded-full group-hover:bg-[#1D9BF0]/10 transition-colors">
              <MessageCircle className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px] text-gray-500 group-hover:text-[#1D9BF0]">
              {formatNumber(tweet.engagement.replies)}
            </span>
          </button>

          {/* Retweet */}
          <button
            onClick={() => window.open(tweet.tweetUrl, "_blank")}
            className="flex items-center gap-2 group hover:text-green-600 transition-colors"
          >
            <div className="p-2 rounded-full group-hover:bg-green-600/10 transition-colors">
              <Repeat2 className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[13px] text-gray-500 group-hover:text-green-600">
              {formatNumber(tweet.engagement.retweets)}
            </span>
          </button>

          {/* Like */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 group transition-colors ${
              isLiked ? "text-pink-600" : "hover:text-pink-600"
            }`}
          >
            <div
              className={`p-2 rounded-full transition-colors ${
                isLiked ? "bg-pink-600/10" : "group-hover:bg-pink-600/10"
              }`}
            >
              <Heart className={`w-[18px] h-[18px] ${isLiked ? "fill-pink-600" : ""}`} />
            </div>
            <span
              className={`text-[13px] transition-colors ${
                isLiked ? "text-pink-600" : "text-gray-500 group-hover:text-pink-600"
              }`}
            >
              {formatNumber(likeCount)}
            </span>
          </button>

          {/* Share */}
          <button
            onClick={() => window.open(tweet.tweetUrl, "_blank")}
            className="flex items-center gap-2 group hover:text-[#1D9BF0] transition-colors"
          >
            <div className="p-2 rounded-full group-hover:bg-[#1D9BF0]/10 transition-colors">
              <Share className="w-[18px] h-[18px]" />
            </div>
          </button>
        </div>
    </article>
  )
}
