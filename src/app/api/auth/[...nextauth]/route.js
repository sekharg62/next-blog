import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"; // Fix the import here
import bcrypt from "bcryptjs"; // Ensure bcrypt is imported
import connectToDB from "@/utils/db";
import User from "@/models/User";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: "credentials", // Ensure this matches the id used in the app
            name: "Credentials",
            async authorize(credentials) {
                await connectToDB(); // Ensure DB connection is established
                try {
                    // Correct the syntax for finding a user
                    const user = await User.findOne({ email: credentials.email });

                    if (user) {
                        // Check password
                        const isPassCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPassCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!"); 
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    // Handle and throw the error in a better way
                    throw new Error(error.message || "Something went wrong!");
                }
            },
        }),
    ],
    pages: {
        error: "/dashboard/login", // Redirect to login page on error
    },
});

export { handler as GET, handler as POST };
