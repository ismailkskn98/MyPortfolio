import React from "react";
import { useField } from "formik";
// types
import type { BlogItem } from "../blogAdd/BlogItems";

const CustomInput: React.FC<BlogItem> = ({ labelText, input }) => {
  const [field, { error, touched }] = useField(input);
  return (
    <div className="flex flex-col items-start gap-2">
      <label htmlFor={input.id} className="font-semibold flex gap-1">
        {labelText} {input.name === "slug" && <p>{`(url)`}</p>}
      </label>
      <input
        {...input}
        {...field}
        className="w-full border border-solid rounded-sm px-3 py-2 focus:outline focus:outline-1 border-gray-400 focus:outline-gray-500"
        disabled={input.name === "slug"}
      />
      {error && touched && <p className="text-red-600 text-sm pl-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
