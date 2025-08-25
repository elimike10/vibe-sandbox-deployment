import { Video, Channel, Comment } from '@/types';

export const mockChannels: Channel[] = [
  {
    id: '1',
    name: 'TechReviews',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0ff6f7c-ee93-424f-a0b7-8436ff3e450b.png',
    subscribers: 1200000,
    verified: true,
    description: 'Latest technology reviews and unboxings',
    bannerImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53244e20-1bb4-4a7d-af8f-f4a1d2e1e8d5.png',
    videoCount: 234,
  },
  {
    id: '2',
    name: 'Gaming Central',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/01ddc37f-33bf-48bf-bfb3-0675e0ae8eb0.png',
    subscribers: 850000,
    verified: true,
    description: 'Gaming reviews, walkthroughs, and live streams',
    bannerImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9eca9b47-a0c3-447a-a868-6eca60ae21ec.png',
    videoCount: 567,
  },
  {
    id: '3',
    name: 'Cooking Masters',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0f9d615e-e990-4330-93f0-8e0078a79f2c.png',
    subscribers: 2100000,
    verified: true,
    description: 'Professional cooking tutorials and recipes',
    bannerImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/439da51a-bf34-480e-8f66-991f0843a4e6.png',
    videoCount: 189,
  },
  {
    id: '4',
    name: 'Travel Adventures',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbbc8c5f-4abf-4a2a-b6fc-7244f0e51ebb.png',
    subscribers: 950000,
    verified: false,
    description: 'Exploring the world one destination at a time',
    bannerImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a409836-50c1-466b-9df7-4d5614bc35cd.png',
    videoCount: 321,
  },
  {
    id: '5',
    name: 'Music Vibes',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bbef6e04-7054-4361-b0cf-919b34863206.png',
    subscribers: 3200000,
    verified: true,
    description: 'Latest music releases and artist interviews',
    bannerImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4375855-ecca-41e4-acb2-d895de578042.png',
    videoCount: 892,
  },
];

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max Review - The Ultimate Camera Test',
    description: 'Complete review of the iPhone 15 Pro Max with extensive camera testing, performance benchmarks, and real-world usage scenarios.',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e73f5d1d-bf7c-47bb-98ab-3fa67e31bf37.png',
    duration: '12:34',
    views: 1456789,
    uploadDate: '2024-01-15',
    channel: mockChannels[0],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e8ca6829-3ec9-456d-b416-7a0c24981eb9.png',
    category: 'Technology',
    tags: ['iphone', 'apple', 'review', 'camera', 'tech'],
  },
  {
    id: '2',
    title: 'Cyberpunk 2077 Complete Walkthrough - Part 1',
    description: 'Join us for an epic journey through Night City in this complete walkthrough of Cyberpunk 2077. No spoilers for the first hour!',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/433b8b0a-6597-4438-9c63-b3664fcd800a.png',
    duration: '45:22',
    views: 892456,
    uploadDate: '2024-01-14',
    channel: mockChannels[1],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3d52ea9e-a239-447f-bcda-099ec5595122.png',
    category: 'Gaming',
    tags: ['cyberpunk', 'walkthrough', 'gaming', 'rpg'],
  },
  {
    id: '3',
    title: 'Perfect Homemade Pasta in 30 Minutes',
    description: 'Learn how to make restaurant-quality pasta from scratch using simple ingredients. Perfect for beginners!',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce670321-40d9-4dd8-a2ae-448c13bdc269.png',
    duration: '8:15',
    views: 2345678,
    uploadDate: '2024-01-13',
    channel: mockChannels[2],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9fd9c99-6663-4d97-90d9-f90d99175078.png',
    category: 'Food',
    tags: ['cooking', 'pasta', 'recipe', 'homemade'],
  },
  {
    id: '4',
    title: 'Hidden Gems of Tokyo - Street Food Tour',
    description: 'Discover the best street food spots in Tokyo that only locals know about. Amazing flavors and incredible prices!',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f940d4e-f2a1-40f0-812d-cb5d250b7bfe.png',
    duration: '18:47',
    views: 567890,
    uploadDate: '2024-01-12',
    channel: mockChannels[3],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97ab68f5-3635-4b9d-b0d2-c673d8b1db62.png',
    category: 'Travel',
    tags: ['tokyo', 'japan', 'street food', 'travel'],
  },
  {
    id: '5',
    title: 'Top 10 Albums of 2024 - Music Review',
    description: 'Comprehensive review of the best albums released this year across all genres. From indie rock to electronic music.',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/623b800a-e50e-4b75-8eed-8858652dbfb4.png',
    duration: '22:30',
    views: 1234567,
    uploadDate: '2024-01-11',
    channel: mockChannels[4],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c0750ac-bb6c-47ca-96b5-c96a6bcec9fa.png',
    category: 'Music',
    tags: ['music', 'albums', '2024', 'review'],
  },
  {
    id: '6',
    title: 'Building a Gaming PC for $1000 - Complete Guide',
    description: 'Step-by-step guide to building a powerful gaming PC on a budget. Includes all components, assembly, and performance testing.',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f04fc3ec-c04d-4d4b-baa0-2d18e2984c43.png',
    duration: '35:18',
    views: 978654,
    uploadDate: '2024-01-10',
    channel: mockChannels[0],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c8c18a95-305a-403f-b4d1-73b78aa84e3e.png',
    category: 'Technology',
    tags: ['pc build', 'gaming', 'budget', 'guide'],
  },
  {
    id: '7',
    title: 'Elden Ring Boss Guide - Malenia Strategy',
    description: 'Detailed strategy guide for defeating Malenia, one of the hardest bosses in Elden Ring. Multiple tactics and build suggestions.',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0a011df-ef80-4765-b0b2-af66ee32b2d8.png',
    duration: '15:42',
    views: 1567890,
    uploadDate: '2024-01-09',
    channel: mockChannels[1],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/227c894a-67d4-42b0-9bdd-d3c81b1560d7.png',
    category: 'Gaming',
    tags: ['elden ring', 'boss guide', 'malenia', 'strategy'],
  },
  {
    id: '8',
    title: 'Mediterranean Diet Meal Prep for the Week',
    description: 'Prepare a full week of healthy Mediterranean meals in just 2 hours. Includes shopping list and storage tips.',
    thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67ac6828-8742-4bb9-837f-b4c5d3abf1a2.png',
    duration: '16:28',
    views: 456789,
    uploadDate: '2024-01-08',
    channel: mockChannels[2],
    videoUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bcc3c83f-4f3b-44ca-929b-b431e8ca023b.png',
    category: 'Food',
    tags: ['meal prep', 'mediterranean', 'healthy', 'weekly'],
  },
];

