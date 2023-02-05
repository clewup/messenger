import MuiButton from "@mui/material/Button";
import React from "react";

type Variant = "text" | "contained" | "outlined";
type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary" | "success" | "error" | "warning" | "info";

interface IProps {
  children: string | JSX.Element;
  variant?: Variant;
  size?: Size;
  color?: Color;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({
  children,
  variant = "contained",
  size = "medium",
  color = "success",
  startIcon,
  endIcon,
  onClick,
}) => {
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};
export default Button;
