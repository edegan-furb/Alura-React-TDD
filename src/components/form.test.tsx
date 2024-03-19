import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe("Form.tsx behavior", () => {
  test("When the input is empty, new participants can not be added", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // Find in DOM the input
    const input = screen.getByPlaceholderText("Enter participant names");
    // Find the button
    const button = screen.getByRole("button");
    // Make sure the input is in the document
    expect(input).toBeInTheDocument();
    // Make sure the button is disabled
    expect(button).toBeDisabled();
  });

  test("Add participant if a name is filled in", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // Find in DOM the input
    const input = screen.getByPlaceholderText("Enter participant names");
    // Find the button
    const button = screen.getByRole("button");
    // Enter a value into the input
    fireEvent.change(input, {
      target: {
        value: "Eduardo Degan",
      },
    });
    // Click the submit button
    fireEvent.click(button);
    // Make sure the input has active focus
    expect(input).toHaveFocus();
    // Make sure the input does not have a value
    expect(input).toHaveValue("");
  });

  test("Duplicate names cannot be added to the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText("Enter participant names");
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Eduardo Degan",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Eduardo Degan",
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe("Duplicate names are not allowed");
  });

  test("The message error should disappear after the timer ends", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText("Enter participant names");
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Eduardo Degan",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Eduardo Degan",
      },
    });
    fireEvent.click(button);
    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
