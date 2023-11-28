import { Controller, useFormContext } from "react-hook-form";
import { useDynamicForm } from "../context/DynamicForm";
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
import DollarIcon from "../assets/icons/dollar-square.svg?react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";

export type FieldProps<T extends z.ZodObject<any>> = {
  name: Path<TypeOf<T>>;
};

export type SelectOption = {
  value: unknown;
  label: string;
};

export const SelectInput = <T extends z.ZodObject<any>>({
  name,
  fieldDef,
  defaultValue,
}: FieldProps<T> & {
  defaultValue: any;
  fieldDef: ZodEnumDef;
} & SelectProps) => {
  const { metadata = {} } = useDynamicForm();
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext();

  const initOptions = metadata[name] ? metadata[name]?.options : undefined;
  const options: SelectOption[] = metadata[name]?.onlyOptions
    ? Object.entries(metadata[name]?.options as { [k: string]: any }).map(
        ([k, v]) => ({ label: k, value: v })
      )
    : (fieldDef as unknown as ZodEnumDef).values.map((value) => {
        return {
          label: initOptions ? initOptions[value] || value : value,
          value: metadata[name]?.value ?? value,
        };
      });

  const isMulti = metadata[name]?.multiple === true;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, ...rest } }) => (
        <FormControl
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
          error={errors[name] ? true : false}
        >
          <InputLabel id="demo-simple-select-label">
            {metadata[name]?.label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            multiple={isMulti}
            value={value}
            label={metadata[name]?.label}
            onChange={(e: SelectChangeEvent<typeof value>) => {
              let value: string | string[] = e.target.value;
              if (typeof value === "string" && isMulti) {
                value = value.split(",");
              } else {
                value = value as string;
              }
              onChange(value);
              trigger(name);
            }}
            // defaultValue={
            //   value ? (isMulti ? value : value.toString()) : undefined
            // }
            {...rest}
          >
            {options.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
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

export type CommonInputFieldTypes =
  | "text"
  | "number"
  | "tel"
  | "email"
  | "password"
  | "quantity"
  | "money";

export type FieldType =
  | CommonInputFieldTypes
  | "date"
  | "select"
  | "time"
  | "file"
  | "checkbox"
  | "radio"
  | "switch";

export const CommonInputField = <T extends z.ZodObject<any>>({
  defaultValue,
  fieldType,
  name,
}: FieldProps<T> & {
  defaultValue: any;
  fieldType: FieldType;
} & TextFieldProps) => {
  const { metadata = {} } = useDynamicForm();
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
      render={({ field: { onChange, value, ...rest } }) => (
        <TextField
          {...rest}
          {...metadata[name]}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            trigger(name);
          }}
          InputProps={{
            startAdornment:
              fieldType !== "money" ? (
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
          error={errors[name] ? true : false}
          helperText={errors[name]?.message?.toString()}
        />
      )}
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
  const { metadata = {} } = useDynamicForm();
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
