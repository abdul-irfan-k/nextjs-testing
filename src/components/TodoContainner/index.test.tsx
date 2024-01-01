import { fireEvent, render, screen } from "@testing-library/react";
import TodoContainer from ".";
import AddTodo from "../AddTodo";
import { HttpResponse, http } from "msw";
import { server } from "@/mocks/server";

describe("TodoContainer", () => {
  // it("Testing for heading", () => {
  //   render(<TodoContainer initialTodo={[]} />);
  //   expect(screen.queryByText("ToDo List")).toBeInTheDocument();
  // });

  // it("Tests for Add Task Menu", () => {
  //   const { getByTestId, getByText } = render(
  //     <TodoContainer initialTodo={[]} />
  //   );

  //   expect(screen.queryByText("Add Task")).not.toBeInTheDocument();
  //   fireEvent.click(getByText("Add New Task"));
  //   expect(screen.queryByText("Add Task")).toBeInTheDocument();
  //   // expect(screen.getByTestId("addTodoContainer")).toContain();
  // });

  it("Testing for get-todos api requests", () => {
    server.use(
      http.post("http://localhost:3000/api/get-todos", ({ request }) => {
        return HttpResponse.json(
          { todos: [{ name: "asdf" }] },
          { status: 200 }
        );
      })
    );
    render(<TodoContainer />);
    expect(screen.getByText("ToDo List")).toBeInTheDocument();
  });

  it("Testing for get-todos api bad requests", () => {
    server.use(
      http.post("http://localhost:3000/api/get-todos", ({ request }) => {
        return new HttpResponse("null", { status: 400 });
      })
    );
    render(<TodoContainer />);
    expect(screen.getByText("no todos found")).toBeInTheDocument();
  });
});
