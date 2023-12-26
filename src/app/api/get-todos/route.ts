import TodoModel from "@/model/todo/todoModel";
import { connectDb } from "@/utils/mongoose/dbConnect";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("get request ==========================================");
    const { isConnected } = await connectDb();
    if (!isConnected) return console.log("not connected");
    console.log("mongoose models", mongoose.models);

    const allTodos = await TodoModel.find({});
    return NextResponse.json({ todos: allTodos });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ isValid: false }, { status: 400 });
  }
}
