'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import VideoGrid from '@/components/video/VideoGrid';
import { searchVideos } from '@/lib/data';
import { Video } from '@/types';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    if (query) {
      const results = searchVideos(query);
      setSearchResults(results);
    }
  }, [query]);

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
            {/* Search Results Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-medium text-gray-900 dark:text-white">
                  {searchResults.length > 0 
                    ? `About ${searchResults.length.toLocaleString()} results for "${query}"`
                    : query 
                      ? `No results found for "${query}"`
                      : 'Search Results'
                  }
                </h1>
                
                {searchResults.length > 0 && (
                  <div className="flex items-center space-x-4">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="upload_date">Upload date</option>
                      <option value="view_count">View count</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>
                )}
              </div>
              
              {/* Filters */}
              {query && (
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {['All', 'Videos', 'Channels', 'Playlists', 'Live'].map((filter) => (
                    <button
                      key={filter}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        filter === 'All'
                          ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 ? (
              <VideoGrid videos={searchResults} />
            ) : query ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-gray-400 dark:border-gray-500 rounded-full relative">
                    <div className="absolute top-3 right-0 w-3 h-0.5 bg-gray-400 dark:bg-gray-500 rotate-45 origin-left"></div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try different keywords or remove search filters
                </p>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-gray-400 dark:border-gray-500 rounded-full relative">
                    <div className="absolute top-3 right-0 w-3 h-0.5 bg-gray-400 dark:bg-gray-500 rotate-45 origin-left"></div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Start searching
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter keywords in the search bar to find videos
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}