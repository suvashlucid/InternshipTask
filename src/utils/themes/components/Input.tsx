import React from "react";

interface InputProps {
  type: string;
  readOnly?: boolean;
  name: string;
  defaultValue?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  readOnly,
  name,
  defaultValue,
  placeholder,
}) => {
  return (
    <input
      type={type}
      style={{ color: "red" }}
      readOnly={readOnly}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
