import { http } from "msw";
import { todos } from "../data/todo-data";

export const handlers = [
  http.get("/api/get-todos", (req, res, ctx) => {
    return res(ctx.json({ _id: "588cc303-026f-41d4-89a5-b7a355b34695",
    content: "new taks for testing",
    isChecked: true,
    assignedDate: new Date("2023-12-26T10:43:10.239Z"),
    createdAt: new Date("2023-12-26T10:43:10.709Z"),
    updatedAt: new Date("2023-12-26T10:58:46.709Z") }));
  }),
];
