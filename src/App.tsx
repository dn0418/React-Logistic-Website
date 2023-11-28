import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ShopForMe from "./pages/ShopForMe";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    </LocalizationProvider>
  );
};

export default App;
