import { Step, StepButton, StepLabel, Stepper } from "@mui/material";
import Title from "../Title";
import React from "react";
import { motion } from "framer-motion";
import OrderPackageInformation from "./OrderPackageInformation";
import OrderBillingAddress from "./OrderBillingAddress";

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

const PlaceOrder = ({ onBack }: { onBack: () => void }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Title title="Confirm and Place your Order" />
      <Stepper nonLinear activeStep={activeStep} orientation="horizontal">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepButton
              onClick={() => {
                setActiveStep(index);
              }}
            >
              <StepLabel>{step.label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div className="overflow-x-hidden relative">
        <motion.div
          className="w-full flex flex-col gap-5"
          animate={{
            translateX: `-${activeStep * 120}%`,
          }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <OrderPackageInformation
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            onBack={onBack}
          />
        </motion.div>
        <motion.div
          className="w-full flex flex-col absolute top-0 gap-5"
          animate={{
            translateX: `${120 - activeStep * 120}%`,
          }}
          style={{
            translateX: `${120 - activeStep * 120}%`,
          }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <OrderBillingAddress
            handleBack={handleBack}
            handleNext={handleNext}
          />
        </motion.div>
      </div>
    </>
  );
};

export default PlaceOrder;