export const mockComments: Comment[] = [
  {
    id: '1',
    user: {
      name: 'TechEnthusiast42',
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d20ab42-e3ef-4200-a531-e65fa27734d8.png',
    },
    content: 'Amazing review! The camera quality comparison was exactly what I needed to see.',
    timestamp: '2 hours ago',
    likes: 156,
    replies: [
      {
        id: '1-1',
        user: {
          name: 'PhotoPro',
          avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/110da7f1-5443-482b-844b-9ef50ddb57cc.png',
        },
        content: 'Totally agree! The low light performance is incredible.',
        timestamp: '1 hour ago',
        likes: 23,
      },
    ],
  },
  {
    id: '2',
    user: {
      name: 'GamerGirl2024',
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8fd6114b-38f1-4e5b-88c4-abfbc7a1a124.png',
    },
    content: 'This walkthrough is so helpful! Thanks for the no-spoiler approach.',
    timestamp: '4 hours ago',
    likes: 89,
  },
  {
    id: '3',
    user: {
      name: 'FoodieLife',
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0c3ecf2-78eb-4e1c-a801-d6f58bc3e68d.png',
    },
    content: 'Made this pasta last night and it was incredible! Family loved it.',
    timestamp: '1 day ago',
    likes: 234,
  },
];

export const getVideoById = (id: string): Video | undefined => {
  return mockVideos.find(video => video.id === id);
};

export const getChannelById = (id: string): Channel | undefined => {
  return mockChannels.find(channel => channel.id === id);
};

export const getVideosByChannel = (channelId: string): Video[] => {
  return mockVideos.filter(video => video.channel.id === channelId);
};

export const searchVideos = (query: string): Video[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockVideos.filter(video => 
    video.title.toLowerCase().includes(lowercaseQuery) ||
    video.description.toLowerCase().includes(lowercaseQuery) ||
    video.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    video.channel.name.toLowerCase().includes(lowercaseQuery)
  );
};

export const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M views`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K views`;
  }
  return `${views} views`;
};

export const formatDuration = (duration: string): string => {
  return duration;
};

export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return '1 day ago';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};