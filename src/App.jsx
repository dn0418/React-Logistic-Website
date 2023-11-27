import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ShopForMe from "./pages/dashboard/ShopForMe";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
