import { render, screen } from "@testing-library/react";
import TodoContainer from ".";

describe("TodoContainer", () => {
  it("render todo heading", () => {
    render(<TodoContainer />);
    const heading = screen.getByText("Todo Heading");
    expect(heading).toBeInTheDocument();
  });

  it("add button", () => {
    const { getByText } = render(<TodoContainer />);
    const button = getByText("add");
    button.click;
  });
});
