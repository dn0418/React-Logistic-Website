import {
  CommonInputField,
  FileInputField,
  QuantityInputField,
  SelectInput,
} from "../helpers/FormFields";
import LeftIcon from "../assets/icons/arrow-circle-right.svg?react";
import { IoMdEye } from "react-icons/io";
import Title from "../components/Title";
import Question from "../components/Question";
import SubQuestion from "../components/SubQuestion";
import Notice from "../components/Notice";
import AddButton from "../components/AddButton";
import DeleteIcon from "../assets/icons/bag.svg?react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import SaveAdd from "../assets/icons/save-add.svg?react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const RequestOrderForm = () => {
  return (
    <form className="flex flex-col my-5 gap-4 mdd:mr-[6rem]">
      <div className="bg-white flex flex-col gap-6 rounded-[20px] p-5 sm:p-6">
        <Title title={"Requesting For New Shop For Me Service"} />
        <Notice
          list
          title="IMPORTANT NOTICE:"
          notice="Even though you will be paying for your <b>shipping cost</b> when
              your items arrive our office in Nigeria, you will be required to
              pay for the <b>procurement/shop for me cost</b> for your items
              before we process your order."
        />
        <div className="flex flex-col">
          <Question
            underline
            question="Tell us where your package will be shipped from"
          />
          <div className="sm:ml-8 mt-8 mr-6">
            <SelectInput
              sx={
                {
                  // move it left 10px
                }
              }
              options={[
                { value: "usa", label: "USA" },
                {
                  value: "nigeria",
                  label: "Nigeria",
                },
              ]}
              label="Origin Warehouse"
              defaultValue="Select Origin"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Question question="Fill in the Items details" />
          <div className="flex flex-col mt-5 w-full gap-6 ">
            <div className="flex items-center w-full justify-between gap-7 pr-1">
              <div className="border-2 w-full rounded-[20px] flex flex-col gap-8 sm:px-10 p-5 sm:py-5">
                <SubQuestion
                  leftContent={
                    <button className="flex items-center gap-4 ">
                      <div className="text-[20px] tracking-[0%] leading-[28px]">
                        Item - <span className="text-text-secondary">#1</span>
                      </div>
                      <div className="rounded-[100px] px-5 items-center sm:flex hidden gap-2 py-[10px] font-medium tracking-[0.1px] leading-[20px] text-[14px] bg-text-secondary text-white">
                        <IoMdEye size={20} />
                        <span>Preview Item</span>
                      </div>
                    </button>
                  }
                />
                <div className="mt-3 flex sm:flex-row flex-col gap-5">
                  <SelectInput
                    label="Store"
                    defaultValue="Select a store"
                    name="store"
                    options={[{ value: "store_1", label: "Store 1" }]}
                  />
                  <div className="w-[100%] md:w-[40%]">
                    <SelectInput
                      label="Urget Purchase"
                      defaultValue="No"
                      name="store"
                      options={[{ value: "purchase_!", label: "Purchase 1" }]}
                    />
                  </div>
                </div>
                <CommonInputField
                  name="item_url"
                  placeholder="Paste the item link here"
                  label="Item URL"
                  required
                />
                <CommonInputField
                  name="item_name"
                  placeholder="Product Name"
                  label="Item Name"
                  required
                />
                <div className="w-full gap-6 flex sm:flex-row flex-col items-center">
                  <CommonInputField
                    name="cost"
                    label="Item Original Cost"
                    required
                    type="money"
                    defaultValue={0}
                  />
                  <QuantityInputField
                    label="Quantity"
                    name="quantity"
                    className="w-[100%] md:w-[40%]"
                  />
                </div>
                <CommonInputField
                  name="item_name"
                  label="Total shipping cost to your warehouse & Sales Tax"
                  required
                  type="money"
                  defaultValue={0}
                />
                <FileInputField label="Upload Item Picture" />

                <CommonInputField
                  name="item_name"
                  label="Additional Item Description"
                  required
                  placeholder="Product Description"
                  multiline
                  rows={4}
                />
                <Question
                  question="Describe the item you wish to purchase with further custom properties"
                  underline
                />
                <div className="items-center sm:flex-row flex-col flex gap-5">
                  <CommonInputField
                    className="sm:w -[40%] md:w-[30%]"
                    label="Item Color"
                    placeholder="Enter the color of the item"
                  />
                  <AddButton title="Add Properties" />
                </div>
                <div className="sm:hidden border-t-[0.5px] border-dashed border-[#79747E] px-2 pt-3 flex flex-col gap-4">
                  <button className="rounded-[100px] px-5 items-center flex gap-2 py-[10px] font-medium tracking-[0.1px] leading-[20px] text-[14px] bg-text-secondary text-white justify-center">
                    <IoMdEye size={20} />
                    <span>Preview Item</span>
                  </button>
                  <div className="px-3">
                    <button className="border-[0.88px] w-full justify-center text-[#B3261E]  flex border-border-secondary items-center gap-2 rounded-full py-[10px] px-5">
                      <DeleteIcon />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <DeleteIcon className="cursor-pointer sm:block hidden" />
            </div>
            <div className="flex items-center w-full justify-between gap-5 pr-1">
              <div className="border-2 rounded-[20px] w-full flex flex-col gap-8 px-10 py-5">
                <SubQuestion
                  leftContent={
                    <div className="flex items-center gap-4 ">
                      <div className="text-[20px] tracking-[0%] leading-[28px]">
                        Item - <span className="text-text-secondary">#2</span>
                      </div>
                      <button className="rounded-[100px] px-5 items-sm:center hidden sm:flex gap-2 py-[14px] font-medium tracking-[0.1px] leading-[20px] text-[14px] bg-text-secondary text-white justify-center">
                        <IoMdEye size={20} />
                        <span>Preview Item</span>
                      </button>
                    </div>
                  }
                />
              </div>
              <DeleteIcon className="cursor-pointer sm:block hidden" />
            </div>
          </div>
          <AddButton className="px-[40px]" title="Add Item" />
        </div>
        <div className="flex items-center gap-3 mt-3 mb-2">
          <button className="border-[0.88px] sm:w-fit w-[50%] justify-center text-text-secondary  sm:ml-3 flex border-border-secondary items-center gap-2 rounded-full py-[10px] px-5">
            <BsArrowLeftCircleFill size={20} />
            Back
          </button>
          <button className="bg-[#E8DEF8] sm:flex hidden justify-center rounded-[100px] text-[18px] font-medium items-center px-4 gap-3 py-[10px]">
            <SaveAdd />
            Save as Draft
          </button>
          <button className="flex sm:w-fit w-full items-center justify-center gap-3 bg-text-secondary text-white py-[10px] px-6 rounded-[100px] font-medium text-[16px]">
            <BsArrowRightCircleFill />
            Proceed
          </button>
        </div>
        <button className="bg-[#E8DEF8] -mt-4 flex sm:hidden justify-center rounded-[100px] text-[18px] font-medium items-center px-4 gap-3 py-[10px]">
          <SaveAdd />
          Save as Draft
        </button>
      </div>
    </form>
  );
};

export default RequestOrderForm;
