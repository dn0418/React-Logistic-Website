import React from "react";
import { BsExclamation } from "react-icons/bs";

const SubQuestionAnswer = ({
  question,
  colorize = false,
  answer,
  addExclamation = false,
  ...props
}: {
  question: string | React.ReactNode;
  answer: string | React.ReactNode;
  addExclamation?: boolean;
  colorize?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex flex-col justify-between h-full" {...props}>
      <div className={`${colorize ? "text-text-secondary" : "text-text-important-2"} gap-2 flex items-center font-[400] text-[16px] leading-[20px] tracking-[0.25px]`}>
        {addExclamation && (
          <div className="rounded-full  border-[1.5px] border-border-secondary">
            <BsExclamation color="#B3261E" size={19}/>
          </div>
        )}
        {typeof question === "string" ? question : <>{question}</>}:
      </div>
      {typeof answer === "string" ? (
        <div className={`${colorize ? "text-text-important" : "text-text-variant"} text-[18px] font-[500] leading-[28px]`}>
          {answer}
        </div>
      ) : (
        <div className="font-[500]">
        {answer}
        </div>
      )}
    </div>
  );
};

export default SubQuestionAnswer;
