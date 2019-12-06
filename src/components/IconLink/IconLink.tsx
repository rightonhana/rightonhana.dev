import { css, cx } from "emotion";
import React, { FC } from "react";
import HexagonIcon from "../HexagonIcon";
import { Positioner } from "../Positioner";
import ReactiveLink from "../ReactiveLink";
import IconLinkProps from "./IconLinkProps";

export const IconLink: FC<IconLinkProps> = ({
  angle = 0,
  children,
  className,
  distance = 0,
  href,
  src,
  title = "Link",
  ...props
}) => (
  <Positioner
    className={cx(
      css`
        transform: translate(0, -50%) rotate(${angle}deg);
        width: ${distance}vmin;
      `,
      className
    )}
  >
    <ReactiveLink href={href} title={title} angle={-angle}>
      <HexagonIcon size={18}>
        {children}
      </HexagonIcon>
    </ReactiveLink>
  </Positioner>
);

export default IconLink;
