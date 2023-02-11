import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

type Variant = "text" | "contained" | "outlined";
type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary" | "success" | "error" | "warning" | "info";
type Type = "button" | "submit";

interface IProps {
  children: string | JSX.Element;
  variant?: Variant;
  size?: Size;
  color?: Color;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: Type;
}

const Button: React.FC<IProps> = ({
  children,
  variant = "contained",
  size = "medium",
  color = "success",
  startIcon,
  endIcon,
  onClick,
  isDisabled,
  isLoading,
  type = "button",
}) => {
  return (
    <LoadingButton
      variant={variant}
      size={size}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={isDisabled}
      loading={isLoading}
      type={type}
    >
      {children}
    </LoadingButton>
  );
};
export default Button;
