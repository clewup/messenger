import { TextField } from "@mui/material";
import React from "react";

type Variant = "standard" | "filled" | "outlined";

interface IProps {
  label: string;
  value: string;
  variant?: Variant;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  className?: string;
}

const Input: React.FC<IProps> = ({
  label,
  value,
  variant = "standard",
  onChange,
  className,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      variant={variant}
      onChange={onChange}
      className={className}
    />
  );
};
export default Input;
