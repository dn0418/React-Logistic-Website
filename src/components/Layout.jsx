import React from "react";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#F4EFF4] flex">
      <Sidebar />
      <div className="flex-1">
        <Navigation />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
