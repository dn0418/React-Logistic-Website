import React from "react";
import Question from "../Question";

const OrderBillingAddress = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  return (
    <>
      <div className="text-text-variant text-[24px] leading-[32px]">
        Request ID:&nbsp;
        <b className="leading-[36px]">R78667</b>
      </div>
      <Question question="Provide your billing address" underline />
    </>
  );
};

export default OrderBillingAddress;
