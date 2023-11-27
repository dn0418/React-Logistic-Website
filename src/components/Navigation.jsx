import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Divider, Tabs, Badge, Breadcrumbs, Tab } from "@mui/material";
import NotificationIcon from "../assets/icons/notification.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import { FaCaretDown } from "react-icons/fa6";
import HomeIcon from "../assets/icons/home.svg?react";
import ArrowLeft from "../assets/icons/arrow-left.svg?react";

const Navigation = () => {
  const location = useLocation();

  const configureTitle = (path) => {
    // check if it includes something
    if (path.includes("/shop-for-me")) {
      return "Shop For Me";
    } else if (path.includes("export")) {
      return "Export";
    } else if (path.includes("import")) {
      return "Import";
    } else if (path.endsWith("/")) {
      return "Home";
    }
  };

  let title = configureTitle(location.pathname);

  const [value, setValue] = React.useState(0);

  return (
    <div className="rounded-b-[20px] sticky z-40 top-0 w-full bg-white">
      <div className="flex justify-between pl-[40px] pt-[26px] pb-[18px] pr-[18px]  ">
        <div className="flex gap-[10px] flex-col">
          <div className="text-[28px] text-background-primary leading-[36px]">
            {title || "Dashboard"}
          </div>
          <Breadcrumbs
            separator={title === "Home" ? null : <ArrowLeft className="mx-1" />}
          >
            <Link to="/">
              <HomeIcon width={20} />
            </Link>
            <Link to="/shop-for-me">
              {location.pathname.split("/")[1]} -{" "}
              {["orders", "requests", "draft"][value]}
            </Link>
          </Breadcrumbs>
        </div>
        <div className="flex gap-3 items-center">
          <Badge
            badgeContent={" "}
            color="error"
            overlap="circular"
            size="large"
            variant="dot"
          >
            <NotificationIcon className="cursor-pointer" />
          </Badge>
          <div className="flex cursor-pointer items-center">
            <UserIcon />
            <FaCaretDown size={20} color="#79747E" />
          </div>
        </div>
      </div>
      <Divider />
      <Tabs
        value={value}
        onChange={(e, value) => setValue(value)}
        textColor="secondary"
        indicatorColor="secondary"
        className=""
      >
        <Tab label="Orders" />
        <Tab label="Requests" />
        <Tab label="Draft" />
      </Tabs>
    </div>
  );
};

export default Navigation;
