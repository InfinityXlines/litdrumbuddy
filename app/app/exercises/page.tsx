"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Play } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  description: string;
  instructions: string;
  difficulty: number;
  suggestedBpm: number;
  timeSignature: string;
  categoryId: string;
  video1Url?: string;
  video2Url?: string;
  video3Url?: string;
  video1Title?: string;
  video2Title?: string;
  video3Title?: string;
  createdAt: string;
}

// Mock data demonstrating 3-video upload functionality
const mockExercises: Exercise[] = [
  {
    id: '1',
    name: 'Basic Rock Beat',
    description: 'Fundamental rock drumming pattern',
    instructions: 'Play kick on 1 and 3, snare on 2 and 4, hi-hat on all quarter notes',
    difficulty: 2,
    suggestedBpm: 120,
    timeSignature: '4/4',
    categoryId: 'basic',
    video1Url: 'https://example.com/video1.mp4',
    video1Title: 'Basic Rock Beat - Main Demo',
    video2Url: 'https://example.com/video2.mp4',
    video2Title: 'Basic Rock Beat - Slow Motion',
    video3Url: 'https://example.com/video3.mp4',
    video3Title: 'Basic Rock Beat - Play Along',
    createdAt: '2025-06-23T10:00:00Z',
  },
  {
    id: '2',
    name: 'Linear Fill Exercise',
    description: 'Advanced linear drumming patterns',
    instructions: 'Practice single-stroke linear patterns around the kit',
    difficulty: 4,
    suggestedBpm: 100,
    timeSignature: '4/4',
    categoryId: 'advanced',
    video1Url: 'https://example.com/linear1.mp4',
    video1Title: 'Linear Fill - Demonstration',
    video2Url: 'https://example.com/linear2.mp4',
    video2Title: 'Linear Fill - Breakdown',
    createdAt: '2025-06-23T11:00:00Z',
  },
];

export default function ExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>(mockExercises);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1: return 'text-green-600';
      case 2: return 'text-blue-600';
      case 3: return 'text-yellow-600';
      case 4: return 'text-orange-600';
      case 5: return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getDifficultyText = (difficulty: number) => {
    switch (difficulty) {
      case 1: return 'Beginner';
      case 2: return 'Easy';
      case 3: return 'Intermediate';
      case 4: return 'Advanced';
      case 5: return 'Expert';
      default: return 'Unknown';
    }
  };

  const getVideoCount = (exercise: Exercise) => {
    let count = 0;
    if (exercise.video1Url) count++;
    if (exercise.video2Url) count++;
    if (exercise.video3Url) count++;
    return count;
  };

  if (selectedExercise) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => setSelectedExercise(null)}
          >
            ← Back to Exercises
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{selectedExercise.name}</h1>
            <p className="text-muted-foreground mb-4">{selectedExercise.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className={`font-medium ${getDifficultyColor(selectedExercise.difficulty)}`}>
                {getDifficultyText(selectedExercise.difficulty)}
              </span>
              <span>BPM: {selectedExercise.suggestedBpm}</span>
              <span>Time: {selectedExercise.timeSignature}</span>
              <span>{getVideoCount(selectedExercise)} video(s)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{selectedExercise.instructions}</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Exercise Videos ({getVideoCount(selectedExercise)})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedExercise.video1Url && (
                    <div>
                      <h4 className="font-medium mb-2">{selectedExercise.video1Title || 'Primary Demonstration'}</h4>
                      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                        <p className="text-white">Video Player: {selectedExercise.video1Title}</p>
                      </div>
                    </div>
                  )}
                  {selectedExercise.video2Url && (
                    <div>
                      <h4 className="font-medium mb-2">{selectedExercise.video2Title || 'Alternative Angle'}</h4>
                      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                        <p className="text-white">Video Player: {selectedExercise.video2Title}</p>
                      </div>
                    </div>
                  )}
                  {selectedExercise.video3Url && (
                    <div>
                      <h4 className="font-medium mb-2">{selectedExercise.video3Title || 'Practice Along'}</h4>
                      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                        <p className="text-white">Video Player: {selectedExercise.video3Title}</p>
                      </div>
                    </div>
                  )}
                  {getVideoCount(selectedExercise) === 0 && (
                    <p className="text-muted-foreground">No videos available for this exercise</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Drum Exercises</h1>
          <p className="text-muted-foreground">
            Manage your drum exercises with 3-video upload functionality
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Exercise
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <Card key={exercise.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{exercise.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exercise.description}
                  </p>
                </div>
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className={`font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                    {getDifficultyText(exercise.difficulty)}
                  </span>
                  <span>{exercise.suggestedBpm} BPM</span>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{exercise.timeSignature}</span>
                  <span>{getVideoCount(exercise)} video(s)</span>
                </div>

                <Button
                  className="w-full"
                  onClick={() => setSelectedExercise(exercise)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  View Exercise
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {exercises.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No exercises found</p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Exercise
          </Button>
        </div>
      )}
    </div>
  );
}
