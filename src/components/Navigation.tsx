import React, { useEffect } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import {
  Divider,
  Tabs,
  Badge,
  Breadcrumbs,
  Tab,
  TabProps,
} from "@mui/material";
import NotificationIcon from "../assets/icons/notification.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import { FaCaretDown } from "react-icons/fa6";
import HomeIcon from "../assets/icons/home.svg?react";
import ArrowLeft from "../assets/icons/arrow-left.svg?react";

const Navigation: React.FC = () => {
  const location = useLocation();

  const configureTitle = (path: string) => {
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
  const tabs = ["orders", "requests", "draft"];
  let locationArray = location.pathname.split("/").slice(2);

  const [value, setValue] = React.useState<number>(
    tabs.indexOf(locationArray[locationArray.length - 1])
  );

  useEffect(() => {
    setValue(tabs.indexOf(locationArray[locationArray.length - 1]));
  }, [locationArray]);

  return (
    <div className="rounded-b-[20px] border-b-background-outline border-b-[1px] sticky z-40 top-0 w-full bg-white">
      <div className="flex justify-between pl-[40px] pt-[26px] pb-[18px] pr-[26px]  ">
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
            <Link to={location.pathname.split("/")[1]}>
              {location.pathname.split("/")[1].replace(/-/g, " ")}
              {/* {title !== "Home" &&
                " - " + tabs[value]} */}
            </Link>
            <div className="cursor-pointer">{tabs[value]}</div>
          </Breadcrumbs>
        </div>
        <div className="flex gap-3 items-center">
          <Badge
            badgeContent={" "}
            color="error"
            overlap="circular"
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
      <Divider className="-mt-[0.6px] text-[#79747E] " />
      <Tabs
        value={value}
        onChange={(_, value) => {
          setValue(value);
        }}
        className="ml-5 -mt-1"
        TabIndicatorProps={{
          children: (
            <div className="h-[10px] -translate-y-[2px] rounded-t-[5px] w-[60%] bg-text-secondary" />
          ),
          className: "bg-transparent flex justify-center",
        }}
        sx={{
          "& .MuiTab-root": {
            color: "#49454F",
            textTransform: "capitalize",
            "&.Mui-selected": {
              color: "#6750A4",
            },
          },
        }}
      >
        {/* <Tab href="/orders" label="Orders"></Tab>
        <Tab label="Requests" />
        <Tab label="Draft" /> */}
        {tabs.map((tab, index) => (
          <Tab
            to={`/${location.pathname.split("/")[1]}/${tab}`}
            key={index}
            label={tab}
            LinkComponent={Link}
          ></Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Navigation;
