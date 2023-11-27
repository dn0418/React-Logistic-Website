import React from "react";
import NoOrder from "./NoOrder";

const Requests = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="my-3">
      {show ? (
        <div className="bg-white rounded-[20px] p-4"></div>
      ) : (
        <NoOrder
          desc={
            "You have not requested for any shop for me order before, would you like to request for a new order?"
          }
          handleShowRequestForm={() => setShow(true)}
        />
      )}
    </div>
  );
};

export default Requests;
