import { holdDraw } from "./holdDraw";

describe("Given a secret santa draw", () => {
  test("Each participant does not draw their own name", () => {
    const participants = ["Eduardo", "Sarah", "Sadução"];

    const draw = holdDraw(participants);
    participants.forEach((participant) => {
      const secretSanta = draw.get(participant);
      expect(secretSanta).not.toEqual(participant);
    });
  });
});
