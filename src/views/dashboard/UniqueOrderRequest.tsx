import { orderRequest } from "../../types/orderRequest";
import Title from "../../components/Title";
import Question from "../../components/Question";
import SubQuestion from "../../components/SubQuestion";
import SubQuestionAnswer from "../../components/SubQuestionAnswer";
import DisplayStatus from "../../components/DisplayStatus";
import ShieldButton from "../../components/ShieldButton";
import Notice from "../../components/Notice";
import ItemCosts from "../../components/ItemCosts";
import ConvertIcon from "../../assets/icons/convert-card.svg?react";
import WalletIcon from "../../assets/icons/wallet.svg?react";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const UniqueOrderRequest = ({
  request,
  onProceed,
  onBack,
}: {
  request: orderRequest;
  onProceed: () => void;
  onBack: () => void;
}) => {
  return (
    <div className="bg-white sm:gap-7 gap-4 rounded-[20px] p-[1.6rem] sm:p-8 mx-auto flex flex-col  ">
      <Title title="Shop For Me Order Request Details" />
      <div className="text-text-variant mdd:text-[24px] text-[19px] leading-[32px]">
        Request ID:&nbsp;
        <b className="leading-[36px]">{request.requestId}</b>
      </div>
      <div className="flex flex-col gap-3">
        <Question question="Order Information" />
        <div className="py-[15px] h-fit flex flex-col gap-4 px-[15px] sm:px-[20px] border rounded-[20px] border-background-outline">
          <SubQuestion
            leftContent={
              <div className="sm:text-base text-[15px] font-semibold">
                Order Information
              </div>
            }
          />
          <div className="flex mdd:flex-row flex-col gap-2 mdd:gap-14">
            <SubQuestionAnswer
              style={{
                paddingBottom: "10px",
              }}
              question="Request Date"
              className="flex flex-col gap-1 sm:gap-3 mdd:gap-7"
              answer={request.date}
            />
            <SubQuestionAnswer
              className="flex flex-col gap-2 sm:gap-3 mdd:gap-5"
              question="Request Status"
              answer={
                <div className="flex xs:items-start sm:gap-3 gap-2 sm:flex-row xs:flex-col items-center sm:items-center">
                  <DisplayStatus status={request.status} />
                  <ShieldButton title="Proceed to Checkout" />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Question question="Package Details" />
        <div className="py-[20px] flex flex-col gap-4 px-[15px] sm:px-[20px] border rounded-[20px] border-background-outline">
          <SubQuestion leftContent={<div>Package Origin</div>} />
          <Notice notice="Your Items will be delivered here after we help you purchase your them and they will be shipped from here to our pickup office in Nigeria" />
          <SubQuestionAnswer
            question={
              <>
                Country of
                <br />
                Purchase
              </>
            }
            className="flex flex-col gap-2 sm:gap-6"
            answer="United States (Houston - warehouse)"
          />
        </div>
        <div className="py-[20px] flex flex-col gap-4 px-[15px] sm:px-[22px] border rounded-[20px] border-background-outline">
          <SubQuestion
            leftContent={
              <div className="items-center flex">
                <div>Item - </div>
                <div className="text-text-secondary">#1</div>
              </div>
            }
          />
          <Notice notice="These details could have been changed/updated by our staffs if they observe differences between the ones you provided and the ones we verified from the store, however we will inform you about it." />
          <div className="flex sm:gap-[50px] gap-2 sm:flex-row flex-col mdd:gap-[250px]">
            <SubQuestionAnswer
              question="Store"
              answer="Amazon"
              className="flex flex-col sm:gap-7 mdd:gap-7"
            />
            <SubQuestionAnswer
              question={
                <>
                  Urgent
                  <br />
                  Purchase
                </>
              }
              answer="No"
              className="flex flex-col gap-2"
            />
          </div>
          <SubQuestionAnswer
            className="flex flex-col gap-3 sm:gap-5"
            question="Item URL"
            answer={
              <a
                href="https://stilldoingit.com"
                className="hover:text-blue-500"
              >
                https://stilldoingit.com
              </a>
            }
          />
          <div className="flex sm:gap-[50px] gap-2 sm:flex-row flex-col mdd:gap-[200px]">
            <SubQuestionAnswer
              addExclamation
              question="Item Name"
              answer="Designer Bags"
              className="flex flex-col gap-2 sm:gap-5"
            />
            <SubQuestionAnswer
              addExclamation
              question={
                <>
                  Item Cost fro
                  <br />
                  Store
                </>
              }
              answer="$45.00"
            />
          </div>
          <SubQuestionAnswer
            className="flex flex-col gap-4"
            question="Quantity"
            answer="4"
          />
          <div className="md:flex grid grid-cols-2 gap-3 sm:gap-[80px]">
            <SubQuestionAnswer
              className="sm:flex hidden flex-col gap-4"
              question="Quantity"
              answer="4"
            />
            <SubQuestionAnswer
              className="flex flex-col gap-4"
              question="Weight"
              answer="65kg"
              addExclamation
            />
            <SubQuestionAnswer
              className="flex flex-col gap-4"
              question="Height"
              answer="5 inches"
              addExclamation
            />
            <SubQuestionAnswer
              className="flex flex-col gap-4"
              question="Length"
              answer="5 inches"
              addExclamation
            />
            <SubQuestionAnswer
              className="flex flex-col gap-4"
              question="Width"
              answer="5 inches"
              addExclamation
            />
          </div>
          <SubQuestionAnswer
            className="flex flex-col gap-5"
            question="Item Picture"
            answer={
              <img
                src="https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq"
                className="w-[10rem] h-[7rem] object-cover rounded-[10px]"
              />
            }
            addExclamation
          />
          <SubQuestionAnswer
            question="Product Description"
            answer="This is a product description"
          />
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-28">
            <SubQuestionAnswer
              question="Color"
              answer="Red"
              className="flex flex-col gap-4"
              addExclamation
            />
            <SubQuestionAnswer
              question="Stripes"
              answer="5 inches"
              className="flex flex-col gap-4"
              addExclamation
            />
          </div>
          <div className="flex items-center">
            <ItemCosts />
            <div className="mdd:flex hidden ml-2 items-center gap-5">
              <div className="text-[14px] tracking-[0.25px] leading-[20px] flex items-center">
                <span className=" whitespace-nowrap">Default Currency:</span>
                <span className="font-bold">&nbsp;USD</span>
              </div>
              <button className="border-[0.88px] w-full whitespace-nowrap justify-center text-text-secondary  flex border-border-secondary items-center gap-2 rounded-full py-[8px] px-4">
                <ConvertIcon />
                Change currency
              </button>
            </div>
          </div>
          <Notice notice="These costs could have been changed/updated by our staffs if they observed differences between the details you provided and the ones we verified from the store." />
          <div className="flex flex-col mdd:hidden ml-2 items-center gap-5">
            <div className="text-[14px] tracking-[0.25px] leading-[20px] flex items-center">
              <span className=" whitespace-nowrap">Default Currency:</span>
              <span className="font-bold">&nbsp;USD</span>
            </div>
            <button className="border-[0.88px] w-full whitespace-nowrap justify-center text-text-secondary  flex border-border-secondary items-center gap-2 rounded-full py-[8px] px-4">
              <ConvertIcon />
              Change currency
            </button>
          </div>
          <div className="flex sm:gap-[5rem] sm:flex-row flex-col gap-2 mdd:gap-[11.8rem] ">
            <SubQuestionAnswer
              colorize
              className="flex flex-col gap-2"
              question={
                <>
                  Urgent
                  <br />
                  purchase fee
                </>
              }
              answer="$0.00"
            />
            <SubQuestionAnswer
              colorize
              addExclamation
              className="flex flex-col gap-2"
              question={
                <>
                  Processing
                  <br /> Fee
                </>
              }
              answer="$87,000.00"
            />
          </div>
          <div className="flex sm:gap-[3rem] sm:flex-row flex-col gap-2 mdd:gap-[10rem] ">
            <SubQuestionAnswer
              colorize
              className="flex flex-col gap-2"
              question={
                <>
                  Shipping to Origin
                  <br />
                  warehouse Cost
                </>
              }
              answer="$0.00"
            />
            <SubQuestionAnswer
              colorize
              addExclamation
              className="flex flex-col gap-2"
              question={
                <>
                  Shop For
                  <br />
                  Me Cost
                </>
              }
              answer="$87,000.00"
            />
          </div>
        </div>
        <div className="border-2 rounded-[20px] w-full flex flex-col gap-8 px-5 py-5">
          <SubQuestion
            leftContent={
              <button className="flex items-center gap-4 ">
                <div className="text-[20px] tracking-[0%] leading-[28px]">
                  Item - <span className="text-text-secondary">#2</span>
                </div>
              </button>
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Question question="Billing Details" />
        <div className="py-[15px] flex flex-col gap-4 px-[20px] border rounded-[20px] border-background-outline">
          <SubQuestion leftContent={"Payments Information"} />
          <Notice
            notice={
              "The <b>shop for me cost</b> could have been changed/updated by our staffs if they observe differences between the details you provided and the ones we verify from the store, however we will inform you about it."
            }
          />
          <div className="flex sm:items-center gap-2 sm:flex-row flex-col sm:gap-[132px]">
            <SubQuestionAnswer
              className="flex flex-col gap-1 sm:gap-3"
              question={
                <>
                  Total Shipment
                  <br />
                  Cost
                </>
              }
              answer="Not yet Collected"
            />
            <SubQuestionAnswer
              className="flex flex-col gap-1 sm:gap-3"
              question={
                <>
                  Payment
                  <br />
                  Status
                </>
              }
              answer="Unpaid"
            />
          </div>
          <div className="flex sm:items-center gap-4 sm:flex-row flex-col sm:gap-[140px] mt-1">
            <SubQuestionAnswer
              className="flex flex-col gap-3"
              addExclamation
              question={
                <>
                  Total Shop For
                  <br />
                  Me Cost
                </>
              }
              answer="$234,000.00"
            />
            <SubQuestionAnswer
              className="flex flex-col gap-3"
              question={
                <>
                  Payment
                  <br />
                  Status
                </>
              }
              answer="Unpaid"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center gap-4">
          <button
            onClick={onBack}
            className="border-[0.88px] justify-center text-text-secondary flex border-border-secondary items-center gap-2 rounded-full py-[8px] sm:py-[10px] px-10"
          >
            <BsArrowLeftCircleFill size={20} />
            Back
          </button>
          <button
            onClick={onProceed}
            className="rounded-[100px] text-white flex items-center gap-3 justify-center px-3 sm:px-10 py-[9px] sm:py-3 font-medium bg-[#B3261E]"
          >
            <WalletIcon color="#fff" />
            <div className="flex whitespace-nowrap items-center gap-2">
              Proceed<span className="xs:block hidden">to checkout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniqueOrderRequest;
