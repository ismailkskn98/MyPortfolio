import React from "react";
import { useField } from "formik";

type Props = {
  labelText: string;
  input: {
    id: string;
    name: string;
    type: string;
    placeholder: string;
  };
  error: boolean;
};

const CustomInput: React.FC<Props> = ({ labelText, input, error }) => {
  const [field] = useField(input);

  return (
    <div className="w-full flex flex-col gap-1 article-u">
      <label htmlFor={input.id} className="font-semibold">
        {labelText}
      </label>
      <input
        {...input}
        {...field}
        className={`${
          error ? "bg-red-200 focus:outline-red-500" : "bg-white text-black focus:outline-[#FBAE3C]"
        } border-none outline-none focus:outline focus:outline-[3px] focus:outline-offset-0 px-2 py-1 rounded-sm`}
      />
    </div>
  );
};

export default CustomInput;
