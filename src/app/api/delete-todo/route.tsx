import TodoModel from "@/model/todo/todoModel";
import { connectDb } from "@/utils/mongoose/dbConnect";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { isConnected } = await connectDb();
    const todoDetails = await req.json();

    console.log("delete todo", todoDetails);
    // const todoObjectId = new mongoose.Types.ObjectId(todoDetails._id);
    await TodoModel.deleteOne({ _id: todoDetails._id });
    return NextResponse.json({ isDeleted: true });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ isValid: false }, { status: 400 });
  }
}
