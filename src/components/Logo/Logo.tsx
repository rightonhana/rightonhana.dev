import { css, cx } from "emotion";
import React, { FC } from "react";
import { ReactComponent as RohLogo } from "../../images/roh.svg";
import LogoProps from "./LogoProps";

export const Logo: FC<LogoProps> = ({
  className,
  color = "#fff",
  size = 10,
  ...props
}) => (
  <RohLogo
    className={cx(
      css`
        height: ${size}vmin;
        left: 50%;
        pointer-events: none;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        user-select: none;
        width: ${size}vmin;

        path {
          fill: ${color};
        }
      `,
      className
    )}
    {...props }
  />
);

export default Logo;
