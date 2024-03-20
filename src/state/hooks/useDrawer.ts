import { useParticipantList } from "./useParticipantList";
import { useSetRecoilState } from "recoil";
import { secretSantaResult } from "../atom";
import { holdDraw } from "../helpers/holdDraw";

export const useDrawer = () => {
  const participants = useParticipantList();

  const setResult = useSetRecoilState(secretSantaResult);

  return () => {
    const result = holdDraw(participants);
    setResult(result);
  };
};
