import React from "react";
import ShopIcon from "../../assets/icons/shop-2.svg?react";
import NoOrder from "./NoOrder";

const Orders = () => {
  return (
    <NoOrder
      desc={
        "You have not placed any shop for me order before, would you like to create a new order?"
      }
    />
  );
};

export default Orders;
