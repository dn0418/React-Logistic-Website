import { atom } from "recoil";
import { orderRequest } from "../types/orderRequest";

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

export const ordersRequestState = atom<orderRequest[]>({
  key: "ordersRequestState",
  default: [
    {
      orderId: "OD78667",
      requestId: "R78667",

      status: "Responded",
      date: "23rd July 2021",
      images: [
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
      ],
    },
    {
      orderId: "OD78667",
      requestId: "R78667",

      status: "Processed",
      date: "23rd Jan 2023",
      images: [
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
      ],
    },
    {
      orderId: "OD78667",
      requestId: "R78667",
      status: "Not Responded to",
      date: "23rd Jan 2023",
      images: [
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
        "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
      ],
    },
  ],
});
