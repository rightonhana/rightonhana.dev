import React, { FC } from "react";
import HexagonIcon from "../HexagonIcon";
import ReactiveLink from "../ReactiveLink";
import IconLinkProps from "./IconLinkProps";

export const IconLink: FC<IconLinkProps> = ({
  angle = 0,
  children,
  title = "Link",
  ...props
}) => (
  <ReactiveLink title={title} angle={-angle} {...props}>
    <HexagonIcon size={18}>{children}</HexagonIcon>
  </ReactiveLink>
);

export default IconLink;
