import { NextRequest,NextResponse } from "next/server";
import connectDB from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import axios from "axios";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";


connectDB();

export async function POST(request){
    try {
        const reqBody = await request.json();
        const {username,password} = reqBody;
        // console.log(reqBody);

        const user = await User.findOne({username:username});
        console.log(user);
        if(!user){
            return NextResponse.json({error:"no user found"},{status:404})
        }
        
        //validate password
        const validPassword = await bcryptjs.compare(password, user.password);

        if(!validPassword){
            return NextResponse.json({error:"Password is not correct",},{status:401});
        }
        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email,
        }

        const token = jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'1d'});
        const response = NextResponse.json({
            message:"Login Success and jwt stored properly",
            success:true
        })
        response.cookies.set("token",token,{httpOnly:true});

        console.log("db connected")
        return response;
    } catch (error) {
        console.log(error.message);
    }
}