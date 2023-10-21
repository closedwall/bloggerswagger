// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-blue-800 text-white p-4 w-auto h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
      </div>
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-300">
            <i className="fas fa-home text-yellow-400"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-300">
            <i className="fas fa-edit text-yellow-400"></i>
            <span>My Posts</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-300">
            <i className="fas fa-cog text-yellow-400"></i>
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
