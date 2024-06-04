import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "outlined" | "contained";
export type ButtonType = "primary" | "secondary" | "danger";
export type htmlType = "button" | "submit";

export interface IButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "type"
  > {
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  fullWidth?: boolean;
  htmlType?: "button" | "submit";
}
