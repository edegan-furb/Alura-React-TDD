import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Config from ".";

const mockNavegation = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegation,
  };
});

describe("The config page", () => {
  test("Must be rendered correctly", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
