import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./Orders";
import Requests from "./Requests";
import Draft from "./Draft";
import NotFound from "../NotFound";

const ShopForMe = () => {

  return (
    <Routes>
      <Route path="/orders" element={<Orders />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/draft" element={<Draft />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ShopForMe;
