'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { mockChannels } from '@/lib/data';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('home');

  const mainMenuItems = [
    { id: 'home', label: 'Home', href: '/', icon: '🏠' },
    { id: 'shorts', label: 'Shorts', href: '/shorts', icon: '⚡' },
    { id: 'subscriptions', label: 'Subscriptions', href: '/subscriptions', icon: '📺' },
  ];

  const exploreItems = [
    { id: 'trending', label: 'Trending', href: '/trending', icon: '🔥' },
    { id: 'music', label: 'Music', href: '/music', icon: '🎵' },
    { id: 'gaming', label: 'Gaming', href: '/gaming', icon: '🎮' },
    { id: 'news', label: 'News', href: '/news', icon: '📰' },
    { id: 'sports', label: 'Sports', href: '/sports', icon: '⚽' },
    { id: 'learning', label: 'Learning', href: '/learning', icon: '💡' },
  ];

  const libraryItems = [
    { id: 'library', label: 'Library', href: '/library', icon: '📚' },
    { id: 'history', label: 'History', href: '/history', icon: '🕒' },
    { id: 'watch-later', label: 'Watch Later', href: '/watch-later', icon: '⏰' },
    { id: 'liked', label: 'Liked Videos', href: '/liked', icon: '👍' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:h-[calc(100vh-3.5rem)] w-64`}
      >
        <div className="p-3">
          {/* Main Navigation */}
          <nav className="space-y-1">
            {mainMenuItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <Button
                  variant={activeSection === item.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start space-x-3 h-10"
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </nav>

          <Separator className="my-3" />

          {/* Explore Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 px-3">
              Explore
            </h3>
            <nav className="space-y-1">
              {exploreItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <Button
                    variant={activeSection === item.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start space-x-3 h-10"
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          <Separator className="my-3" />

          {/* Library Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 px-3">
              Library
            </h3>
            <nav className="space-y-1">
              {libraryItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <Button
                    variant={activeSection === item.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start space-x-3 h-10"
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          <Separator className="my-3" />

          {/* Subscriptions */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 px-3">
              Subscriptions
            </h3>
            <nav className="space-y-1">
              {mockChannels.slice(0, 5).map((channel) => (
                <Link key={channel.id} href={`/channel/${channel.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start space-x-3 h-10"
                  >
                    <img
                      src={channel.avatar}
                      alt={channel.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="truncate">{channel.name}</span>
                    {channel.verified && (
                      <div className="w-3 h-3 bg-gray-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    )}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          <Separator className="my-3" />

          {/* Settings and Info */}
          <div>
            <nav className="space-y-1">
              <Button variant="ghost" className="w-full justify-start space-x-3 h-10">
                <span className="text-lg">⚙️</span>
                <span>Settings</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start space-x-3 h-10">
                <span className="text-lg">❓</span>
                <span>Help</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start space-x-3 h-10">
                <span className="text-lg">💬</span>
                <span>Send feedback</span>
              </Button>
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-6 px-3 pb-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <p>About Press Copyright</p>
              <p>Contact us Creators</p>
              <p>Advertise Developers</p>
              <p className="pt-2">Terms Privacy Policy & Safety</p>
              <p>How YouTube works</p>
              <p>Test new features</p>
              <p className="pt-2 text-gray-400">© 2024 Google LLC</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}