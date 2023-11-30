import { FC, useEffect } from "react";
import Logo from "../../assets/icons/Logo.svg?react";
import Icon24 from "../../assets/icons/icon-24.svg?react";
import { CommonInputField, SelectInput } from "../../helpers/FormFields";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [formStep, setFormStep] = React.useState(0);
  const countries: { value: string; label: string }[] = [
    { value: "United States", label: "United States" },
    { value: "United States", label: "United States" },
    { value: "United States", label: "United States" },
    { value: "United States", label: "United States" },
    { value: "United States", label: "United States" },
  ];

  useEffect(() => {
    document.title = "RAC Logistics - Register";
  }, []);

  return (
    <div className="w-full relative text-white bg-background-primary flex flex-col items-center py-20">
      <div className="flex items-center mb-10">
        <Logo />
        <div className="flex flex-col uppercase -space-y-1">
          <h1 className="font-extrabold text-6xl">RAC</h1>
          <h4 className="font-extrabold text-2xl">logistics</h4>
        </div>
      </div>
      <form className="relative min-h-[55rem] w-1/2 overflow-x-hidden">
        <motion.div
          className={cn("flex flex-col", {})}
          animate={{
            translateX: `-${formStep * 100}%`,
          }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <div className="p-[4rem] text-black min-h-[20rem] rounded-3xl bg-white flex flex-col items-center">
            {/* form step 1 */}
            <h3 className="text-zinc-500 text-2xl uppercase mb-20">
              CREATE YOUR ACCOUNT
            </h3>

            <SelectInput
              name="countries"
              defaultValue="Select Origin"
              label="country"
              addExclamation={false}
              options={countries}
              className="w-full border mb-5"
            />
            <CommonInputField
              type="text"
              placeholder="Enter your first name"
              label="First Name"
              className="w-full border mb-5"
            />
            <CommonInputField
              type="text"
              placeholder="Enter your last name"
              label="Last Name"
              className="w-full border mb-5"
            />
            <CommonInputField
              type="email"
              placeholder="Enter Your Email"
              label="Email"
              className="w-full border mb-5"
            />
            <CommonInputField
              type="password"
              placeholder="Enter Your password"
              label="password"
              className="w-full border mb-5"
            />
            {/* <div className="flex items-center border border-black w-full">
          <SelectInput className="w-1/3 border" name="countries" addExclamation={false} defaultValue="Select Origin" label="country" options={[{ value: "Nigeria +234", label: "Nigeria +234" }, { value: "Nigeria +234", label: "Nigeria +234" }]} />
          <CommonInputField type="email" placeholder="Enter Your Email" label="Email" className="border border-black" />
        </div> */}
            <button
              type="button"
              onClick={() => {
                setFormStep(1);
              }}
              className="bg-[#6750A4] mt-10 py-2 px-6 rounded-full font-semibold text-white"
            >
              Proceed
            </button>
          </div>
          <div className={cn("flex items-center gap-3 mb-2 self-center mt-5")}>
            <p className="font-bold text-lg">Already have an account?</p>{" "}
            <Link to="/auth/login" className="font-bold text-[#D0BCFF]">
              login
            </Link>
          </div>
        </motion.div>
        {/* form step 2 */}
        <motion.div
          className={cn(
            "p-20 absolute top-0 left-0 text-black rounded-3xl bg-white flex flex-col items-center right-0",
            {}
          )}
          animate={{
            translateX: `${100 - formStep * 100}%`,
          }}
          style={{
            translateX: `${100 - formStep * 100}%`,
          }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <h3 className="text-zinc-500 text-3xl mb-3">Just one more step</h3>
          <p className="mb-10">
            <span className="font-bold text-lg text-stone-500">Dear Rex,</span>
            Provide us your contact address
          </p>
          <SelectInput
            name="countries"
            defaultValue="Enter your country"
            label="country"
            addExclamation={false}
            options={countries}
            className="w-full border mb-5"
          />
          <SelectInput
            name="countries"
            defaultValue="Enter your country"
            label="State"
            addExclamation={false}
            options={countries}
            className="w-full border mb-5"
          />
          <SelectInput
            name="countries"
            defaultValue="Enter your country"
            label="City"
            addExclamation={false}
            options={countries}
            className="w-full border mb-5"
          />
          <CommonInputField
            type="text"
            placeholder="Enter your street address"
            label="Street Address"
            className="w-full border mb-5"
          />
          <CommonInputField
            type="text"
            placeholder="Enter your Zip or Postal Code"
            label="Zip/Postal Code"
            className="w-full border mb-5"
          />
          <button
            type="button"
            onClick={() => {
              setFormStep(1);
            }}
            className="bg-[#6750A4] hover:opacity-80 transition-all hover:scale-105 mt-10 py-2 px-6 rounded-full font-semibold text-white"
          >
            Create My Account
          </button>

          <p className="text-center max-w-md mt-5 text-black font-semibold text-lg">
            You accept the privacy statement of RAC Logistics by clicking the{" "}
            <Link to={"/auth/register"} className="text-text-secondary">
              Create My Account
            </Link>{" "}
            button
          </p>
        </motion.div>
        {/* <div className="flex gap-2">
        <button
          type="submit"
          className={cn({
            hidden: formStep == 0,
          })}
        >
          Submit
        </button>
      </div> */}
      </form>
      <p className="shadow-sm rounded-full fixed bottom-10 right-10 bg-text-secondary text-white px-3 py-2 gap-2 tracking-[0.1px] text-[14px] font-medium flex items-center">
        <Icon24 />
        <span>need help?</span>
      </p>
    </div>
  );
};

export default Register;
