'use client';

import { Video } from '@/types';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
  className?: string;
}

export default function VideoGrid({ videos, className = '' }: VideoGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}