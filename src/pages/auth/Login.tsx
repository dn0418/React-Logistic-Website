import React, { FC, useEffect } from "react";
import Logo from "../../assets/icons/Logo.svg?react";
import Icon24 from "../../assets/icons/icon-24.svg?react";
import { CommonInputField } from "../../helpers/FormFields";
import { IconButton, InputAdornment } from "@mui/material";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface loginProps {}

const Login: FC<loginProps> = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  useEffect(() => {
    document.title = "RAC Logistics - Login"
  }, [])

  return (
    <div className="w-full relative text-white bg-background-primary flex flex-col items-center py-20">
      <div className="flex items-center mb-10 space-x-2">
        <Logo />
        <div className="flex flex-col uppercase -space-y-1">
          <h1 className="font-bold text-6xl">RAC</h1>
          <h4 className="font-bold text-2xl">logistics</h4>
        </div>
      </div>
      <form className="rounded-3xl w-1/2 py-[3rem] bg-white flex flex-col px-20 items-center">
        <h3 className="text-zinc-500 text-2xl uppercase mb-20">Login</h3>
        <CommonInputField
          type="text"
          placeholder="Enter Your Email"
          label="email"
          className="w-full border mb-[2rem]"
        />
        <CommonInputField
          type="password"
          placeholder="Enter Your Email"
          label="password"
          className="w-full border mb-16"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <button className="bg-[#6750A4] py-2 px-6 rounded-full font-semibold text-white">
          login to your account
        </button>
      </form>
      <div className="flex items-center gap-3 mt-10 mb-2">
        <p className="font-bold text-lg">New to RAC Logistics?</p>{" "}
        <Link to="/auth/register" className="font-bold text-[#D0BCFF]">
          Sign up
        </Link>
      </div>
      {/* <a href="/forgot-password" className="text-[#D0BCFF]">
        Forgot your password?
      </a> */}
      <p className="shadow-sm rounded-full fixed bottom-10 right-10 bg-text-secondary text-white px-3 py-2 gap-2 tracking-[0.1px] text-[14px] font-medium flex items-center">
        <Icon24 />
        <span>need help?</span>
      </p>
    </div>
  );
};

export default Login;
