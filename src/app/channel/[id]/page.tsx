'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import VideoGrid from '@/components/video/VideoGrid';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getChannelById, getVideosByChannel, formatViews } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ChannelPage() {
  const params = useParams();
  const channelId = params.id as string;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const channel = getChannelById(channelId);
  const channelVideos = getVideosByChannel(channelId);
  
  if (!channel) {
    notFound();
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header onSidebarToggle={toggleSidebar} />
      
      <div className="flex pt-14">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          <div className="max-w-6xl mx-auto">
            {/* Channel Banner */}
            {channel.bannerImage && (
              <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
                <img
                  src={channel.bannerImage}
                  alt={`${channel.name} banner`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66416c8d-c12a-45cc-9a8b-cdc63174dd55.png';
                  }}
                />
              </div>
            )}
            
            {/* Channel Info */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-4 md:space-y-0">
                <img
                  src={channel.avatar}
                  alt={channel.name}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43bd100a-99e3-4110-80ea-c13327a991e0.png';
                  }}
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {channel.name}
                        </h1>
                        {channel.verified && (
                          <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span>{formatViews(channel.subscribers).replace('views', 'subscribers')}</span>
                        <span>•</span>
                        <span>{channel.videoCount || channelVideos.length} videos</span>
                      </div>
                      
                      {channel.description && (
                        <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
                          {channel.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3">
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
                      
                      <Button variant="outline" size="icon" className="rounded-full">
                        <div className="w-5 h-5 border border-gray-600 dark:border-gray-400 rounded-full relative">
                          <div className="absolute top-1 left-1 right-1 bottom-1 border border-gray-600 dark:border-gray-400 rounded-full"></div>
                          <div className="absolute top-2 left-2 w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Channel Content Tabs */}
            <div className="border-t border-gray-200 dark:border-gray-700">
              <Tabs defaultValue="videos" className="w-full">
                <TabsList className="h-12 bg-transparent border-b border-gray-200 dark:border-gray-700 rounded-none w-full justify-start px-6">
                  <TabsTrigger 
                    value="videos" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-white rounded-none"
                  >
                    Videos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="shorts" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-white rounded-none"
                  >
                    Shorts
                  </TabsTrigger>
                  <TabsTrigger 
                    value="playlists" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-white rounded-none"
                  >
                    Playlists
                  </TabsTrigger>
                  <TabsTrigger 
                    value="community" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-white rounded-none"
                  >
                    Community
                  </TabsTrigger>
                  <TabsTrigger 
                    value="about" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gray-900 dark:data-[state=active]:border-white rounded-none"
                  >
                    About
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="videos" className="p-6">
                  {channelVideos.length > 0 ? (
                    <VideoGrid videos={channelVideos} />
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <div className="w-12 h-8 border-2 border-gray-400 dark:border-gray-500 rounded relative">
                          <div className="w-0 h-0 border-l-[8px] border-l-gray-400 dark:border-l-gray-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent absolute top-1 left-2"></div>
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        No videos yet
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        This channel hasn't uploaded any videos yet.
                      </p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="shorts" className="p-6">
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No Shorts yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This channel hasn't uploaded any Shorts yet.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="playlists" className="p-6">
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No playlists yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This channel hasn't created any playlists yet.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="community" className="p-6">
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No community posts yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This channel hasn't made any community posts yet.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="about" className="p-6">
                  <div className="max-w-4xl space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Description</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {channel.description || 'No description available.'}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Stats</h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <p>Joined: Jan 1, 2020</p>
                          <p>{formatViews(channel.subscribers).replace('views', 'subscribers')}</p>
                          <p>{channel.videoCount || channelVideos.length} videos</p>
                          <p>Total views: {formatViews(channelVideos.reduce((sum, video) => sum + video.views, 0))}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Links</h4>
                        <div className="space-y-1 text-sm">
                          <a href="#" className="text-blue-600 hover:text-blue-700 block">Website</a>
                          <a href="#" className="text-blue-600 hover:text-blue-700 block">Twitter</a>
                          <a href="#" className="text-blue-600 hover:text-blue-700 block">Instagram</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}