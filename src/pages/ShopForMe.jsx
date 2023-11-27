import React from "react";
import ShopIcon from "../assets/icons/shop-2.svg?react";

const ShopForMe = () => {
    document.title = "Logistics - Shop For Me";

  return (
    <div className="h-screen flex items-center flex-col gap-3  justify-center">
      <div className="max-w-[30rem] text-center">
        You have not requested for any shop for me order before, would you like
        to request for a new order?
      </div>
      <button className="bg-text-secondary text-white rounded-full px-4 py-3 gap-2 tracking-[0.1px] text-[14px] font-medium flex items-center">
        <ShopIcon />
        Request new order
      </button>
    </div>
  );
};

export default ShopForMe;
