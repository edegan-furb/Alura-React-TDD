import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ParticipantsList from ".";
import { useParticipantList } from "../../state/hooks/useParticipantList";

jest.mock("../../state/hooks/useParticipantList", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe("An empty participant list:", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test("must be rendered without elements", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});

describe("A completed list of participants:", () => {
  const participants = ["Eduardo", "Sarah"];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });
  test("must be rendered without elements", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participants.length);
  });
});
