import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DroneImage from "../../assets/images/drone.png";
import Notice from "../Notice";
import Question from "../Question";
import GoToLinkIcon from "../../assets/icons/gotolink.svg?react";
import { FaCircleCheck } from "react-icons/fa6";
import ReceiptIcon from "../../assets/icons/receipt-2.svg?react";

const SuccessConfirmOrder = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className="flex flex-col h-fit gap-7">
      <div className="py-[15px] items-center gap-3 flex justify-center px-[15px] sm:px-[20px] border rounded-[20px] border-background-outline">
        <div className="text-text-variant mdd:text-[22px] text-[19px] w-fit leading-[32px]">
          Order ID:&nbsp;
          <b className="leading-[36px]">R78667</b>
        </div>
        <BsFillArrowRightCircleFill color="#79747E" size={22} />
        <div className="text-text-variant mdd:text-[22px] text-[19px] w-fit leading-[32px]">
          Tracking ID:&nbsp;
          <b className="leading-[36px]">R78667</b>
        </div>
      </div>
      <div className="bg-text-secondary justify-center flex gap-8 rounded-[20px]">
        <img src={DroneImage} className="w-[20rem] h-fit mt-auto mb-2" />
        <div className="flex text-white flex-col gap-2 py-8 leading-[28px] text-[22px]">
          <div className="font-[700] ">Congratulations!</div>
          <div className="font-[400] max-w-[23rem]">
            You have just successfully placed a <b>shop for me</b> order by
            paying for your shop for me cost.
          </div>
        </div>
      </div>
      <Notice
        title="IMPORTANT NOTICE"
        notice="You will make payment for your shipping once it arrives our office in Nigeria (your selected <b>“Destination”</b>) before you can clear it."
      />
      <Question question="Track Your Package" />
      <div className="py-[15px] h-fit flex flex-col gap-4 px-[15px] sm:px-[20px] border rounded-[20px] border-background-outline">
        <div className="text-[#49454F] font-[700]">
          Here are more information on how to track
        </div>
        <div className="flex gap-5">
          <div className="bg-text-secondary text-white py-2 px-[11px] rounded-[20px] font-[700] text-[18px]">
            1
          </div>
          <div className="flex flex-col">
            <div className="text-[#1C1B1F] font-[400] text-[18px] leading-[28px]">
              You can start tracking your package in the next 24 hrs using the
              Tracking ID above or
            </div>
            <div className="flex gap-1 items-center">
              <div className="text-text-secondary font-[700] text-[18px]">
                this link
              </div>
              <GoToLinkIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Question question="And Lastly..." />
        <div className="font-[400] leading-[20px] tracking-[0.25px] text-[#1C1B1F] text-[16px]">
          We have sent you details about your Order to your email address
          rexofforex@gmail.com
        </div>
        <button className="border-[0.88px] justify-center font-[500] text-[14px] text-text-secondary flex border-border-secondary items-center gap-2 rounded-full py-[8px] sm:py-[10px] w-fit px-10">
          <ReceiptIcon />
          View Receipt
        </button>
      </div>
      <button
        onClick={handleClose}
        className="rounded-[100px] w-fit text-white flex items-center gap-3 justify-center px-3 sm:px-20 py-[8px] sm:py-2 font-medium bg-text-secondary"
      >
        <FaCircleCheck size={22} />
        <div className="flex whitespace-nowrap items-center gap-2">Done</div>
      </button>
    </div>
  );
};

export default SuccessConfirmOrder;
