import { NextResponse } from "next/server"
import connectToDB from "../../../../utils/db"
import Post from "@/models/Post.js"

export const GET = async (request,{params}) => {
    const {id} = params

    try {
        await connectToDB();
        console.log("db connected")
        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post), { status: 200 });

    } catch (error) {
        console.log("Error is",error)
        return new NextResponse("Database Error", error);
    }


} 