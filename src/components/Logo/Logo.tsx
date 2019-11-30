import { css, cx } from "emotion";
import React, { FC } from "react";
import LogoProps from "./LogoProps";

export const Logo: FC<LogoProps> = ({
  className,
  size = 10,
  alt = "Logo",
  ...props
}) => (
  <img
    className={cx(
      css`
        height: ${size}vmin;
        left: 50%;
        opacity: 0.75;
        pointer-events: none;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        user-select: none;
        width: ${size}vmin;
      `,
      className
    )}
    {...{ alt, ...props }}
  />
);

export default Logo;
