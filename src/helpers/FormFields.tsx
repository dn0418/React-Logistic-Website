import UploadIcon from "../assets/icons/upload.svg?react";
import {
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
  SelectProps,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  FormHelperText,
  RadioProps,
  Radio,
} from "@mui/material";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { BsExclamationCircle } from "react-icons/bs";
import DollarIcon from "../assets/icons/dollar-square.svg?react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { phoneCodes } from "../utils/countriescodes";

export type SelectOption = {
  value: unknown;
  label: string;
};

export const SelectInput = ({
  options,
  addExclamation = true,
  ...props
}: SelectProps & {
  options: any[];
  defaultValue: string;
  addExclamation?: boolean;
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center gap-2 w-full">
      <TextField
        labelId="demo-simple-select-label"
        id="demo-simple-select-label"
        onChange={(e) => {
          setValue(e.target.value);
          if (props.onChange) props.onChange(e.target.value);
        }}
        value={value}
        select
        {...props}
        sx={{
          // style border color once focused
          ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#6750A4",
            },
        }}
        InputProps={{
          className: "rounded-[20px]",
        }}
        InputLabelProps={{
          sx: {
            // set the color of the label when not shrinked
            color: "#1C1B1F",
            [`&.${inputLabelClasses.focused}`]: {
              // set the color of the label when shrinked (usually when the TextField is focused)
              color: "#6750A4",
            },
          },
        }}
      >
        <MenuItem disabled value={props.defaultValue} key={props.defaultValue}>
          {props.defaultValue}
        </MenuItem>
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {addExclamation && <BsExclamationCircle size={20} color="#79747E" />}
    </div>
  );
};

export const CommonInputField = ({ type, ...props }: TextFieldProps) => {
  const [value, setValue] = useState();
  return (
    <TextField
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value as any);
      }}
      sx={{
        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#6750A4",
        },
      }}
      placeholder={props.placeholder}
      InputLabelProps={{
        sx: {
          color: "#1C1B1F",
          [`&.${inputLabelClasses.focused}`]: {
            color: "#6750A4",
          },
        },
      }}
      InputProps={{
        startAdornment:
          type === "money" ? (
            <InputAdornment
              // sx={{
              // backgroundColor: "#E8DEF8",
              // borderRadius: "100px",
              // }}
              className="bg-background-form rounded-[100px] px-3 py-5"
              position="start"
            >
              <DollarIcon />
            </InputAdornment>
          ) : undefined,
        className: "rounded-[20px]",
      }}
    />
  );
};

export const DateInputField = (props: DatePickerProps<Date>) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <FormControl>
      <DatePicker
        {...props}
        value={value}
        onChange={(date) => {
          setValue(date);
        }}
        slotProps={{
          textField: {
            helperText: "MM/DD/YYYY",
          },
        }}
      />
      {/* <FormHelperText
            sx={{
              color: "#f44336",
            }}
          >
            {errors[name]?.message?.toString()}
          </FormHelperText> */}
    </FormControl>
  );
};

export const SearchInputField = (props: TextFieldProps) => {
  // add search icon
  const [value, setValue] = useState("");
  return (
    <TextField
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value as any);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            // sx={{
            // backgroundColor: "#E8DEF8",
            // borderRadius: "100px",
            // }}
            className=""
            position="start"
          >
            <CiSearch size={22} />
          </InputAdornment>
        ),
        className: " pr-5 mdd:pr-0 mdd:w-[370px] rounded-[20px]",
      }}
    />
  );
};

export const QuantityInputField = (props: TextFieldProps) => {
  // add - and + on both sides
  const [value, setValue] = useState(1);
  return (
    <TextField
      {...props}
      value={value < 10 ? `0${value}` : value}
      onChange={(e) => {
        setValue(e.target.value as any);
      }}
      placeholder={props.placeholder}
      InputLabelProps={{
        sx: {
          color: "#1C1B1F",
          [`&.${inputLabelClasses.focused}`]: {
            color: "#6750A4",
          },
        },
      }}
      sx={{
        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#6750A4",
        },
        "& .MuiInputBase-input": {
          textAlign: "center",
        },
      }}
      InputProps={{
        className: "rounded-[20px]",
        startAdornment: (
          <CiSquareMinus
            size={22}
            color="#79747E"
            className="cursor-pointer"
            onClick={() => {
              setValue(value - 1);
            }}
          />
        ),
        endAdornment: (
          <CiSquarePlus
            size={22}
            color="#79747E"
            className="cursor-pointer"
            onClick={() => {
              setValue(value + 1);
            }}
          />
        ),
      }}
    />
  );
};

export const FileInputField = (props: {
  file?: File | null;
  setFile?: (file: File | null) => void;
  label: string;
}) => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[12px] leading-[16px] tracking-[0.4px] text-[#49454F]">
        {props.label}
        <span className="text-[#B3261E]">*</span>
      </div>
      <input
        type="file"
        id="file"
        name="file"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFile(file);
            if (props.setFile) props.setFile(file);
          }
        }}
      />
      <div className="flex items-center w-full">
        <label
          htmlFor="file"
          className="flex cursor-pointer w-1/2 text-[20px] tracking-[0.1px] items-center justify-center py-[5px] rounded-l-[4px] gap-3 border border-[#79747E] bg-[#E8DEF8]"
        >
          <UploadIcon />
          <div>Choose File</div>
        </label>
        <div className="w-1/2 flex justify-center py-[8px] rounded-r-[100px] border-y border-r border-[#79747E]">
          No File chosen
        </div>
      </div>
    </div>
  );
};

export const RadioInputField = (props: RadioProps) => {
  const [value, setValue] = useState("");
  return (
    <Radio
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value as any);
      }}
      sx={{
        "&.Mui-checked": {
          color: "#6750A4",
        },
      }}
    />
  );
};

export const PhoneInput = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      InputLabelProps={{
        sx: {
          color: "#1C1B1F",
          [`&.${inputLabelClasses.focused}`]: {
            color: "#6750A4",
          },
        },
      }}
      sx={{
        ".MuiOutlinedInput-root.Mui-focused:not(.MuiSelect-select) .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#6750A4",
          },
        "& .MuiInputBase-input:not(.MuiSelect-select)": {
          paddingLeft: 3    
        },
      }}
      InputProps={{
        className: "rounded-[20px] px-1",
        startAdornment: (
          <TextField
            select
            className="w-[300px]"
            defaultValue={"234"}
            sx={{
              // remove border on fieldset
              "& .MuiOutlinedInput-notchedOutline": {
                borderTop: "none",
                borderLeft: "none",
                borderBottom: "none",
                borderRight: "1px solid #79747E",
              },
              // remove styling for focused state
              ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "none",
                  borderRight: "1px solid #79747E",
                },
            }}
          >
            {phoneCodes.map((code) => (
              <MenuItem key={code.code} value={code.code}>
                {code.country} +&nbsp;{code.code}
              </MenuItem>
            ))}
          </TextField>
        ),
      }}
    />
  );
};
