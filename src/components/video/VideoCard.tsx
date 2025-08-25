'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Video } from '@/types';
import { formatViews, getRelativeTime } from '@/lib/data';

interface VideoCardProps {
  video: Video;
  className?: string;
}

export default function VideoCard({ video, className = '' }: VideoCardProps) {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <Link href={`/watch/${video.id}`}>
        <div className="space-y-3">
          {/* Thumbnail */}
          <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54aea5f3-db05-4e2b-893b-bfd86845a408.png';
              }}
            />
            
            {/* Duration overlay */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
              {video.duration}
            </div>
          </div>

          {/* Video info */}
          <div className="flex space-x-3">
            {/* Channel avatar */}
            <div className="flex-shrink-0">
              <img
                src={video.channel.avatar}
                alt={video.channel.name}
                className="w-9 h-9 rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1ec2abb8-f4ea-4d2a-b386-26359447038c.png';
                }}
              />
            </div>

            {/* Video details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm line-clamp-2 text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                {video.title}
              </h3>
              
              <div className="space-y-0.5">
                <div className="flex items-center space-x-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {video.channel.name}
                  </p>
                  {video.channel.verified && (
                    <div className="w-3 h-3 bg-gray-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                  <span>{formatViews(video.views)}</span>
                  <span>•</span>
                  <span>{getRelativeTime(video.uploadDate)}</span>
                </div>
              </div>
            </div>

            {/* More options */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <div className="flex flex-col space-y-0.5">
                  <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}