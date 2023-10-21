"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import GoogleLoginButton from './GoogleLoginButton';
import { useRouter } from 'next/navigation';
import axios from 'axios'

const Signup = () => {
    const router = useRouter();
    const [formData, setFromData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response =await axios.post('/api/users/signup',formData);
            console.log(response.data);
            router.push('/login')
        } catch (error) {
            console.log("Failed to signup",error.message);
        }
    }

    return (
        <div className='flex justify-center h-screen items-center '>
            <div className='flex justify-center flex-col w-3/4 space-y-4'>
                <h2 className='text-center font-bold text-2xl mb-6'>Signup</h2>
                <div className='flex flex-row space-x-10 justify-center'>
                    <div className="flex justify-center items-center">
                        <GoogleLoginButton />
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-1/3'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' value={formData.username} onChange={handleChange} className='border-2 border-gray-400 rounded-md drop-shadow-2xl h-10' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} className='border-2 border-gray-400 rounded-md drop-shadow-2xl h-10' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} className='border-2 border-gray-400 rounded-md drop-shadow-2xl h-10' />
                        </div>
                        <button type='submit' className='bg-blue-500 h-10 rounded-md'>Signup</button>
                    </form>
                </div>
                <div className='flex justify-center'>
                    <span>Already Registered? <span className='text-blue-400 font-bold'><Link href="/login" >Login</Link></span></span>
                </div>
            </div>
        </div>
    )
}

export default Signup