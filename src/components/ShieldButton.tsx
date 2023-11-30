import { MdOutlineShield } from "react-icons/md";

const ShieldButton = ({ title }: { title: string }) => {
  return (
    <button className="border-[0.88px] xs:ml-2 ml-auto sm:ml-3 flex border-border-secondary items-center gap-1 sm:gap-2 rounded-full py-2 px-2  sm:px-4">
      <MdOutlineShield size={22} color="#21005D" />
      <div className="text-text-secondary capitalize font-[500] sm:text-base text-[14px] xs:block hidden">{title}</div>
    </button>
  );
};

export default ShieldButton;
