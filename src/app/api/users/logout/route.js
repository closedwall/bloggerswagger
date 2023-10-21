import {NextResponse} from 'next/server';

export async function GET(request){
    try {
        const response = NextResponse.json({
            message:"Logout Successful",
            success:true
        });
        response.cookies.set('token',"",{httpOnly:true, expires:new Date(0)});
        return response;
    } catch (error) {
        console.log("Failed to logout");
    }
}