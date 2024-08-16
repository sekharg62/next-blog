import { NextResponse } from "next/server"
import connectToDB from "../../../utils/db.js"
import Post from "@/models/Post.js"

export const GET = async (request) => {
    

    try {
        await connectToDB();
        console.log("db connected")
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), { status: 200 });

    } catch (error) {
        console.log("Error is",error)
        return new NextResponse("Database Error", error);
    }


}