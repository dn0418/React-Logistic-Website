import {
  FormControlLabel,
  Paper,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Question from "../Question";
import { formatMoney } from "../../utils/formatter";
import SubQuestionAnswer from "../SubQuestionAnswer";
import { RadioInputField } from "../../helpers/FormFields";
import Notice from "../Notice";
import ImportantList from "../ImportantList";
import WalletIcon from "../../assets/icons/wallet.svg?react";

const OrderPlaceOrder = ({ handleNext }: { handleNext: () => void }) => {
  const data = [
    {
      title: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
      image: "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
      url: "https://you.com",
      storeCost: 88.99,
      urgentPurchase: 88.99,
      quantity: 3,
      totalValue: 112.49,
    },
    {
      title: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
      image: "https://static.frame.work/3vwhvbza41miqua8ncddi50s6jeq",
      url: "https://you.com",
      storeCost: 88.99,
      urgentPurchase: 88.99,
      quantity: 3,
      totalValue: 112.49,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-text-variant mdd:text-[24px] text-[19px] leading-[32px]">
        Request ID:&nbsp;
        <b className="leading-[36px]">R78667</b>
      </div>
      <Question question="Package Details" underline />
      <TableContainer
        sx={{
          "&.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root":
            {
              borderRadius: 5,
              border: "1px solid #CAC4D0",
              boxShadow: "none",
            },
        }}
        component={Paper}
      >
        <Table>
          <caption>
            <div className="p-4 flex flex-col whitespace-nowrap w-full gap-8">
              <div className="flex gap-24 w-full">
                <SubQuestionAnswer
                  question={
                    <>
                      Total number
                      <br />
                      of items
                    </>
                  }
                  className="flex flex-col gap-1"
                  answer="6"
                />
                <SubQuestionAnswer
                  question={
                    <>
                      Total Gross
                      <br />
                      weight
                    </>
                  }
                  className="flex flex-col gap-1"
                  answer="30lbs"
                />
                <SubQuestionAnswer
                  className="flex flex-col gap-1"
                  question={
                    <>
                      Total Items Cost from
                      <br />
                      Store
                    </>
                  }
                  answer="30lbs"
                />
              </div>
              <div className="flex gap-24 w-full">
                <SubQuestionAnswer
                  question={
                    <>
                      Processing
                      <br />
                      fee
                    </>
                  }
                  className="flex flex-col gap-1"
                  answer="$345.00"
                />
                <SubQuestionAnswer
                  question={
                    <>
                      Urgent
                      <br />
                      Purchase fee
                    </>
                  }
                  className="flex translate-x-4 flex-col gap-1"
                  answer="$0.00"
                />
                <SubQuestionAnswer
                  className="flex flex-col gap-1"
                  question={
                    <>
                      Total Shipping to Origin
                      <br />
                      Warehouse Cost
                    </>
                  }
                  answer="$0.00"
                />
                <SubQuestionAnswer
                  className="flex flex-col gap-1"
                  question={
                    <>
                      Total Shop For
                      <br />
                      Me Cost
                    </>
                  }
                  answer="$0.00"
                />
              </div>
            </div>
          </caption>
          <TableHead
            sx={{
              background: "#F4EFF4",
            }}
          >
            <TableRow>
              <TableCell>Items</TableCell>
              <TableCell>Item URL</TableCell>
              <TableCell>
                Item Cost From
                <br />
                Store
              </TableCell>
              <TableCell>
                Urgent
                <br />
                Purchase
              </TableCell>
              <TableCell>
                Quantity
                <br />
                Of Items
              </TableCell>
              <TableCell>
                Total Value
                <br />
                of Item
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="flex gap-1 ml-3 min-w-[15rem] items-center">
                  <img
                    src={item.image}
                    className="min-w-[61.54px] h-[54.75px] object-cover rounded-[2.66px]"
                  />

                  <span className="font-[500] text-[14px] text-ellipsis max-w-[10rem]">
                    {item.title}
                  </span>
                </TableCell>
                <TableCell className="min-w-[5rem] w-fit">
                  <a
                    href={item.url}
                    className="text-text-secondary w-fit whitespace-nowrap font-[500] text-[15px]"
                  >
                    {item.url}
                  </a>
                </TableCell>
                <TableCell className="font-[500] min-w-[8.5rem] text-[14px]">
                  {formatMoney(item.storeCost, "USD")}
                </TableCell>
                <TableCell className="font-[500] min-w-[8.5rem] text-[14px]">
                  {formatMoney(item.storeCost, "USD")}
                </TableCell>
                <TableCell className="font-[500] min-w-[6rem] text-[14px]">
                  {item.quantity}
                </TableCell>
                <TableCell className="font-[500] min-w-[7rem] text-[14px]">
                  <span>{formatMoney(item.totalValue, "USD")}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Question question="Payment Methods" />
      <div className="text-[#49454F] font-[400] text-[22px]">
        Select The Payment Method You Wish to Use
      </div>
      <RadioGroup className="flex flex-col gap-4">
        <div className="pt-[10px] pb-[22px] h-fit flex flex-col gap-4 px-[13px] sm:px-[40px] border rounded-[20px] border-background-outline">
          <FormControlLabel
            value="credit-debit"
            sx={{
              ".MuiFormControlLabel-label": {
                width: "100%",
                fontWeight: "500",
                marginLeft: 2,
              },
            }}
            control={<RadioInputField />}
            label="Credit/Debit Cards - Pay with Dollar/US Cards"
          ></FormControlLabel>
          <span className="text-[#49454F] text-[18px]">
            Valid for MasterCard and Visa Cards. Maximum allowed is $1,500
          </span>
        </div>
        <div className="pt-[10px] pb-[22px] h-fit flex flex-col gap-4 px-[13px] sm:px-[40px] border rounded-[20px] border-background-outline">
          <FormControlLabel
            value="credit-debit"
            sx={{
              ".MuiFormControlLabel-label": {
                width: "100%",
                fontWeight: "500",
                marginLeft: 2,
              },
            }}
            control={<RadioInputField />}
            label="Paystack - Pay with Naira Card"
          ></FormControlLabel>
          <span className="text-[#49454F] text-[18px]">
            Pay with Your Naira Card
          </span>
        </div>
        <div className="pt-[10px] pb-[10px] h-fit flex flex-col gap-4 px-[13px] sm:px-[40px] border rounded-[20px] border-background-outline">
          <FormControlLabel
            value="credit-debit"
            sx={{
              ".MuiFormControlLabel-label": {
                width: "100%",
                fontWeight: "500",
                marginLeft: 2,
              },
            }}
            control={<RadioInputField />}
            label="Pay At Bank in $ - Nigeria"
          ></FormControlLabel>
        </div>
        <div className="pt-[10px] pb-[10px] h-fit flex flex-col gap-4 px-[13px] sm:px-[40px] border rounded-[20px] border-background-outline">
          <FormControlLabel
            value="credit-debit"
            sx={{
              ".MuiFormControlLabel-label": {
                width: "100%",
                fontWeight: "500",
                marginLeft: 2,
              },
            }}
            control={<RadioInputField />}
            label="Pay At Bank in Naira - Nigeria"
          ></FormControlLabel>
        </div>
        <div className="pt-[10px] pb-[10px] h-fit flex flex-col gap-4 px-[13px] sm:px-[40px] border rounded-[20px] border-background-outline">
          <FormControlLabel
            value="credit-debit"
            sx={{
              ".MuiFormControlLabel-label": {
                width: "100%",
                fontWeight: "500",
                marginLeft: 2,
              },
            }}
            control={<RadioInputField />}
            label="Pay Via PayPal"
          ></FormControlLabel>
        </div>
      </RadioGroup>
      <div className="flex w-full gap-6">
        <div className="flex gap-4 w-1/2 flex-col">
          <Question question="Take Note" />
          <Notice
            title="IMPORTANT NOTICE"
            notice="We do not ship or return any fraudulent purchased items. You are advised to only pay to ship items that uou can provide valid evidence of proof of purchase when and if requested. Items for which valid proof of purchase can be provided will be handed over to the CUSTOMS. In addition any shipping cost paid will be forfeited and billed to you as cost of verification."
          />
        </div>
        <div className="flex gap-4 w-[75%] flex-col">
          <Question question="Order Costs" />
          <div className="bg-[#21005D] flex text-white rounded-[20px] gap-2 flex-col px-7 py-4">
            <div className="font-[400] leading-[28px] text-[22px]">
              Order Costs Summary
            </div>
            <div className="flex flex-col">
              <div className="border-b-[0.5px] text-[14px] font-[600] tracking-[0.1px] leading-[20px] border-[#CAC4D0] py-3 flex justify-between">
                <div>Total Urgent Purchase Cost:</div>
                <div>$126.66</div>
              </div>
              <div className="border-b-[0.5px] text-[14px] font-[600] tracking-[0.1px] leading-[20px] border-[#CAC4D0] py-3 flex justify-between">
                <div>Total Cost of Items from Store:</div>
                <div>$126.66</div>
              </div>
              <div className="border-b-[0.5px] text-[14px] font-[600] tracking-[0.1px] leading-[20px] border-[#CAC4D0] py-3 flex justify-between">
                <div>Total Shipping to Origin Warehouse cost:</div>
                <div>$126.66</div>
              </div>
              <div className="border-b-[0.5px] text-[14px] font-[600] tracking-[0.1px] leading-[20px] border-[#CAC4D0] py-3 flex justify-between">
                <div>Total Processing fee:</div>
                <div>$126.66</div>
              </div>
              <div className="border-b-[0.5px] text-[14px] font-[600] tracking-[0.1px] leading-[20px] border-[#CAC4D0] py-3 flex justify-between">
                <div>VAT:</div>
                <div>$126.66</div>
              </div>
              <div className="border-b-[0.5px] text-[14px] font-[600] tracking-[0.1px] leading-[20px] border-[#CAC4D0] py-3 flex justify-between">
                <div>Payment Method Surcharge:</div>
                <div>$126.66</div>
              </div>
              <div className="border-b-[0.5px] text-[14px] font-[600] tracking-[0.1px] leading-[20px] border-[#CAC4D0] py-3 flex justify-between">
                <div>Discount:</div>
                <div>-$126.66</div>
              </div>
              <div className="flex mt-3 justify-between items-end">
                <div className="flex flex-col gap-1">
                  <div className="text-[14px] font-[600] tracking-[0.1px] leading-[20px]">
                    Total:
                  </div>
                  <div className="font-[400] text-[22px] leading-[28px] ">
                    $126.66
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-3 flex-col gap-2">
            <ImportantList
              selected
              title="The total you are paying now includes only the shop-for-me cost and excludes Shipment Cost which you are to pay upon arrival/clearing of your package"
            />
            <ImportantList title="Prices and subtotals are displayed including taxes" />
            <ImportantList title="Discounts are calculated based on prices and subtotals taken without considering taxes" />
          </div>
          <button
            onClick={handleNext}
            className="rounded-[100px] mt-7 w-fit mx-auto text-white flex items-center gap-3 justify-center px-3 sm:px-10 py-[8px] sm:py-2 font-medium bg-[#B3261E]"
          >
            <WalletIcon color="#fff" />
            <div className="flex whitespace-nowrap items-center gap-2">
              Pay Now
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaceOrder;
