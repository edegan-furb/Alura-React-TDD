import { atom } from "recoil";

export const participantsListState = atom<string[]>({
  key: "participantsListState",
  default: [],
});

export const secretSantaResult = atom<Map<string, string>>({
  key: "secretSantaResult",
  default: new Map(),
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});
