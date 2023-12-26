import TodoModel from "@/model/todo/todoModel";
import { connectDb } from "@/utils/mongoose/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { isConnected } = await connectDb();
    const todoDetails = req.body;

    const newTodo = new TodoModel({ ...todoDetails });
    await newTodo.save();
    return NextResponse.json({ isValid: true });
  } catch (error) {
    return NextResponse.json({ isValid: false }, { status: 400 });
  }
}
