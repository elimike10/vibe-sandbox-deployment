export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploadDate: string;
  channel: Channel;
  videoUrl: string;
  category: string;
  tags: string[];
}

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: number;
  verified: boolean;
  description?: string;
  bannerImage?: string;
  videoCount?: number;
}

export interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoCount: number;
  videos: Video[];
}

export interface SearchResult {
  videos: Video[];
  channels: Channel[];
  playlists: Playlist[];
}

export type ViewMode = 'grid' | 'list';
export type SortOption = 'relevance' | 'upload_date' | 'view_count' | 'rating';