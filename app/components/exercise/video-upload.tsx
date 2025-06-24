"use client";

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, X, Play, Pause } from 'lucide-react';

interface VideoUploadProps {
  onVideosChange: (videos: {
    video1?: { file: File; title: string; url: string };
    video2?: { file: File; title: string; url: string };
    video3?: { file: File; title: string; url: string };
  }) => void;
  initialVideos?: {
    video1Url?: string;
    video2Url?: string;
    video3Url?: string;
    video1Title?: string;
    video2Title?: string;
    video3Title?: string;
  };
}

interface VideoData {
  file?: File;
  title: string;
  url: string;
  preview?: string;
}

export function VideoUpload({ onVideosChange, initialVideos }: VideoUploadProps) {
  const [videos, setVideos] = useState<{
    video1?: VideoData;
    video2?: VideoData;
    video3?: VideoData;
  }>({
    video1: initialVideos?.video1Url ? {
      title: initialVideos.video1Title || 'Primary Demonstration',
      url: initialVideos.video1Url,
    } : undefined,
    video2: initialVideos?.video2Url ? {
      title: initialVideos.video2Title || 'Alternative Angle',
      url: initialVideos.video2Url,
    } : undefined,
    video3: initialVideos?.video3Url ? {
      title: initialVideos.video3Title || 'Practice Along',
      url: initialVideos.video3Url,
    } : undefined,
  });

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const fileInputRefs = {
    video1: useRef<HTMLInputElement>(null),
    video2: useRef<HTMLInputElement>(null),
    video3: useRef<HTMLInputElement>(null),
  };

  const videoRefs = {
    video1: useRef<HTMLVideoElement>(null),
    video2: useRef<HTMLVideoElement>(null),
    video3: useRef<HTMLVideoElement>(null),
  };

  const handleFileSelect = (videoKey: 'video1' | 'video2' | 'video3', file: File) => {
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      const defaultTitles = {
        video1: 'Primary Demonstration',
        video2: 'Alternative Angle',
        video3: 'Practice Along',
      };

      const newVideoData = {
        file,
        title: videos[videoKey]?.title || defaultTitles[videoKey],
        url,
        preview: url,
      };

      const updatedVideos = {
        ...videos,
        [videoKey]: newVideoData,
      };

      setVideos(updatedVideos);
      onVideosChange(updatedVideos);
    }
  };

  const handleTitleChange = (videoKey: 'video1' | 'video2' | 'video3', title: string) => {
    const updatedVideos = {
      ...videos,
      [videoKey]: videos[videoKey] ? { ...videos[videoKey]!, title } : undefined,
    };

    setVideos(updatedVideos);
    onVideosChange(updatedVideos);
  };

  const removeVideo = (videoKey: 'video1' | 'video2' | 'video3') => {
    if (videos[videoKey]?.preview) {
      URL.revokeObjectURL(videos[videoKey]!.preview!);
    }

    const updatedVideos = { ...videos };
    delete updatedVideos[videoKey];

    setVideos(updatedVideos);
    onVideosChange(updatedVideos);
  };

  const togglePlayPause = (videoKey: 'video1' | 'video2' | 'video3') => {
    const videoElement = videoRefs[videoKey].current;
    if (!videoElement) return;

    if (playingVideo === videoKey) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      // Pause other videos
      Object.entries(videoRefs).forEach(([key, ref]) => {
        if (key !== videoKey && ref.current) {
          ref.current.pause();
        }
      });

      videoElement.play();
      setPlayingVideo(videoKey);
    }
  };

  const renderVideoSlot = (
    videoKey: 'video1' | 'video2' | 'video3',
    defaultTitle: string,
    description: string
  ) => {
    const video = videos[videoKey];

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">{defaultTitle}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {video ? (
            <div className="space-y-3">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  ref={videoRefs[videoKey]}
                  src={video.preview || video.url}
                  className="w-full h-full object-contain"
                  onEnded={() => setPlayingVideo(null)}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-black/50 hover:bg-black/70"
                    onClick={() => togglePlayPause(videoKey)}
                  >
                    {playingVideo === videoKey ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => removeVideo(videoKey)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Label htmlFor={`${videoKey}-title`}>Video Title</Label>
                <Input
                  id={`${videoKey}-title`}
                  value={video.title}
                  onChange={(e) => handleTitleChange(videoKey, e.target.value)}
                  placeholder={defaultTitle}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div
                className="aspect-video border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
                onClick={() => fileInputRefs[videoKey].current?.click()}
              >
                <Upload className="h-12 w-12 text-muted-foreground/50 mb-2" />
                <p className="text-sm text-muted-foreground">Click to upload video</p>
                <p className="text-xs text-muted-foreground/75">MP4, WebM, or MOV</p>
              </div>
              <input
                ref={fileInputRefs[videoKey]}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(videoKey, file);
                }}
              />
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Exercise Videos</h3>
        <p className="text-muted-foreground">
          Upload up to 3 videos to demonstrate this exercise from different angles or speeds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderVideoSlot(
          'video1',
          'Primary Demonstration',
          'Main instructional video showing the exercise'
        )}
        {renderVideoSlot(
          'video2',
          'Alternative Angle',
          'Different camera angle or slow-motion demonstration'
        )}
        {renderVideoSlot(
          'video3',
          'Practice Along',
          'Full-speed practice video for playing along'
        )}
      </div>
    </div>
  );
}
