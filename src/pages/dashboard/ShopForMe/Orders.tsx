import React, { useEffect } from "react";
import NoOrder from "./NoOrder";

const Orders: React.FC = () => {
  useEffect(() => {
    document.title = "Shop For Me | Orders"
  }, [])
  return (
    <NoOrder
      desc={
        "You have not placed any shop for me order before, would you like to create a new order?"
      }
    />
  );
};

export default Orders;
