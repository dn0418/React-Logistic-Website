import React from "react";

const Notice = ({
  list = false,
  title,
  notice,
}: {
  list?: boolean;
  title?: string;
  notice: string;
}) => {
  return (
    <div
      className={`bg-background-important  ${
        list ? "p-5 rounded-xl" : "py-4 px-5 rounded-3xl"
      }`}
    >
      <div className="text-text-important mb-2 font-medium text-[16px] tracking-[0.1px] leading-[20px]">
        {title}
      </div>
      {list ? (
        <ul className="list-disc mt-4 ml-5">
          <li
            dangerouslySetInnerHTML={{ __html: notice }}
            className="text-[14px] font-[500] leading-[20px] text-[#49454F] tracking-[0.25px]"
          ></li>
        </ul>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: notice }}
          className="text-[14px] font-[500] leading-[20px] text-[#49454F] tracking-[0.25px]"
        ></div>
      )}
    </div>
  );
};

export default Notice;
