import React from "react";
import ShopIcon from "../../assets/icons/shop-2.svg?react";
import NoOrder from "./NoOrder";

const Draft = () => {
  return (
    <NoOrder
      desc={
        "You don't have any shop for me request in your draft folder yet, would you like to request for a new order?"
      }
    />
  );
};

export default Draft;
