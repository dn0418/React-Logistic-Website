import { IoAddOutline } from "react-icons/io5";

const AddButton = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <button
      className={
        "bg-[rgb(73,69,79)] text-white rounded-[20px] flex items-center gap-3 px-7 sm:w-fit w-full justify-center py-[13px] " +
        className
      }
    >
      <IoAddOutline size={20} />
      {title}
    </button>
  );
};

export default AddButton;
