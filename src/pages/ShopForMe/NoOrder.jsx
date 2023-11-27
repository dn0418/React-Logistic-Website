import React from "react";
import ShopIcon from "../../assets/icons/shop-2.svg?react";
import { useNavigate, useLocation } from "react-router-dom";

const NoOrder = ({ desc, handleShowRequestForm }) => {
  const navigate = useNavigate();
  const location = useLocation();
  

  return (
    <div className="h-[calc(100vh-30px)] flex items-center flex-col gap-7  justify-center">
      <div className="max-w-[25rem] text-[18px] leading-[24px] text-center">
        {desc}
      </div>
      <button
        onClick={() => {
          if (!location.pathname.endsWith("/requests")) {
            navigate("/shop-for-me/requests");
          }
          handleShowRequestForm()
        }}
        className="bg-text-secondary text-white rounded-full px-3 py-2 gap-2 tracking-[0.1px] text-[14px] font-medium flex items-center"
      >
        <ShopIcon />
        <span>Request new order</span>
      </button>
    </div>
  );
};

export default NoOrder;
