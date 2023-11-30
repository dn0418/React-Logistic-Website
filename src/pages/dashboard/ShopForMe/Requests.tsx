import React, { useEffect } from "react";
import NoOrder from "./NoOrder";
import { useLocation, useNavigate } from "react-router-dom";
import RequestOrderForm from "../../../forms/RequestOrder";
import { useRecoilValue } from "recoil";
import { ordersRequestState } from "../../../utils/atom";
import OrderRequest from "../../../views/dashboard/OrderRequest";
import { Badge, Modal } from "@mui/material";
import SearchRequestOrder from "../../../searching/RequestOrder";
import { orderRequest } from "../../../types/orderRequest";
import UniqueOrderRequest from "../../../views/dashboard/UniqueOrderRequest";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import PlaceOrder from "../../../components/dashboard/PlaceOrder";

const Requests: React.FC = () => {
  const [show, setShow] = React.useState<boolean>();
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

  useEffect(() => {
    document.title = "Shop For Me | Requests";
  }, []);

  const requests = useRecoilValue(ordersRequestState);
  const [currentRequest, setCurrentRequest] =
    React.useState<orderRequest | null>(null);
  const navigate = useNavigate();
  const [currentShow, setCurrentShow] = React.useState<"view" | "place">(
    "view"
  );

  return (
    show !== undefined && (
      <div className="sm:px-6 px-2">
        {show ? (
          <RequestOrderForm />
        ) : requests.length > 0 ? (
          <div className="pb-5">
            <SearchRequestOrder
              onAdd={() => {
                navigate("/dashboard/shop-for-me/requests?request=order");
              }}
            />
            <Modal
              open={currentRequest !== null}
              onClose={() => {
                setCurrentShow("view")
                setCurrentRequest(null)
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="overflow-x-hidden"
            >
              <>
                {currentShow === "view" && (
                <motion.div
                    className="bg-white overflow-scroll gap-7 rounded-[20px] p-5 sm:p-8 w-[80%] mx-auto flex flex-col my-6 "

                  animate={{
                    translateX: `-${currentShow === "view" ? 0 : 140}%`,
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  <UniqueOrderRequest
                    onProceed={() => {
                      setCurrentShow("place");
                    }}
                    onBack={() => {
                      setShow(false);
                    }}
                    request={currentRequest!}
                  />
                </motion.div>
                )}
                  <motion.div
                    className="bg-white overflow-scroll gap-7 rounded-[20px] p-5 sm:p-8 w-[80%] absolute top-0 left-0 right-0 mx-auto flex flex-col my-6 "
                    animate={{
                      translateX: `${currentShow === "view" ? 150 : 0}%`,
                    }}
                    style={{
                      translateX: `${currentShow === "view" ? 150 : 0}%`,
                       
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    <PlaceOrder
                      onBack={() => {
                        setCurrentShow("view");
                      }}
                    />
                  </motion.div>
              </>
            </Modal>
            <div className="flex flex-col gap-5 mx-auto xs:mx-0 w-fit">
              {requests.map((request, index) => (
                <OrderRequest
                  onClick={() => {
                    setCurrentRequest(request);
                  }}
                  request={request}
                  key={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <NoOrder desc="You have not requested for any shop for me order before, would you like to request for a new order?" />
        )}
      </div>
    )
  );
};

export default Requests;
