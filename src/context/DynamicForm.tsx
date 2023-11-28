import React, { ReactNode } from "react";
import {
  FieldValues,
  Path,
  SubmitHandler,
  UseFormSetValue,
} from "react-hook-form";
import { TypeOf, ZodObject, z } from "zod";
import {
  TextFieldProps,
  SelectProps,
  AutocompleteProps,
  CheckboxProps,
  RadioProps,
  SwitchProps,
} from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";

export type CalcFunction<
  T extends z.ZodObject<any> = any,
  P = FieldValues[Path<TypeOf<T>>][],
  V = any
> = (args: {
  fields: P;
  value: V;
  setValue: UseFormSetValue<FieldValues>;
  modifyFieldMeta: (name: Path<TypeOf<T>>, fMeta: FieldMetadata<T>) => void;
  fMeta: FieldMetadata<T>;
}) => any;
export const DyamicFormContext = React.createContext<
  DynamicFormProps<z.ZodObject<any>>
>({
  schema: {} as ZodObject<any>,
  updateString: "",
  onSubmit: function (
    data: { [x: string]: any },
    event?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) {},
  metadata: {},
  modifyFieldMeta: () => undefined,
});

export const useDynamicForm = () => React.useContext(DyamicFormContext);

export default DyamicFormContext;
export type ModifyMeta<T extends z.ZodObject<any>> = (
  name: Path<TypeOf<T>>,
  fMeta: FieldMetadata<T>
) => void;

export type SchemaChange = (setValue: UseFormSetValue<FieldValues>) => void;

export type FieldMetadata<T extends z.ZodObject<any>> = Partial<
  {
    options: { [k: string]: any };
    meta: { [k: string]: FieldMetadata<T> };
    label: string;
    placeholder: string;
    multiple: boolean;
    calculate: CalcFunction<T>;
    watchFields: Path<TypeOf<T>>[];
    onlyOptions: boolean;
  } & TextFieldProps &
    SelectProps &
    AutocompleteProps<any, any, any, any> &
    CheckboxProps &
    RadioProps &
    SwitchProps &
    DatePickerProps<Date>
>;
export type FieldsMetadata<T extends z.ZodObject<any>> = {
  [k in Path<TypeOf<T>>]?: FieldMetadata<T>;
};

export type DynamicFormProps<T extends z.ZodObject<any>> = {
  schema: T;
  action?: string | ReactNode;
  instance?: { [k: string]: any };
  additionValidation?: (data: { [k: string]: any }) => Promise<{
    message?: string;
    status: boolean;
  }>;
  additionValidationModal?: (message: string) => React.ReactNode;
  onSubmit: SubmitHandler<z.infer<T>>;
  onSchemaChange?: SchemaChange;
  refineCallbacks?: Array<{
    fn: (data: { [k in Path<TypeOf<T>>]: any }) => boolean;
    args: { path: string[]; message: string };
  }>;
  metadata?: FieldsMetadata<T>;
  questions: Array<{
    question: string;
    metadata: FieldsMetadata<T>;
  }>;
  multiLevel?: boolean;
  className?: string;
  isMini?: boolean;
  inputsPerLevel?: number;
  hiddenInputs?: number;
  updateString?: string;
  autoSave?: boolean;
  modifyFieldMeta?: ModifyMeta<T>;
  onFieldsChange?: (data: any) => void;
};
