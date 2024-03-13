import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F35481394342%2Fphotos%2F10157950820179343%2F&psig=AOvVaw2uD57lvg25Ab9FhjWmAeEl&ust=1710327536741000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOiej_TI7oQDFQAAAAAdAAAAABAE"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
