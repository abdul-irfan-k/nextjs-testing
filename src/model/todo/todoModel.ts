import mongoose, { Schema, model } from "mongoose";

const todoSchema = new Schema(
  {
    _id: { type: String },
    content: { type: String, required: true },
    isChecked: { type: Boolean, default: false },
    assignedDate: { type: Date, default: Date.now() },
    completedDate: { type: Date },
  },
  { timestamps: true }
);


const TodoModel = mongoose.models.Todo || model("Todo",todoSchema)
export default TodoModel