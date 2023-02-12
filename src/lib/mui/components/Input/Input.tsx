import { TextField } from "@mui/material";
import React from "react";

type Variant = "standard" | "filled" | "outlined";
type Type = "text" | "password" | "email";

interface IProps {
  label?: string;
  value: string;
  variant?: Variant;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  className?: string;
  type?: Type;
  placeholder?: string;
}

const Input: React.FC<IProps> = ({
  label,
  value,
  variant = "standard",
  onChange,
  className,
  type = "text",
  placeholder,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      variant={variant}
      onChange={onChange}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
