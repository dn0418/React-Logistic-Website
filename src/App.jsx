import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ShopForMe from "./pages/ShopForMe";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import DashboardNotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <RecoilRoot>
      <Toaster />
      <Router>
        <Layout>
          <Routes>
            <Route path="/shop-for-me/*" element={<ShopForMe />} />
            <Route path="/*" element={<DashboardNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </RecoilRoot>
  );
};

export default App;
