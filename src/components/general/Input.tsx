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
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          {...(register && register(label.toLowerCase(), rules))}
        />
      </label>
      <p>{errorMessage && `* ${errorMessage}`}</p>
    </div>
  );
};

export default Input;
