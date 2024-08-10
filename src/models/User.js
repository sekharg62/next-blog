import mongoose from "mongoose";
// User = new mongoose
const userSchema = new mongoose.Schema({
    name: {type: String, required: true,unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
},{timestamps:true})

//const User = new mongoose.model("user",userSchema);
//export default mongoose.model("User",userSchema)
//export default User;

export const User = new mongoose.model("User", userSchema)
