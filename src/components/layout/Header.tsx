'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSidebarToggle: () => void;
}

export default function Header({ onSidebarToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left section - Logo and hamburger */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSidebarToggle}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className="w-4 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
              <div className="w-4 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"></div>
              <div className="w-4 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
            </div>
          </Button>
          <Link href="/" className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">YouTube</span>
          </Link>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-r-none border-r-0 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              className="rounded-l-none px-6 border-l-0 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600"
            >
              <div className="w-5 h-5 border-2 border-gray-500 dark:border-gray-400 rounded-full relative">
                <div className="absolute top-3 right-0 w-2 h-0.5 bg-gray-500 dark:bg-gray-400 rotate-45 origin-left"></div>
              </div>
            </Button>
          </form>
        </div>

        {/* Right section - User actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <div className="w-6 h-6 border-2 border-gray-600 dark:border-gray-300 rounded-sm relative">
              <div className="absolute top-1 left-1 w-2 h-2 border border-gray-600 dark:border-gray-300"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-gray-600 dark:bg-gray-300"></div>
              <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-gray-600 dark:bg-gray-300"></div>
            </div>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <div className="w-6 h-6 relative">
              <div className="w-5 h-3 border-2 border-gray-600 dark:border-gray-300 rounded-t-sm"></div>
              <div className="w-5 h-2 bg-gray-600 dark:bg-gray-300 rounded-b-sm mt-0.5"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </Button>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
            U
          </div>
        </div>
      </div>
    </header>
  );
}