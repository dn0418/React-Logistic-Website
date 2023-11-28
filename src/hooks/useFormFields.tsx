import { useEffect, useMemo, useState } from "react";
import { Path, useFormContext } from "react-hook-form";
import {
  CalcFunction,
  FieldMetadata,
  ModifyMeta,
  useDynamicForm,
} from "../context/DynamicForm";
import { TypeOf, ZodAny, ZodArrayDef, ZodEnumDef, ZodObject, z } from "zod";
import {
  SelectInput,
  CommonInputField,
  DateInputField,
  FieldType,
  CommonInputFieldTypes,
} from "../helpers/FormFields";

const useFormFields = <T extends z.ZodObject<any>>(customSchma?: T) => {
  const { register } = useFormContext();
  const { metadata = {}, schema } = useDynamicForm();

  const fields = useMemo(() => {
    return (
      Object.entries((customSchma ?? schema).shape) as Array<
        [Path<TypeOf<T>>, ZodAny]
      >
    ).map(([name, field]) => <Field key={name} field={field} name={name} />);
  }, [metadata, register, schema]);

  return fields;
};

export default useFormFields;

export function getFieldType(switchType: string): string {
  let type;
  switch (switchType) {
    case "ZodNumber":
      type = "number";
      break;
    case "ZodString":
      type = "text";
      break;
    // case "ZodBoolean":
    //   type = "checkbox";
    //   break;
    case "ZodDate":
      type = "date";
      break;
    case "ZodEnum" :
      type = "select";
      break;
    case "ZodArray":
      type = "select";
      break;
    // case "ZodLiteral":
    //   type = "hidden";
    //   break;
    default:
      break;
  }
  return type || "";
}

export const Field = ({ name, field }: { name: string; field: ZodAny }) => {
  const { schema, metadata = {}, modifyFieldMeta } = useDynamicForm();
  const { register, setValue, getValues, trigger, watch } = useFormContext();
  const [valueChanged, setValueChanged] = useState(false);
  const [prevValues, setPrevValues] = useState<any[]>([]);

  const watchFields = watch(metadata[name]?.watchFields || []);

  useEffect(() => {
    if (
      watchFields.every((val, i) => Number.isNaN(val) || prevValues[i] === val)
    ) {
      setValueChanged(false);
    } else {
      setValueChanged(true);
      setPrevValues([...watchFields]);
    }
  }, [watchFields]);

  useEffect(() => {
    if (!valueChanged) return undefined;

    trigger(name).then(() => {
      if (metadata[name] && typeof metadata[name]?.calculate === "function")
        (metadata[name]?.calculate as CalcFunction<typeof schema>)({
          fields: watchFields,
          value: getValues(name),
          setValue,
          fMeta: metadata[name] as FieldMetadata<typeof schema>,
          modifyFieldMeta: modifyFieldMeta as ModifyMeta<typeof schema>,
        });
    });
    setValueChanged(false);
  }, [watchFields]);

  let defaultValue =
    (field._def.typeName as string) == "ZodDefault"
      ? (field._def as unknown as z.ZodDefaultDef).defaultValue()
      : null;

  let fieldDef = field._def;
  while ((fieldDef as unknown as z.ZodDefaultDef).innerType) {
    fieldDef = (fieldDef as unknown as z.ZodDefaultDef).innerType._def;
  }
  if (fieldDef.typeName === ("ZodEffects" as any)) {
    fieldDef = (fieldDef as unknown as z.ZodEffectsDef).schema._def;
  }

  let fieldDesc = fieldDef.description;
  let switchType = fieldDef.typeName as string;
  if (["ZodOptional", "ZodDefault"].includes(switchType)) {
    switchType = (fieldDef as unknown as z.ZodDefaultDef).innerType._def
      .typeName;
  }

  let fieldType = getFieldType(switchType);
  if (fieldDesc) fieldType = fieldDesc || fieldType || "text";

  let input = null; 
  switch (fieldType) {
    case "select":
      input = (
        <SelectInput
          defaultValue={defaultValue}
          fieldDef={fieldDef as unknown as ZodEnumDef}
          name={name}
        />
      );
      break;
    

    default:
      input = (
        <CommonInputField
          defaultValue={defaultValue}
          fieldType={fieldType as CommonInputFieldTypes}
          name={name}
        />
      );
      break;
  }

  return input;
};
