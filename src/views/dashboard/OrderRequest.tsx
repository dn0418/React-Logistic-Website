import { MdOutlineShield } from "react-icons/md";
import { orderRequest } from "../../types/orderRequest";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import dayjs from "dayjs";
import DisplayStatus from "../../components/DisplayStatus";
import ShieldButton from "../../components/ShieldButton";

const OrderRequest = ({
  request,
  onClick,
}: {
  request: orderRequest;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex rounded-[19.93px] sm:pl-6 px-5 sm:pr-12 py-9 bg-white flex-col"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-text-variant text-[24px] leading-[32px]">
            Order ID:&nbsp;
            <b className="leading-[36px]">{request.orderId}</b>
          </div>
          <div className="mdd:flex hidden ml-5 items-center">
            <DisplayStatus status={request.status} />
            <ShieldButton title="Take Action Now" />
          </div>
        </div>
        <IoEllipsisHorizontalOutline color="#B3261E" size={33} className="" />
      </div>
      <div className="mdd:hidden mt-4 flex items-center">
        <DisplayStatus status={request.status} />
        <ShieldButton title="Take Action Now" />
      </div>
      <div className="sm:flex hidden my-5 items-center w-fit rounded-[20px] bg-background-variant-2 p-4 gap-4">
        {request.images.slice(0, 4).map((image, index) => (
          <img
            src={image}
            alt="item"
            className="w-[120px] h-[100px] object-cover rounded-[10px]"
            key={index}
          />
        ))}
        {request.images.length > 4 && (
          <div className="flex items-center justify-center text-text-variant-2  tracking-[0.1px] leading-[20px] font-[500] text-[14px] h-[100px]">
            {request.images.length - 4}+ more
          </div>
        )}
      </div>
      <div className="flex sm:hidden my-5 items-center w-fit rounded-[20px] bg-background-variant-2 p-4 gap-4">
        <img
          src={request.images[0]}
          alt="item"
          className="w-[120px] h-[100px] object-cover rounded-[10px]"
        />
        {request.images.length > 1 && (
          <div className="flex items-center justify-center text-text-variant-2  tracking-[0.1px] leading-[20px] font-[500] text-[14px] h-[100px]">
            {request.images.length - 1}+ more
          </div>
        )}
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
