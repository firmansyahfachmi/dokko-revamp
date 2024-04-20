import { PropsWithChildren } from "react";

import TextProps from "./type";
import {
  alignStyles,
  variantStyles,
  letterSpacingStyles,
  sizeStyles,
  transformStyles,
  weightStyles,
} from "./style";

export default function Text({
  children,
  size = "base",
  variant = "base",
  weight = "regular",
  transform = "normal",
  letterSpacing = "none",
  className = "",
  align = "left",
  ...props
}: PropsWithChildren<TextProps>) {
  const baseClass = "block";
  const propsClass = `${alignStyles[align]} ${letterSpacingStyles[letterSpacing]} ${sizeStyles[size]} ${transformStyles[transform]} ${variantStyles[variant]} ${weightStyles[weight]} ${className}`;

  return (
    <span onClick={props.onClick} className={`${baseClass} ${propsClass}`}>
      {children}
    </span>
  );
}
