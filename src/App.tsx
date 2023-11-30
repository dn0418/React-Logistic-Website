import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ShopForMe from "./pages/dashboard/ShopForMe";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import NotFound from "./pages/dashboard/NotFound";
import Layout from "./components/dashboard/Layout";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RecoilRoot>
        <Toaster />
        <Router>
            <Routes>
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/auth/*" element={<Auth />}/>
              <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
      </RecoilRoot>
    </LocalizationProvider>
  );
};

export default App;
