import {NextRequest} from 'next/server';
import jwt from 'jsonwebtoken';

export const getDataFromToken=(response)=>{
    try {
        const token = response.cookies.get('token')?.value ||"";
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        return decodedToken.id;
    } catch (error) {
        console.log("Unable to get token");
    }
}