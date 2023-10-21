"use client"
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Model from './Model';


const Dashboard = () => {

  

  const blogModelView = () => {
    console.log("write blog")
  }

  return (
    <main className='flex flex-col h-screen'>
      <div className='flex flex-1 overflow-hidden'>
        <div className=' bg-gray-100 w-64'>
          <Sidebar />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex bg-gray-300 h-16 p-4'>
            <div className='w-full flex justify-end items-center'>
              <button className='bg-blue-400 p-2 rounded-md font-bold' onClick={blogModelView}> + Blog Post</button>
              <Model />
            </div>
          </div>
          <div className='flex flex-1 overflow-y-auto px-4'>
            <MainContent />
          </div>
        </div>
      </div>

    </main>
  );
};

export default Dashboard;
