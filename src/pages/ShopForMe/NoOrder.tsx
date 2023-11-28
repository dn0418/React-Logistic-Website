import React from "react";
import ShopIcon from "../../assets/icons/shop-2.svg?react";
import { Link } from "react-router-dom";

const NoOrder: React.FC<{
  desc: string;
}> = ({ desc }) => {
  
  return (
    <div className="h-[calc(100vh-30px)] flex items-center flex-col gap-7  justify-center">
      <div className="max-w-[25rem] text-[18px] leading-[24px] text-center">
        {desc}
      </div>
      <Link
        to="/shop-for-me/requests?request=order"
        className="bg-text-secondary text-white rounded-full px-3 py-2 gap-2 tracking-[0.1px] text-[14px] font-medium flex items-center"
      >
        <ShopIcon />
        <span>Request new order</span>
      </Link>
    </div>
  );
};

export default NoOrder;
