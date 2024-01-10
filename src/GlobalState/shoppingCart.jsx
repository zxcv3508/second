import { atom } from "recoil";

export const shoppingCartState = atom({
  key: "shoppingCart",
  default: new Map(),
});
