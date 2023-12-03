import { atom } from "recoil";
import { OrderRequest } from "../types/orderRequest";
import { Order } from "../types/order";

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

export const ordersRequestState = atom<OrderRequest[]>({
  key: "ordersRequestState",
  default: [
    {
      orderId: "OD78667",
      requestId: "R78667",
      status: "Responded",
      date: new Date("2021-01-23"),
      image: "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
    },
    {
      orderId: "OD78667",
      requestId: "R78664",
      status: "Responded",
      date: new Date("2021-10-23"),
      image: "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
    },
    {
      orderId: "OD78667",
      requestId: "R7866",
      status: "Not Responded",
      date: new Date("2021-10-23"),

      image: "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
    },
  ],
});

export const ordersState = atom<Order[]>({
  key: "ordersState",
  default: [
    {
      orderDate: new Date("2021-03-22"),
      trackingId: "SH08756",
      shippingStatus: "Not Started",
      shopForMeStatus: "Purchase Not Started",
      shopForMeCost: 107.76,
      shippingCost: 107.76,
    },
  ],
});
