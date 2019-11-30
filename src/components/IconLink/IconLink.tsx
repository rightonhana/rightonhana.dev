import { css, cx } from "emotion";
import React, { FC } from "react";
import HexagonIcon from "../HexagonIcon";
import { Positioner } from "../Positioner";
import ReactiveLink from "../ReactiveLink";
import IconLinkProps from "./IconLinkProps";

export const IconLink: FC<IconLinkProps> = ({
  className,
  distance = 0,
  href,
  src,
  angle = 0,
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
      <HexagonIcon src={src} title={title} size={18} />
    </ReactiveLink>
  </Positioner>
);

export default IconLink;
