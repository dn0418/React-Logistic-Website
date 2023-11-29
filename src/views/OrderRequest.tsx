import { MdOutlineShield } from "react-icons/md";
import { orderRequest } from "../types/orderRequest";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import dayjs from "dayjs";

const OrderRequest = ({ request }: { request: orderRequest }) => {
  return (
    <div className="flex rounded-[19.93px] pl-6 pr-12 py-10 bg-white flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-text-variant text-[24px] leading-[32px]">
            Order ID:&nbsp;
            <b className="leading-[36px]">{request.id}</b>
          </div>
          <div className="flex ml-4 items-center gap-1">
            <div
              className={`${
                request.status === "Processed"
                  ? "bg-text-important p-[6px]"
                  : "border-border-primary border-2 p-[5px]"
              } rounded-full`}
            ></div>
            <div
              className={`text-text-secondary leading-[20.3px] font-bold tracking-[0.13px]`}
            >
              {request.status}
            </div>
          </div>
          <button className="border-[0.88px] ml-3 flex border-border-secondary items-center gap-2 rounded-full py-2 px-4">
            <MdOutlineShield size={22} color="#21005D" />
            <div className="text-text-secondary capitalize font-[500]">
              Take Action Now
            </div>
          </button>
        </div>
        <IoEllipsisHorizontalOutline color="#B3261E" size={33} />
      </div>
      <div className="flex my-5 items-center w-fit rounded-[20px] bg-background-variant-2 p-4 gap-4">
        {request.images.map((image, index) => (
          <img
            src={image}
            alt="item"
            className="w-[120px] h-[100px] object-cover rounded-[10px]"
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="font-bold leading-[19.93px] tracking-[0.1px] text-[15.94px]">
          Order Request Date:
        </div>
        <div className="text-[#625B71] font-[500] text-[14px] tracking-[0.1px] leading-[20px]">
          {request.date}
        </div>
      </div>
    </div>
  );
};

export default OrderRequest;
