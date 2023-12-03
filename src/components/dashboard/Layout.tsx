import Sidebar from "./Sidebar.tsx";
import Navigation from "./Navigation";
import { SwipeableDrawer } from "@mui/material";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-background-secondary flex">
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Sidebar />
      </SwipeableDrawer>
      <div className="md:block hidden">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navigation openDrawer={() => {
          setOpen(true);
        }} />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
