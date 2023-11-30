import LeftIcon from "../assets/icons/arrow-circle-right.svg?react";

const Question = ({
  question,
  underline = false,
}: {
  question: string;
  underline?: boolean;
}) => {
  return (
    <div className="flex items-start w-full gap-2">
      <LeftIcon className="min-w-[25px]" />
      <div
        className={`${
          underline ? "sm:border-b border-[#79747E] sm:pb-2" : ""
        } w-full text-text-outline font-[500] leading-[20px] tracking-[0.1px]`}
      >
        {question}
      </div>
    </div>
  );
};

export default Question;
