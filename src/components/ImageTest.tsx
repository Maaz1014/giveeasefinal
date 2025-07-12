'use client';

import { useState } from 'react';
import SafeImage from './SafeImage';

const testImages = [
  {
    name: 'Hero Image',
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'hero' as const
  },
  {
    name: 'Card Image 1',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    type: 'card' as const
  },
  {
    name: 'Avatar Image',
    url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    type: 'avatar' as const
  },
  {
    name: 'Problematic Image',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    type: 'avatar' as const
  }
];

export default function ImageTest() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Image Loading Test</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Image to Test:
          </label>
          <select 
            value={selectedImage}
            onChange={(e) => setSelectedImage(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {testImages.map((img, index) => (
              <option key={index} value={index}>
                {img.name} - {img.url.substring(0, 50)}...
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">SafeImage Component</h2>
            <SafeImage
              src={testImages[selectedImage].url}
              alt={testImages[selectedImage].name}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg"
              type={testImages[selectedImage].type}
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Regular Next.js Image</h2>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Regular Image component would go here</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg border">
          <h3 className="text-lg font-semibold mb-2">Current Image Details:</h3>
          <p><strong>Name:</strong> {testImages[selectedImage].name}</p>
          <p><strong>Type:</strong> {testImages[selectedImage].type}</p>
          <p><strong>URL:</strong> {testImages[selectedImage].url}</p>
          <p className="text-sm text-gray-600 mt-2">
            Check the browser console for loading logs and errors.
          </p>
        </div>
      </div>
    </div>
  );
} 