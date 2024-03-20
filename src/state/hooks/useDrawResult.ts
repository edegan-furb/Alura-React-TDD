import { useRecoilValue } from "recoil";
import { secretSantaResult } from "../atom";

export const useDrawResult = () => {
  return useRecoilValue(secretSantaResult);
};
