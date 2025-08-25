'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import VideoPlayer from '@/components/video/VideoPlayer';
import VideoInfo from '@/components/video/VideoInfo';
import VideoGrid from '@/components/video/VideoGrid';
import Comments from '@/components/comments/Comments';
import { getVideoById, mockVideos } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function WatchPage() {
  const params = useParams();
  const videoId = params.id as string;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const video = getVideoById(videoId);
  
  if (!video) {
    notFound();
  }

  // Get related videos (exclude current video)
  const relatedVideos = mockVideos.filter(v => v.id !== videoId).slice(0, 8);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header onSidebarToggle={toggleSidebar} />
      
      <div className="flex pt-14">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-6 p-6">
              {/* Video and Info Section */}
              <div className="flex-1 min-w-0">
                <div className="space-y-6">
                  {/* Video Player */}
                  <VideoPlayer
                    videoUrl={video.videoUrl}
                    title={video.title}
                  />
                  
                  {/* Video Info */}
                  <VideoInfo video={video} />
                  
                  {/* Comments */}
                  <Comments videoId={video.id} />
                </div>
              </div>
              
              {/* Related Videos Sidebar */}
              <div className="xl:w-96 xl:flex-shrink-0">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Related Videos
                  </h3>
                  
                  {/* Related Videos List */}
                  <div className="space-y-3">
                    {relatedVideos.map((relatedVideo) => (
                      <div key={relatedVideo.id} className="flex space-x-3 group cursor-pointer">
                        <div className="flex-shrink-0 relative">
                          <img
                            src={relatedVideo.thumbnail}
                            alt={relatedVideo.title}
                            className="w-40 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/36e0238a-1143-4519-ba2e-a18b5dadb2c6.png';
                            }}
                          />
                          <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                            {relatedVideo.duration}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2 text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                            {relatedVideo.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {relatedVideo.channel.name}
                          </p>
                          <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-500">
                            <span>{Math.floor(relatedVideo.views / 1000)}K views</span>
                            <span>•</span>
                            <span>2 days ago</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}