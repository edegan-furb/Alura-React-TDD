import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { useParticipantList } from "../state/hooks/useParticipantList";

jest.mock("../state/hooks/useParticipantList", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})

describe("where there are not enough participants", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test("The game can not be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("where there are enough participants", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([
      "Eduardo",
      "Sarah",
      "Sadução",
    ]);
  });
  test("The game can be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
  test("The game has been started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockNavigation).toHaveBeenCalledTimes(1)
    expect(mockNavigation).toHaveBeenCalledWith('/draw')
  });
});
