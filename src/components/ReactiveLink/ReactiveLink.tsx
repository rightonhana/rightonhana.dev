import { css, cx } from "emotion";
import React, { FC } from "react";
import ReactiveLinkProps from "./ReactiveLinkProps";

export const ReactiveLink: FC<ReactiveLinkProps> = ({
  angle = 0,
  children,
  className,
  ...props
}) => (
  <a
    className={cx(
      css`
        border-radius: 50%;
        display: inline-block;
        overflow: hidden;
        pointer-events: all;
        transform: rotate(${angle}deg) scale(1);
        will-change: opacity, transform;
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

        &:hover,
        &:focus {
          outline: 0;
          transform: rotate(${angle}deg) scale(1.1);
        }
      `,
      className
    )}
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default ReactiveLink;