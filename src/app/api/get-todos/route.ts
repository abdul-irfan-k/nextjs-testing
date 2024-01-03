import TodoModel from "@/model/todo/todoModel";
import { connectDb } from "@/utils/mongoose/dbConnect";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { isConnected } = await connectDb();
    if (!isConnected) return console.log("not connected");

    const allTodos = await TodoModel.find({});
    return NextResponse.json({ todos: allTodos });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ isValid: false }, { status: 400 });
  }
}
