"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Plus, BarChart3, Clock, Settings } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4">LitDrumBuddy</h1>
          <p className="text-xl">Your comprehensive drum practice companion</p>
          <p className="text-lg mt-2 text-purple-200">✨ Now with 3-Video Upload Functionality Restored! ✨</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="h-6 w-6 mr-2" />
                Exercises with 3-Video Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Create and practice drum exercises with up to 3 videos per exercise: demonstration, alternative angle, and practice-along</p>
              <Link href="/exercises">
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100">
                  View Exercises
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Practice Timer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Track your practice sessions with built-in timer and metronome</p>
              <Button className="w-full" variant="outline">
                Start Practice
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-6 w-6" />
                Progress Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Monitor your improvement with detailed analytics and charts</p>
              <Button className="w-full" variant="outline">
                View Progress
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-8">Restored 3-Video Upload Feature</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">🎥</div>
              <h3 className="text-xl font-semibold">Primary Demonstration</h3>
              <p>Main instructional video showing the exercise technique and form</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">📹</div>
              <h3 className="text-xl font-semibold">Alternative Angle</h3>
              <p>Different camera angle or slow-motion demonstration for detailed learning</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🎵</div>
              <h3 className="text-xl font-semibold">Practice Along</h3>
              <p>Full-speed practice video for playing along and building muscle memory</p>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-8">Additional Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">🥁</div>
              <h3 className="text-xl font-semibold">Custom Exercises</h3>
              <p>Create and organize personalized drum exercises with categories</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🎵</div>
              <h3 className="text-xl font-semibold">Metronome Integration</h3>
              <p>Built-in metronome with adjustable BPM for practice sessions</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">⏱️</div>
              <h3 className="text-xl font-semibold">Practice Timer</h3>
              <p>Track practice session duration and maintain consistent habits</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">📊</div>
              <h3 className="text-xl font-semibold">Progress Tracking</h3>
              <p>Monitor improvement over time with detailed analytics</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🔄</div>
              <h3 className="text-xl font-semibold">Cross-Device Sync</h3>
              <p>Access your practice data across multiple devices</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-xl font-semibold">Difficulty Levels</h3>
              <p>Exercises categorized from beginner to expert levels</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/exercises">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                <Plus className="h-5 w-5 mr-2" />
                Create Exercise with Videos
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900">
              <Play className="h-5 w-5 mr-2" />
              Start Practice
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
