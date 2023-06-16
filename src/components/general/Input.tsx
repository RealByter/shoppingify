import React from "react";
import { RegisterOptions } from "react-hook-form";

interface Props {
  type?: string;
  placeholder: string;
  register: any;
  label: string;
  errorMessage: string | undefined;
  rules: RegisterOptions;
}

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  register,
  label,
  errorMessage,
  rules,
}) => {
  return (
    <div>
      <label className="flex flex-col text-sm font-medium">
        {label}
        <input
          className="mt-1 rounded-xl border-2 border-solid border-gray-400 px-3 py-4 placeholder:text-gray-400"
          type={type}
          placeholder={placeholder}
          {...(register && register(label.toLowerCase(), rules))}
        />
      </label>
      <p className="text-sm font-semibold text-red-500">
        {errorMessage && `* ${errorMessage}`}
      </p>
    </div>
  );
};

export default Input;
