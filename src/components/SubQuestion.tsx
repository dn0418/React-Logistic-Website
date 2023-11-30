import React from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";

const SubQuestion = ({
  leftContent,
}: {
  leftContent: string | React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-text-important-2 font-[400] text-[18px] leading-[28px]">
        {leftContent}
      </div>
      <IoChevronUpCircleOutline size={25} color="#292D32" />
    </div>
  );
};

export default SubQuestion;
