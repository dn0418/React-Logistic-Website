import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ShopForMe from "./pages/ShopForMe/Index";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <RecoilRoot>
      <Toaster />
      <Router>
        <Layout>
          <Routes>
            <Route path="/shop-for-me/*" element={<ShopForMe />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </RecoilRoot>
  );
};

export default App;
