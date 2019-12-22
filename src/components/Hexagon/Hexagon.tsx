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
      background-color: var(--hexagon);
      background-position: 50%;
      background-repeat: no-repeat;
      border-radius: 50%;
      display: inline-block;
      height: ${size}vmin;
      left: 50%;
      clip-path: polygon(6.7% 25%, 50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%);
      top: 50%;
      width: ${size}vmin;
      `,
      className
    )}
    {...props}/>
);

export default Hexagon;