import { FC } from "react";
import type { IButtonProps } from "./Button.types";
import { cn } from "../../utils/cn";

export const Button: FC<IButtonProps> = ({
  children,
  size = "medium",
  variant = "contained",
  type = "primary",
  htmlType = "button",
  className = "",
  fullWidth,
  disabled,
  ...rest
}) => {
  const classNames = cn({
    // Size controls
    "w-full": fullWidth,
    "px-2 py-1": size === "small",
    "px-4 py-2": size === "medium",
    "px-8 py-4": size === "large",
    /**
     * Variant and Type controls:
     * primary: blue
     * secondary: orange
     * danger: red
     */
    ...(type === "primary" && !disabled
      ? {
          "bg-blue-500": variant === "contained",
          "border border-blue-500 text-blue-500": variant === "outlined",
        }
      : {}),
    ...(type === "secondary" && !disabled
      ? {
          "bg-orange-500": variant === "contained",
          "border border-orange-500 text-orange-500": variant === "outlined",
        }
      : {}),
    ...(type === "danger" && !disabled
      ? {
          "bg-red-500": variant === "contained",
          "border border-red-500 text-red-500": variant === "outlined",
        }
      : {}),
    "text-white": variant === "contained" && !disabled,
    "bg-gray-400 text-gray-500": disabled,
    "hover:opacity-80 active:opacity-90 transition-opacity": !disabled,
    "rounded-lg": true,
    [className]: true,
  });
  return (
    <button
      {...rest}
      disabled={disabled}
      className={classNames}
      type={htmlType}
    >
      {children}
    </button>
  );
};

export default Button;
