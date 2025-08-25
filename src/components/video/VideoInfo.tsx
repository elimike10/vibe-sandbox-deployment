'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Video } from '@/types';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatViews, getRelativeTime } from '@/lib/data';

interface VideoInfoProps {
  video: Video;
}

export default function VideoInfo({ video }: VideoInfoProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };

  const truncatedDescription = video.description.length > 200 
    ? video.description.substring(0, 200) + '...' 
    : video.description;

  return (
    <div className="space-y-4">
      {/* Video Title */}
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        {video.title}
      </h1>

      {/* Video Stats and Actions */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <span>{formatViews(video.views)}</span>
          <span>•</span>
          <span>{getRelativeTime(video.uploadDate)}</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Like/Dislike */}
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-l-full rounded-r-none px-4 ${liked ? 'text-blue-600' : ''}`}
              onClick={handleLike}
            >
              <div className="w-4 h-4 mr-2">
                <div className={`w-3 h-2 border-2 ${liked ? 'border-blue-600' : 'border-gray-600 dark:border-gray-400'} border-b-0 rounded-t-sm relative`}>
                  <div className={`absolute -bottom-1 left-0.5 w-2 h-1 ${liked ? 'bg-blue-600' : 'bg-gray-600 dark:bg-gray-400'}`}></div>
                </div>
              </div>
              <span className="text-sm">12K</span>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-r-full rounded-l-none px-4 ${disliked ? 'text-red-600' : ''}`}
              onClick={handleDislike}
            >
              <div className="w-4 h-4 mr-2 rotate-180">
                <div className={`w-3 h-2 border-2 ${disliked ? 'border-red-600' : 'border-gray-600 dark:border-gray-400'} border-b-0 rounded-t-sm relative`}>
                  <div className={`absolute -bottom-1 left-0.5 w-2 h-1 ${disliked ? 'bg-red-600' : 'bg-gray-600 dark:bg-gray-400'}`}></div>
                </div>
              </div>
            </Button>
          </div>

          {/* Share */}
          <Button variant="outline" size="sm" className="rounded-full px-4">
            <div className="w-4 h-4 mr-2 relative">
              <div className="w-2 h-2 border-2 border-gray-600 dark:border-gray-400 rounded-full"></div>
              <div className="absolute top-1 left-2 w-2 h-0.5 bg-gray-600 dark:bg-gray-400"></div>
              <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-gray-600 dark:border-gray-400"></div>
            </div>
            Share
          </Button>

          {/* Download */}
          <Button variant="outline" size="sm" className="rounded-full px-4">
            <div className="w-4 h-4 mr-2 relative">
              <div className="w-2 h-3 border-l-2 border-r-2 border-gray-600 dark:border-gray-400 mx-auto"></div>
              <div className="absolute bottom-0 left-1 w-2 h-2 border-b-2 border-l-2 border-r-2 border-gray-600 dark:border-gray-400"></div>
              <div className="absolute bottom-1 left-1.5 w-1 h-1 bg-gray-600 dark:bg-gray-400"></div>
            </div>
            Download
          </Button>

          {/* More */}
          <Button variant="outline" size="icon" className="rounded-full">
            <div className="flex space-x-0.5">
              <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
            </div>
          </Button>
        </div>
      </div>

      <Separator />

      {/* Channel Info */}
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <Link href={`/channel/${video.channel.id}`}>
            <img
              src={video.channel.avatar}
              alt={video.channel.name}
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/abdd43d5-771b-424a-a9cf-365414c7a963.png';
              }}
            />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <Link href={`/channel/${video.channel.id}`}>
                <h3 className="font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  {video.channel.name}
                </h3>
              </Link>
              {video.channel.verified && (
                <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {formatViews(video.channel.subscribers).replace('views', 'subscribers')}
            </p>
          </div>
        </div>

        <Button
          onClick={handleSubscribe}
          className={`rounded-full px-6 ${
            isSubscribed 
              ? 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600' 
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </Button>
      </div>

      {/* Description */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-900 dark:text-white">
            <span>{formatViews(video.views)}</span>
            <span>{getRelativeTime(video.uploadDate)}</span>
          </div>
          
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p className="whitespace-pre-wrap">
              {showFullDescription ? video.description : truncatedDescription}
            </p>
            
            {video.description.length > 200 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-gray-900 dark:text-white font-medium mt-2 hover:text-gray-700 dark:hover:text-gray-200"
              >
                {showFullDescription ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>

          {/* Tags */}
          {video.tags && video.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {video.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}