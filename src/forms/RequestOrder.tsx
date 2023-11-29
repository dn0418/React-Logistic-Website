import { CommonInputField, SelectInput } from "../helpers/FormFields";
import LeftIcon from "../assets/icons/arrow-circle-right.svg?react";
import { IoMdEye } from "react-icons/io";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const RequestOrderForm = () => {
  return (
    <form className="flex flex-col gap-4">
    <div className="bg-white flex flex-col gap-6 rounded-[20px] p-6">
      <div className="border border-dashed px-6  py-4 text-[25px] leading-[36px] border-text-secondary text-text-secondary rounded-[20px]">
        Requesting For New Shop For Me Service
      </div>
      <div className="bg-background-important rounded-xl p-5">
        <div className="text-text-important font-medium text-[14px] tracking-[0.1px] leading-[20px]">
          IMPORTANT NOTICE:
        </div>
        <ul className="list-disc mt-4 ml-5">
          <li className="text-[14px] leading-[20px] text-[#49454F] tracking-[0.25px]">
            Even though you will be paying for your <b>shipping cost</b>{" "}
            when your items arrive our office in Nigeria, you will be
            required to pay for the <b>procurement/shop for me cost</b>{" "}
            for your items before we process your order.
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start gap-2">
          <LeftIcon />
          <div className="border-b pb-1">
            Tell us where your package will be shipped from
          </div>
        </div>
        <div className="ml-10 my-5">
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
      <div className="flex flex-col">
        <div className="flex items-start gap-2">
          <LeftIcon />
          <div className=" ">Fill in the Items details</div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="border-2 rounded-[20px] flex flex-col gap-8 px-10 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 ">
                <div className="text-[20px] tracking-[0%] leading-[28px]">
                  Item - <span className="text-text-secondary">#1</span>
                </div>
                <div className="rounded-[100px] px-5 items-center flex gap-2 py-[10px] font-medium tracking-[0.1px] leading-[20px] text-[14px] bg-text-secondary text-white">
                  <IoMdEye size={20} />
                  <span>Preview Item</span>
                </div>
              </div>
              <IoChevronDownCircleOutline size={25} color="#292D32" />
            </div>
            <div className="mt-3 flex gap-10">
              <SelectInput
                label="Store"
                defaultValue="Select a store"
                name="store"
                options={[{ value: "store_1", label: "Store 1" }]}
              />
              <div className="w-[50%]">
                <SelectInput
                  label="Urget Purchase"
                  defaultValue="No"
                  name="store"
                  options={[{ value: "purchase_!", label: "Purchase 1" }]}
                />
              </div>
            </div>
            <CommonInputField name="item_url" label="Item URL" required />
            <CommonInputField
              name="item_name"
              label="Item Name"
              required
            />
            <div className="w-full gap-6 flex items-center">
              <CommonInputField
                name="item_name"
                label="Item Original Cost"
                required
                type="money"
                defaultValue={0}
              />
              <CommonInputField
                name="item_name"
                label="Quantity"
                sx={{ width: "40%" }}
                required
              />
            </div>
            <CommonInputField
              name="item_name"
              label="Total shipping cost to your warehouse & Sales Tax"
              required
              type="money"
              defaultValue={0}
            />

            <CommonInputField
              name="item_name"
              label="Additional Item Description"
              required
              multiline
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  </form>
  )
}

export default RequestOrderForm