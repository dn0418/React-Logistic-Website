import React, { useEffect } from "react";
import NoOrder from "./NoOrder";
import { useLocation } from "react-router-dom";
import RequestOrderForm from "../../../forms/RequestOrder";
import { useRecoilValue } from "recoil";
import { ordersRequestState } from "../../../utils/atom";
import RequestOrderTable from "../../../tables/RequestOrderTable";
// import OrderRequest from "../../../views/dashboard/OrderRequest";

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
  return (
    show !== undefined && (
      <>
        {show ? (
          <RequestOrderForm />
        ) : requests.length > 0 ? (
          <>
            <RequestOrderTable setShow={setShow} />
          </>
        ) : (
          <NoOrder desc="You have not requested for any shop for me order before, would you like to request for a new order?" />
        )}
      </>
    )
  );
};

export default Requests;
