import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({

    username: {
        type: String,
        required:[true, "Username is required"]
    },

    password: {
        type: String,
        required:[true, "Password is required"]
    },

    email: {
        type: String,
        required:[true, "Email is required."]
    },

    fullName: {
        type: String,
        required:[true, "Full Name is mandatory."]
    },

    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required."],
    },

})

const User= mongoose.models.Booking || mongoose.model("User", userSchema);
export default User;