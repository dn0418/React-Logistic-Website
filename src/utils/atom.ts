import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    username: "Rex",
    id: "RAC45678",
  },
});

export const notFoundState = atom({
  key: "notFoundState",
  default: false,
});
