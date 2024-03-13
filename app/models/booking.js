import mongoose, { Schema } from "mongoose"

const bookingSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },

    phoneNumber: {
        type: Number,
        required: [true, "Phone Number is required."],
        trim: true,
        length: [8, "Name must be larger than 2 characters"],
    },

    email: {
        type: String,
        required: [true, "Email is required."]
    },
})

const Booking= mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;