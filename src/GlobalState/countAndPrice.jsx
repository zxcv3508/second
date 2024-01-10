import { atom } from "recoil";

export const countAndPriceState = atom({
  key: "countAndPrice",
  default: [0, 0],
});
