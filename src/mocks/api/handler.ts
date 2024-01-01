import { http } from "msw";
import { todos } from "../data/todo-data";

export const handlers = [
  http.get("/api/get-todos", (req, res, ctx) => {
    return res(ctx.json({ todos: todos }));
  }),
];
