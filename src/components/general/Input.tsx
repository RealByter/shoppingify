import React from "react";
import { RegisterOptions } from "react-hook-form";

interface Props {
  type?: string;
  placeholder: string;
  register: any;
  label: string;
  errorMessage: string | undefined;
  rules?: RegisterOptions;
}

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  register,
  label,
  errorMessage,
  rules,
}) => {
  const className =
    "mt-1 rounded-xl border-2 border-solid border-gray-400 px-3 py-4 text-black outline-none placeholder:text-gray-400 focus:border-primary";

  return (
    <div className="relative">
      <label className="flex flex-col text-sm font-medium focus-within:text-primary">
        {label} {!rules?.required && "(optional)"}
        {type === "textarea" ? (
          <textarea
            className={className + " h-24"}
            type={type}
            placeholder={placeholder}
            {...(register && register(label.toLowerCase(), rules))}
          />
        ) : (
          <input
            className={className}
            type={type}
            placeholder={placeholder}
            {...(register && register(label.toLowerCase(), rules))}
          />
        )}
      </label>
      <p className="absolute -bottom-5 text-sm font-semibold text-red-500">
        {errorMessage && `* ${errorMessage}`}
      </p>
    </div>
  );
};

export default Input;
