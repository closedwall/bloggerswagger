"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Register from './Register';
import Avatar from './Avatar';


const Navigation = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [user,setUser] = useState({});
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const fetchUser =async()=>{
    try {
      const response = await axios.get("/api/users/me");
      console.log(response.data);
      setUser(response.data.user);
    } catch (error) {
      console.log("unable to fetch me");
    }
  }

  useEffect(()=>{
    fetchUser();
  },[user])

  return (
    <header className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-2xl font-semibold">BloggerSwagger</h2>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="pl-8 pr-2 py-2 rounded-full border border-white focus:outline-none focus:border-blue-300"
            />
            <i className="absolute left-3 top-2 text-white fas fa-search"></i>
          </div>

          {
            user?<Avatar />:<Register />
          }
        </div>
      </div>
    </header>
  );
};

export default Navigation;
