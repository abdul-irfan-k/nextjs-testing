import { fireEvent, render, screen, within } from "@testing-library/react";
import TodoContainer from ".";
import AddTodo from "../AddTodo";

describe("TodoContainer", () => {
  it("Testing for heading", () => {
    render(<TodoContainer initialTodo={[]} />);
    expect(screen.queryByText("ToDo List")).toBeInTheDocument();
  });

  it("Tests for Add Task Menu", () => {
    const { getByTestId, getByText } = render(
      <TodoContainer initialTodo={[]} />
    );

    expect(screen.queryByText("Add Task")).not.toBeInTheDocument();
    fireEvent.click(getByText("Add New Task"));
    expect(screen.queryByText("Add Task")).toBeInTheDocument();
    // expect(screen.getByTestId("addTodoContainer")).toContain();
  });
});
