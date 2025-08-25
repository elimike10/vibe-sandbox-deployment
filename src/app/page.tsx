'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import VideoGrid from '@/components/video/VideoGrid';
import { mockVideos } from '@/lib/data';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <div className="p-6">
            {/* Category Chips */}
            <div className="mb-6 flex space-x-3 overflow-x-auto pb-2">
              {['All', 'Gaming', 'Music', 'Technology', 'Food', 'Travel', 'Sports', 'News'].map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    category === 'All'
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Video Grid */}
            <VideoGrid videos={mockVideos} />
          </div>
        </main>
      </div>
    </div>
  );
}