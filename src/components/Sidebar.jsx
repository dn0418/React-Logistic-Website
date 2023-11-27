import React from "react";
import { SwipeableDrawer, Divider } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userState } from "../utils/atom";
import { NameInitialsAvatar } from "react-name-initials-avatar";
import HomeIcon from "../assets/icons/home.svg?react";
import ShopIcon from "../assets/icons/shop.svg?react";
import ExportIcon from "../assets/icons/export.svg?react";
import ImportIcon from "../assets/icons/import.svg?react";
import CarIcon from "../assets/icons/car.svg?react";
import RoutingIcon from "../assets/icons/routing-2.svg?react";
import WalletIcon from "../assets/icons/wallet-3.svg?react";
import CalculatorIcon from "../assets/icons/calculator.svg?react";
import CeloIcon from "../assets/icons/celo.svg?react";
import SettingsIcon from "../assets/icons/setting-3.svg?react";
import { Link, useLocation } from "react-router-dom";

const NameDisplay = () => {
  const { username, id } = useRecoilValue(userState);
  return (
    <div className="bg-background-variant mr-4 py-4  rounded-r-[20px] px-2 flex gap-2">
      <NameInitialsAvatar
        name={username}
        textSize="16px"
        textWeight="400"
        bgColor="#CAC4D0"
        textColor="#1D192B"
        borderWidth="0px"
      />

      <div className="flex flex-col">
        <div className="text-[14px] tracking-[0.25px] leading-[20px] text-text-primary">
          Welcome back
        </div>
        <div className="flex gap-[10px]">
          <div className="text-[16px] tracking-[0.5px] leading-[24px] text-text-primary">
            {username}
          </div>
          <div className="font-bold gap-1 text-white tracking-[0.5px] leading-[24px] flex">
            <div>ID:</div>
            <div>{id}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const navs = [
    {
      title: "Home",
      icon: <HomeIcon />,
      path: "",
    },
    {
      title: "Shop For Me",
      icon: <ShopIcon />,
      path: "/shop-for-me",
    },
    {
      title: "Export",
      icon: <ExportIcon />,
      path: "/export",
    },
    {
      title: "Import",
      icon: <ImportIcon />,
      path: "/import",
    },
    {
      title: "Auto Import",
      icon: <CarIcon />,
      path: "/auto-import",
    },
    {
      title: "Tracking",
      icon: <RoutingIcon />,
      path: "/tracking",
    },
    {
      title: "Billing",
      icon: <WalletIcon />,
      path: "/billing",
    },
  ];

  const otherNavs = [
    {
      title: "Get a Quote",
      icon: <CalculatorIcon />,
      path: "/get-a-quote",
    },
    {
      title: "Help",
      icon: <CeloIcon />,
      path: "/help",
    },
    {
      title: "Settings",
      icon: <SettingsIcon />,
      path: "/settings",
    }
  ]

  const location = useLocation();
  
  return (
    <div className="flex overflow-scroll sticky bottom-0 left-0 top-0 bg-background-primary pt-9  h-screen w-[266px] flex-col justify-between">
        <NameDisplay />
        <div className="flex flex-col mt-10 gap-1">
          {navs.map((nav, index) => (
            <Link
              to={nav.path}
              key={index}
              className={`flex py-[13px] transition-all duration-1000 cursor-pointer hover:bg-[url('/wow.svg')] ${
                location.pathname.split("/")[1] === nav.path.slice(1)
                  ? "bg-[url('/wow.svg')]"
                  : ""
              } items-center pl-[15px] gap-[15px]`}
            >
              {nav.icon}
              <span className="text-text-primary tracking-[0.5px] leading-[24px] text-[16px]">
                {nav.title}
              </span>
            </Link>
          ))}
      </div>
      <div className="flex mt-[6rem] flex-col">
        <Divider className="text-background-outline bg-background-outline mx-6" /> 
        {otherNavs.map((nav, index) => (
          <Link
            to={nav.path}
            key={index}
            className={`flex py-[13px] transition-all duration-1000 cursor-pointer hover:bg-[url('/wow.svg')] ${
              location.pathname.split("/")[1] === nav.path.slice(1)
                ? "bg-[url('/wow.svg')]"
                : ""
            } items-center pl-[15px] gap-[15px]`}
          >
            {nav.icon}
            <span className="text-text-primary tracking-[0.5px] leading-[24px] text-[16px]">
              {nav.title}
            </span>
          </Link>
        ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
