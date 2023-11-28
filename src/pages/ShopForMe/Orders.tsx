import React from "react";
import NoOrder from "./NoOrder";

const Orders: React.FC = () => {
  return (
    <NoOrder
      desc={
        "You have not placed any shop for me order before, would you like to create a new order?"
      }
    />
  );
};

export default Orders;
