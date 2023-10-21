import {NextResponse} from 'next/server';
import {getDataFromToken} from '@/backend/getDataFromToken';
import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel'
import jwt from 'jsonwebtoken';

connectDB();

export async function GET(request){
    try {
        const user_id = await getDataFromToken(request);
        // console.log(user_id);

        const user = await User.findById(user_id);
        console.log(user);

        return NextResponse.json({message:"welcome to me",user});

    } catch (error) {
        return NextResponse.json({error:error.error.message});
    }
}