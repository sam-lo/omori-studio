import connectDB from "../../lib/mongodb";
import Booking from "../../models/booking";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
    const { fullName, phoneNumber, email, makeup, bts, extra, island} = await req.json();

    try {
        await connectDB();
        await Booking.create({ fullName, phoneNumber, email, makeup, bts, extra, island});

        return NextResponse.json({
            msg: ["Message sent successfully"],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json({ msg: ["Unable to send message."] });
        }
    }
}
