import React, { useEffect, useState } from "react";
import NoOrder from "./NoOrder";
import { useLocation, useNavigate } from "react-router-dom";
import RequestOrderForm from "../../../forms/RequestOrder";
import { useRecoilValue } from "recoil";
import { ordersRequestState } from "../../../utils/atom";
import OrderRequest from "../../../views/dashboard/OrderRequest";
import { Modal } from "@mui/material";
import SearchRequestOrder from "../../../searching/RequestOrder";
import { orderRequest } from "../../../types/orderRequest";
import UniqueOrderRequest from "../../../views/dashboard/UniqueOrderRequest";
import PlaceOrder from "../../../components/dashboard/PlaceOrder";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

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

  const [height, setHeight] = useState<number | null>(null);

  return (
    show !== undefined && (
      <div className="mdd:px-6 xs:px-4 px-2">
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
                setCurrentShow("view");
                setCurrentRequest(null);
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="overflow-x-hidden"
            >
              <div
                className="w-[90%] duration-1000 transition-all mx-auto"
                style={{
                  height: height ? height : "auto",
                  overflowY: height ? "hidden" : "unset",
                }}
              >
                <SwipeableViews
                  index={
                    currentShow === "view" ? 0 : currentShow === "place" ? 1 : 0
                  }
                  onChangeIndex={(index) => {
                    setCurrentShow(index === 0 ? "view" : "place");
                  }}
                  animateHeight
                  className="my-6 border-0 ring-0 outline-none"
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

                  <PlaceOrder
                    onBack={() => {
                      setCurrentShow("view");
                    }}
                    onChangeHeight={(height) => {
                      setHeight(height);
                    }}
                  />
                </SwipeableViews>
              </div>
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
