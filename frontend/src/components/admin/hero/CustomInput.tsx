import React from "react";
import { useField } from "formik";
import { HeroFormItem } from "./HeroFormItems";

const CustomInput: React.FC<HeroFormItem> = ({ labelText, input }) => {
  const [field, { error, touched }] = useField(input);
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={input.id}>{labelText}</label>
      <input
        {...input}
        {...field}
        className={`${
          touched && error
            ? "border-red-600 focus:outline-red-600"
            : "border-gray-400 focus:outline-gray-500"
        } border border-solid rounded-sm px-3 py-2 focus:outline focus:outline-1 `}
      />
      {error && touched && <p className="text-red-600 text-sm pl-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
