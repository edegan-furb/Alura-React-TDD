import shuffle from "just-shuffle";

export function holdDraw(participants: string[]) {
  const participantsTotal = participants.length;
  const shuffled = shuffle(participants);
  const result = new Map<string, string>();
  for (let index = 0; index < participantsTotal; index++) {
    const secretSantaIndex = index === participantsTotal - 1 ? 0 : index + 1;
    result.set(shuffled[index], shuffled[secretSantaIndex]);
  }
  return result;
}
