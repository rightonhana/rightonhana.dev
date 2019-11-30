import { css, cx } from "emotion";
import React, { FC } from "react";
import HexagonProps from "./HexagonProps";

export const Hexagon: FC<HexagonProps> = ({
  className,
  size = 10,
  ...props
}) => (
  <div 
    className={cx(
      css`
      background-image: url(/base.svg);
      background-position: 50%;
      background-repeat: no-repeat;
      display: inline-block;
      height: ${size}vmin;
      left: 50%;
      top: 50%;
      width: ${size}vmin;
      `,
      className
    )}
    {...props}/>
);

export default Hexagon;