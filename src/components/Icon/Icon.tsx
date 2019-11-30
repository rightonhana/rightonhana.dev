import { css, cx } from "emotion";
import React, { FC } from "react";
import IconProps from "./IconProps";

export const Icon: FC<IconProps> = ({
  className,
  size = 10,
  alt = "Icon",
  ...props
}) => (
  <img
    className={cx(
      css`
        width: ${size}%;
        height: ${size}%;
      `,
      className
    )}
    {...{ alt, ...props }}
  />
);

export default Icon;
