import { fireEvent, render, screen, within } from "@testing-library/react";
import TodoContainer from ".";
import AddTodo from "../AddTodo";
import { exportTraceState } from "next/dist/trace";

describe("TodoContainer", () => {
  it("render todo heading", () => {
    render(<TodoContainer initialTodo={[]} />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Tests for Add Task Component", () => {
    const { getByTestId, getByText } = render(
      <TodoContainer initialTodo={[]} />
    );

    expect(screen.queryByText("Add Task")).not.toBeInTheDocument();
    fireEvent.click(getByText("Add New Task"));
    expect(screen.queryByText("Add Task")).toBeInTheDocument();
    // expect(screen.getByTestId("addTodoContainer")).toContain();
  });
});
