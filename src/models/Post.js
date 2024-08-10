import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String },
    content: { type: String, required: true },
    username: { type: String, required: true },
}, { timestamps: true });

// Check if the model already exists to prevent overwriting the model
export default mongoose.models.Post || mongoose.model("Post", postSchema);
