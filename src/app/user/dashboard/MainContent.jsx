// MainContent.js
import React from 'react';
import Card from '@/frontend/Card'

const MainContent = () => {
  return (
    <main className="w-3/4 p-8">
        <div className="text-2xl font-semibold mb-4">Welcome, User!</div>
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Your Recent Blog Posts</h3>
          <ul className="space-y-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </main>
  );
};

export default MainContent;
