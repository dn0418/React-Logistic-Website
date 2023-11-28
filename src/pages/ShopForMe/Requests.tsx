import React from "react";
import NoOrder from "./NoOrder";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import DynamicForm from "../../forms/Form";

const Requests: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();

  // check url if the query says ?request=order
  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const request = urlParams.get("request");

    if (request === "order") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  const schema = z.object({
    name: z.string(),
  });

  return (
    <div className="py-5 pl-10 pr-32">
      {show ? (
        <div className="bg-white flex flex-col gap-6 rounded-[20px] p-6">
          <div className="border border-dashed px-6  py-4 text-[25px] leading-[36px] border-text-secondary text-text-secondary rounded-[20px]">
            Requesting For New Shop For Me Service
          </div>
          <div className="bg-background-important rounded-xl p-5">
            <div className="text-text-important font-medium text-[14px] tracking-[0.1px] leading-[20px]">
              IMPORTANT NOTICE:
            </div>
            <ul className="list-disc mt-4 ml-5">
              <li className="text-[14px] leading-[20px] text-[#49454F] tracking-[0.25px]">
                Even though you will be paying for your <b>shipping cost</b>{" "}
                when your items arrive our office in Nigeria, you will be
                required to pay for the <b>procurement/shop for me cost</b> for
                your items before we process your order.
              </li>
            </ul>
          </div>
          <DynamicForm
            schema={schema}
            metadata={{
              name: {
                label: "Name",
                placeholder: "Enter your name",
              },
            }}
            questions={[
              {
                question: "",
                metadata: {
                  name: {
                    label: "Name",
                    placeholder: "Enter your name",
                  },
                },
              },
            ]}
            onSubmit={() => {}}
          />
        </div>
      ) : (
        <NoOrder
          desc={
            "You have not requested for any shop for me order before, would you like to request for a new order?"
          }
        />
      )}
    </div>
  );
};

export default Requests;
