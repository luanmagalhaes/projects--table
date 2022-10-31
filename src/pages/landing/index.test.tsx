import { fireEvent, render, screen } from "@testing-library/react";
import { Landing } from "./index";
import { Provider } from "react-redux";
import store from "../../store";
import "@testing-library/jest-dom";

describe("Landing", () => {
  test("displays New Project button", () => {
    render(
      <Provider store={store}>
        <Landing />
      </Provider>
    );
    expect(screen.getByText("New Project")).toBeInTheDocument();
  });
  test("displays the dialog when New Project button is clicked", () => {
    render(
      <Provider store={store}>
        <Landing />
      </Provider>
    );
    expect(screen.queryByTestId("project-form")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("New Project"));
    expect(screen.getByTestId("project-form")).toBeInTheDocument();
  });
  test("populates project fields", () => {
    render(
      <Provider store={store}>
        <Landing />
      </Provider>
    );
    fireEvent.click(screen.getByText("New Project"));
    expect(screen.getByLabelText("project-name")).toBeInTheDocument();
    expect(screen.getByLabelText("project-description")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("project-name"), {
      target: { value: "project name" },
    });
    fireEvent.change(screen.getByLabelText("project-description"), {
      target: { value: "project description" },
    });
    fireEvent.mouseDown(screen.getByTestId("user-select"));
    fireEvent.click(screen.getByText("Ned Stark"));
  });
});
