import { RequestStatus } from "../types/orderRequest";

const DisplayStatus = ({ status }: { status: RequestStatus }) => {
  return (
    <div className="flex items-center gap-1">
      <div
        className={`${
          status === "Not Responded"
            ? "border-border-primary border-2 p-[5px]"
            : "bg-text-important p-[6px]"
        } rounded-full`}
      ></div>
      <div
        className={`text-text-secondary leading-[20.3px] font-bold text-sm sm:text-base tracking-[0.13px]`}
      >
        {status}
      </div>
    </div>
  );
};

export default DisplayStatus;
