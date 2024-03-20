import mongoose, { Schema } from "mongoose"

const bookingSchema = new Schema({

    date: {
        type: String,
        required:[true, "date is required"]
    },

    time: {
        type: String,
        required:[true, "date is required"]
    },

    serviceType: {
        type: String,
        required:[true, "Service Type is required."]
    },

    hour: {
        type: String,
        required:[true, "Service Hour is mandatory."]
    },

    fullName: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [1, "Name must be larger than 1 characters"],
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

    makeup: {
        type:Boolean
    },

    bts: {
        type:Boolean
    },

    extra: {
        type:Boolean
    },

    island: {
        type:Boolean
    },
})

const Booking= mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;