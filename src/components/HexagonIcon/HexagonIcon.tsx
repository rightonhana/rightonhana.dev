import React, { FC } from "react";
import Hexagon from "../Hexagon";
import Icon from "../Icon";
import HexagonIconProps from "./HexagonIconProps";

export const HexagonIcon: FC<HexagonIconProps> = ({
  src,
  title = "Icon",
  ...props
}) => (
  <Hexagon {...{ title, ...props }}>
    <Icon src={src} alt={title} size={100} />
  </Hexagon>
);

export default HexagonIcon;
