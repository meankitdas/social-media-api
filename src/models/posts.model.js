import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    post: {
        type: String,
        ref: "User",
        caption: String,
        Image: String, 
        Video: String, 
        createdAt: {
            type: Date,
            default: Date.now()
        },
        like: {
            type: Number,
            default: 0
        },
        views: {
            type: Number,
            required: true,
            default: 0
        }
    }
})

export const Post = mongoose.model("Post",postSchema)