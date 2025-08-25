'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  className?: string;
}

export default function VideoPlayer({ videoUrl, title, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = (value[0] / 100) * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = value[0] / 100;
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`relative bg-black rounded-lg overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full aspect-video"
        onClick={togglePlayPause}
        poster="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e119c55-3190-4c54-9cbc-581fdb017d07.png"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon"
            variant="secondary"
            className="w-16 h-16 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100"
            onClick={togglePlayPause}
          >
            <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </Button>
        </div>
      )}

      {/* Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <Slider
            value={[duration ? (currentTime / duration) * 100 : 0]}
            onValueChange={handleSeek}
            max={100}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause */}
            <Button size="icon" variant="ghost" onClick={togglePlayPause} className="text-white hover:bg-white hover:bg-opacity-20">
              {isPlaying ? (
                <div className="flex space-x-1">
                  <div className="w-1.5 h-4 bg-white"></div>
                  <div className="w-1.5 h-4 bg-white"></div>
                </div>
              ) : (
                <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
              )}
            </Button>

            {/* Volume */}
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost" onClick={toggleMute} className="text-white hover:bg-white hover:bg-opacity-20">
                {isMuted || volume === 0 ? (
                  <div className="w-4 h-3 border-2 border-white border-r-0 relative">
                    <div className="absolute -right-1 top-0 w-2 h-3 border-t-2 border-b-2 border-white"></div>
                    <div className="absolute -right-2 -top-1 w-3 h-1 border-t border-white transform rotate-45"></div>
                    <div className="absolute -right-2 top-3 w-3 h-1 border-t border-white transform -rotate-45"></div>
                  </div>
                ) : (
                  <div className="w-4 h-3 border-2 border-white border-r-0 relative">
                    <div className="absolute -right-1 top-0 w-2 h-3 border-t-2 border-b-2 border-white"></div>
                    <div className="absolute -right-2 -top-1 w-3 h-1 border-t border-white transform rotate-45"></div>
                    <div className="absolute -right-2 top-3 w-3 h-1 border-t border-white transform -rotate-45"></div>
                  </div>
                )}
              </Button>
              <div className="w-20">
                <Slider
                  value={[isMuted ? 0 : volume * 100]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                />
              </div>
            </div>

            {/* Time */}
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Settings */}
            <Button size="icon" variant="ghost" className="text-white hover:bg-white hover:bg-opacity-20">
              <div className="w-5 h-5 border border-white rounded-full relative">
                <div className="absolute top-1 left-1 right-1 bottom-1 border border-white rounded-full"></div>
                <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </Button>

            {/* Fullscreen */}
            <Button size="icon" variant="ghost" onClick={toggleFullscreen} className="text-white hover:bg-white hover:bg-opacity-20">
              <div className="w-4 h-4 border-2 border-white relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}