import {
  Step,
  StepButton,
  StepIconProps,
  StepLabel,
  Stepper,
} from "@mui/material";
import Title from "../../../components/Title";
import React from "react";
import OrderPackageInformation from "../../../components/dashboard/OrderPackageInformation";
import OrderBillingAddress from "../../../components/dashboard/OrderBillingAddress";
import OrderPlaceOrder from "../../../components/dashboard/OrderPlaceOrder";
import SwipeableViews from "react-swipeable-views";
import SuccessConfirmOrder from "../../../components/dashboard/SuccessConfirmOrder";
import { HiCheckCircle } from "react-icons/hi2";

const steps = [
  {
    label: "Package confirmation",
  },
  {
    label: "Billing Address",
  },
  {
    label: "Place Order",
  },
  {
    label: "Success",
  },
];

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed } = props;

  return (
    <div
      className={`${
        active ? "bg-[#21005D]" : "bg-[#CAC4D0]"
      } text-white rounded-[20px] ${
        active && props.icon === 4 ? "py-[8px] px-[6px]" : "py-[7px] px-2"
      } font-medium text-[15px]`}
    >
      {active && props.icon === 4 ? <HiCheckCircle size={21} /> : props.icon}
    </div>
  );
}

const PlaceOrder: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="bg-white gap-7 rounded-[20px] p-[1.6rem] sm:p-8 flex flex-col max-w-[calc(100vw-3rem)] md:max-w-[calc(100vw-20rem)]">
      <Title title="Confirm and Place your Order" />
      <Stepper
        connector={null}
        nonLinear
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            sx={{
              ".MuiStepConnector-line": {
                width: 0,
              },
            }}
          >
            <StepButton
              onClick={() => {
                setActiveStep(index);
              }}
            >
              <StepLabel
                sx={{
                  // remove lable when it's not active
                  ".MuiStepLabel-label":
                    index === activeStep
                      ? {}
                      : {
                          display: "none",
                        },
                }}
                StepIconComponent={ColorlibStepIcon}
              >
                {step.label}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <SwipeableViews
        index={activeStep}
        animateHeight
        onChangeIndex={(index) => {
          setActiveStep(index);
        }}
        className="border-0 ring-0 overflow-hidden h-fit outline-none"
      >
        <OrderPackageInformation
          handleBack={handleBack}
          handleNext={handleNext}
          activeStep={activeStep}
        />

        <OrderBillingAddress handleBack={handleBack} handleNext={handleNext} />
        <OrderPlaceOrder handleNext={handleNext} />
        <SuccessConfirmOrder
          handleClose={() => {
            setActiveStep(0);
          }}
        />
      </SwipeableViews>
    </div>
  );
};

export default PlaceOrder;
