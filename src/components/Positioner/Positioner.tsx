import { css, cx } from "emotion";
import React, { FC, HTMLAttributes } from "react";

export const Positioner: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cx(
      css`
        left: 50%;
        list-style: none;
        margin: 0;
        padding: 0;
        pointer-events: none;
        position: absolute;
        text-align: right;
        top: 50%;
        transform-origin: 0 50%;
        transform: translate(0, -50%);
        user-select: none;
      `,
      className
    )}
    {...props}
  />
);

export default Positioner;
