import { TextField } from "@mui/material";
import FilterIcon from "../assets/icons/ff-token.svg?react";
import { SearchInputField } from "../helpers/FormFields";
import { BsArrowDownLeftSquareFill } from "react-icons/bs";

const SearchRequestOrder = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <div className="flex mt-5 mb-10 w-full items-center justify-center xs:justify-between">
      <div className="flex gap-4 mr-4 items-center">
        <div className="relative">
          <div className="absolute border-white border-2 p-[5px] sm:p-[6px] bg-border-primary rounded-full -right-1 -top-1"></div>
          <button className="flex items-center whitespace-nowrap bg-background-primary rounded-[16px] sm:px-4 p-3 sm:py-3  sm:gap-3 text-white font-[500] text-[14px] leading-[20px] tracking-[0.1px]">
            <FilterIcon />
            <div className=" sm:block hidden">Filter view</div>
          </button>
        </div>
        <SearchInputField placeholder="Search for users with any related keyword" />
      </div>
      <button
        onClick={onAdd}
        className="items-center rounded-[16px] text-white bg-background-primary flex gap-1 sm:gap-3 whitespace-nowrap sm:text-[14px] p-3 sm:px-5 sm:py-4"
      >
        <BsArrowDownLeftSquareFill size={22} className="rounded-md" />
        <span className="xs:flex hidden items--center sm:normal-case capitalize">
          <span className="sm:block hidden">Request</span>&nbsp;new order
        </span>
      </button>
    </div>
  );
};

export default SearchRequestOrder;
