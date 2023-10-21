import { NextRequest,NextResponse } from "next/server";
import User from '@/models/userModel'
import connectDB from "@/dbConfig/dbConfig";
import bcryptjs from 'bcryptjs'

connectDB();

export async function POST(request){
    try {
        console.log("db connected signup")
        const reqBody = await request.json();
        const {username,email,password} = reqBody;
        // console.log(reqBody);
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error:"User already exist"},{status:400})
        }
        const salt = await bcryptjs.genSalt(10);
        const hasedPassword = await bcryptjs.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password:hasedPassword
        });

        const savedUser = await newUser.save();

        console.log(savedUser);

        return NextResponse.json({
            message:"nice to be here in signup endpoint",
            success:true,
            savedUser
        })
    } catch (error) {
        console.log(error.message);
    }
}