import TodoModel from "@/model/todo/todoModel";
import { connectDb } from "@/utils/mongoose/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log('get request ==========================================')
    const { isConnected } = await connectDb();
    if (!isConnected) return console.log("not connected");

    const allTodoList = await TodoModel.find({});
    return NextResponse.json({todos:allTodoList})
  } catch (error) {
    return NextResponse.json({ isValid: false }, { status: 400 });
  }
}
