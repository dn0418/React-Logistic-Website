import React, { useState } from "react";
import Question from "../Question";
import {
  CommonInputField,
  PhoneInput,
  RadioInputField,
  SelectInput,
} from "../../helpers/FormFields";
import { FormControlLabel, RadioGroup } from "@mui/material";
import SubQuestion from "../SubQuestion";
import { Country, State, City } from "country-state-city";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";

const OrderBillingAddress = ({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) => {
  const [location, setLocation] = useState({
    country: null,
    state: null,
    city: null,
  });

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-text-variant mdd:text-[24px] text-[19px] leading-[32px]">
        Request ID:&nbsp;
        <b className="leading-[36px]">R78667</b>
      </div>
      <Question question="Provide your billing address" underline />
      <RadioGroup className="flex flex-col gap-4">
        <div className="py-[10px] h-fit flex flex-col gap-4 px-[15px] sm:px-[25px] border rounded-[20px] border-background-outline">
          <FormControlLabel
            value="female"
            sx={{
              ".MuiFormControlLabel-label": {
                width: "100%",
              },
            }}
            label={
              <div className="w-full">
                <SubQuestion leftContent="Your Default Address" />
              </div>
            }
            control={<RadioInputField className="w-fit" />}
          ></FormControlLabel>
        </div>
        <div className="pt-[10px] pb-[22px] h-fit flex flex-col gap-4 px-[15px] sm:px-[25px] border rounded-[20px] border-background-outline">
          <FormControlLabel
            value="female"
            sx={{
              ".MuiFormControlLabel-label": {
                width: "100%",
              },
            }}
            label={
              <div className="w-full">
                <SubQuestion leftContent="Custom Billing Address" />
              </div>
            }
            control={<RadioInputField className="w-fit" />}
          ></FormControlLabel>
          <div className="w-full gap-6 flex sm:flex-row flex-col items-center">
            <CommonInputField name="firstname" label="First Name" required />
            <CommonInputField name="lastname" label="Last Name" required />
          </div>
          <div className="w-full gap-6 flex sm:flex-row flex-col items-center">
            <CommonInputField name="email" className="sm:w-1/2" label="Email" />
            <PhoneInput
              name="phone"
              label="Contact Phone Number"
              required
              placeholder="Enter contact's phone number"
              className="sm:w-[60%]"
              defaultValue="234"
            />
          </div>
          <CommonInputField name="address" label="Address" required />
          <div className="flex items-center sm:flex-row flex-col gap-4">
            <SelectInput
              name="country"
              label="Country"
              required
              options={Country.getAllCountries().map((country) => ({
                value: country.isoCode,
                label: country.name,
              }))}
              onChange={(v) => {
                setLocation((prev) => ({ ...prev, country: v.target.value }));
              }}
              value={location.country}
              defaultValue="Select Country"
              addExclamation={false}
            />
            <SelectInput
              name="state"
              label="State"
              defaultValue="Select State"
              required
              onChange={(v) => {
                setLocation((prev) => ({ ...prev, state: v.target.value }));
              }}
              options={
                location.country
                  ? State.getStatesOfCountry(location.country).map((state) => ({
                      value: state.isoCode,
                      label: state.name,
                    }))
                  : []
              }
              value={location.state}
              addExclamation={false}
            />
            <SelectInput
              name="city"
              label="City"
              defaultValue="Select City"
              required
              onChange={(e) => {
                setLocation((prev) => ({ ...prev, city: e.target.value }));
              }}
              options={
                location.state
                  ? City.getCitiesOfState(location.country, location.state).map(
                      (city) => ({
                        value: city.name,
                        label: city.name,
                      })
                    )
                  : []
              }
              value={location.city}
              addExclamation={false}
            />
          </div>
          <CommonInputField name="postal_code" label="Zip/Postal Code" />
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center gap-4">
          <button
            onClick={() => {
              handleBack();
            }}
            className="border-[0.88px] justify-center text-text-secondary flex border-border-secondary items-center gap-2 rounded-full py-[8px] sm:py-[10px] px-10"
          >
            <BsArrowLeftCircleFill size={20} />
            Back
          </button>
          <button
            onClick={handleNext}
            className="rounded-[100px] text-white flex items-center gap-3 justify-center px-3 sm:px-20 py-[8px] sm:py-2 font-medium bg-text-secondary"
          >
            <FaCircleCheck />
            <div className="flex whitespace-nowrap items-center gap-2">
              Proceed
            </div>
          </button>
        </div>
      </RadioGroup>
    </div>
  );
};

export default OrderBillingAddress;
