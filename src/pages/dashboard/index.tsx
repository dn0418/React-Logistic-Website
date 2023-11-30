import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import ShopForMe from "./ShopForMe";
import NotFound from "./NotFound";

const Dashboard = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/shop-for-me/*" element={<ShopForMe />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Dashboard;
