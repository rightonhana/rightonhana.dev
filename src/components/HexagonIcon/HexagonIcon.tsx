import React, { FC } from "react";
import Hexagon from "../Hexagon";
import HexagonIconProps from "./HexagonIconProps";

export const HexagonIcon: FC<HexagonIconProps> = ({
  children,
  color = "#000",
  ...props
}) => (
  <Hexagon {...props}>
    {children}
  </Hexagon>
);

export default HexagonIcon;
