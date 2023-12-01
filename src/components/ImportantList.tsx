import ListLeftIcon from "../assets/icons/list-arrow-right.svg?react";

const ImportantList = ({
  selected = false,
  title,
}: {
  selected?: boolean;
  title: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <ListLeftIcon className="min-w-[2rem]" fill={selected ? "#B3261E" : "#21005D"}  />
      <div className="font-[500] leading-[16px] tracking-[0.5px] text-[14px]">{title}</div>
    </div>
  );
};

export default ImportantList;
