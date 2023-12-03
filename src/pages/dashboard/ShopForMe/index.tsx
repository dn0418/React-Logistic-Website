import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "./Orders";
import Requests from "./Requests";
import Draft from "./Draft";
import NotFound from "../NotFound";
import PlaceOrder from "./RequestPlaceOrder";

const RequestRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Requests />} />
      <Route path="/place-order" element={<PlaceOrder />} />
    </Routes>
  );
};

const ShopForMe: React.FC = () => {
  useEffect(() => {
    document.title = "Shop For Me | Dashboard";
  }, []);
  return (
    <Routes>
      <Route path="/orders" element={<Orders />} />
      <Route path="/requests/*" element={<RequestRoutes />} />
      <Route path="/draft" element={<Draft />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ShopForMe;
