import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useParticipantList } from "../../state/hooks/useParticipantList";
import Draw from ".";
import { useDrawResult } from "../../state/hooks/useDrawResult";

jest.mock("../../state/hooks/useParticipantList", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock("../../state/hooks/useDrawResult", () => {
  return {
    useDrawResult: jest.fn(),
  };
});

describe("In the draw page", () => {
  const participants = ["Eduardo", "Sarah", "Sadução"];
  const result = new Map([
    ["Eduardo", "Saduçao"],
    ["Saduçao", "Sarah"],
    ["Sarah", "Eduardo"],
  ]);
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useDrawResult as jest.Mock).mockReturnValue(result);
  });
  test("All participants can show off their Secret Santa", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length + 1);
  });
  test("Secret Santa is shown when requested", () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText("Select your name");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const secretSanta = screen.getByRole("alert");
    expect(secretSanta).toBeInTheDocument();
  });
});
