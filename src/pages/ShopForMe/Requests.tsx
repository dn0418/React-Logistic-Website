import React from "react";
import NoOrder from "./NoOrder";
import { useLocation } from "react-router-dom";
import RequestOrderForm from "../../forms/RequestOrder";
import { useRecoilValue } from "recoil";
import { ordersRequestState } from "../../utils/atom";
import OrderRequest from "../../views/OrderRequest";

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

  const requests = useRecoilValue(ordersRequestState);

  return (
    <div className="py-5 pl-10 pr-32">
      {show ? (
        <RequestOrderForm />
      ) : requests.length > 0 ? (
        <div>
          <div className="flex flex-col gap-5">
            {requests.map((request, index) => (
              <OrderRequest request={request} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <NoOrder desc="You have not requested for any shop for me order before, would you like to request for a new order?" />
      )}
    </div>
  );
};

export default Requests;
