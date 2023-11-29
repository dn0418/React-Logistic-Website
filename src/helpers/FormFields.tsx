import { Controller, useFormContext } from "react-hook-form";
import { TypeOf, ZodAnyDef, ZodEnumDef, z } from "zod";
import { Path } from "react-hook-form";
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
} from "@mui/material";
import { BsExclamationCircle } from "react-icons/bs";
import DollarIcon from "../assets/icons/dollar-square.svg?react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export type FieldProps<T extends z.ZodObject<any>> = {
  name: Path<TypeOf<T>>;
};

export type SelectOption = {
  value: unknown;
  label: string;
};

export const SelectInput = ({
  options,
  ...props
}: SelectProps & { options: any[]; defaultValue: string }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center gap-2 w-full">
      <FormControl
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-label"
          value={value}
          {...props}
          onChange={(e) => {
            let value = e.target.value as string;
            setValue(value);
          }}
          // defaultValue={
          //   value ? (isMulti ? value : value.toString()) : undefined
          // }
        >
          <MenuItem value={props.defaultValue} key={props.defaultValue}>
            {props.defaultValue}
          </MenuItem>
          {options.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {/* <FormHelperText
        sx={{
          color: "#f44336",
        }}
        >
        {errors[name]?.message?.toString()}
      </FormHelperText> */}
      </FormControl>
      <BsExclamationCircle size={20} color="#79747E" />

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

export const DateInputField = <T extends z.ZodObject<any>>({
  defaultValue,
  fieldDef,
  name,
  ...rest
}: FieldProps<T> & {
  defaultValue: any;
  fieldDef: ZodAnyDef;
} & DatePickerProps<Date>) => {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, ...restdata } }) => (
        <FormControl error={errors[name] ? true : false}>
          <DatePicker
            {...rest}
            {...restdata}
            value={value}
            onChange={(date) => {
              onChange(date);
              trigger(name);
            }}
          />
          <FormHelperText
            sx={{
              color: "#f44336",
            }}
          >
            {errors[name]?.message?.toString()}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export function NaNToZero(o: any) {
  Object.keys(o).forEach((k) => {
    if (Number.isNaN(o[k])) o[k] = 0;
  });
  return o;
}
