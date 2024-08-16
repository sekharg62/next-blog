import { NextResponse } from "next/server"
import connectToDB from "../../../utils/db.js"
import Post from "@/models/Post.js"

export const GET = async (request) => {
    const url = new URL(request.url)
    const username = url.searchParams.get("username");

    try {
        await connectToDB();
        console.log("db connected")
        const posts = await Post.find(username && {username})
        return new NextResponse(JSON.stringify(posts), { status: 200 });

    } catch (error) {
        console.log("Error is",error)
        return new NextResponse("Database Error", error);
    }

}

export const POST = async (request) => {
    const body = await request.json()

    const newPost  = new Post(body);


    try {
        await connectToDB();
        console.log("db connected")
        await newPost.save();
        return new NextResponse("Post created", { status: 201 });

    } catch (error) {
        console.log("Error is",error)
        return new NextResponse("Database Error", error);
    }


}