import {
  Step,
  StepButton,
  StepIconProps,
  StepLabel,
  Stepper,
  styled,
} from "@mui/material";
import Title from "../Title";
import React, { useEffect } from "react";
import OrderPackageInformation from "./OrderPackageInformation";
import OrderBillingAddress from "./OrderBillingAddress";
import OrderPlaceOrder from "./OrderPlaceOrder";
import SwipeableViews from "react-swipeable-views";
import SuccessConfirmOrder from "./SuccessConfirmOrder";
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

const PlaceOrder = ({
  onBack,
  onChangeHeight,
}: {
  onBack: () => void;
  onChangeHeight: (height: number | null) => void;
}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (activeStep === 1) {
      onChangeHeight(1000);
    } else if (activeStep === 2) {
      onChangeHeight(2100);
    } else if (activeStep === 3) {
      onChangeHeight(1180);
    } else {
      onChangeHeight(null);
    }
  }, [activeStep]);

  return (
    <div className="bg-white gap-7 rounded-[20px] p-[1.6rem] sm:p-8 mx-auto flex flex-col">
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
                          // width: "0px",
                          // overflow: "hidden",
                          // transitionDuration: "0.5s",
                          // transitionProperty: "width",
                          // transitionTimingFunction: "ease-in-out",
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
        resistance
        animateHeight
        index={activeStep}
        onChangeIndex={(index) => {
          setActiveStep(index);
        }}
        className="my-6 border-0 ring-0 h-fit outline-none"
      >
        <OrderPackageInformation
          handleBack={handleBack}
          handleNext={handleNext}
          activeStep={activeStep}
          onBack={onBack}
        />

        <OrderBillingAddress handleBack={handleBack} handleNext={handleNext} />
        <OrderPlaceOrder handleNext={handleNext} />
        <SuccessConfirmOrder
          handleClose={() => {
            setActiveStep(0);
            onBack();
          }}
        />
      </SwipeableViews>
    </div>
  );
};

export default PlaceOrder;
