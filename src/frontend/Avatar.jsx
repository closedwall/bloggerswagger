"use client"

import axios from "axios";
import { useRouter } from "next/navigation";

const Avatar =()=>{
    const router = useRouter();
    const handleLogout =() =>{
        try {
            const response = axios.get("/api/users/logout");
            console.log("successfully logout", response.data);
            // window.location.reload(true);
        } catch (error) {
            console.log('sorry not able to logout')
        }
    }
    return (
        <div className="bg-white flex p-2 rounded-full text-blue-400">
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Avatar;