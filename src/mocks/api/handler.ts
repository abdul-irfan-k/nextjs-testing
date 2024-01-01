import { HttpResponse, http } from "msw";
import { todos } from "../data/todo-data";

export const handlers = [
  http.post("http://localhost:3000/api/get-todos", ({ request }) => {
    return new HttpResponse({ todos: todos });
  }),
];
