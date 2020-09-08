import React, { FC } from "react";
import Hexagon from "../Hexagon";
import HexagonIconProps from "./HexagonIconProps";

export const HexagonIcon: FC<HexagonIconProps> = ({
  color = "#000",
  ...props
}) => (
  <Hexagon {...props}/>
);

export default HexagonIcon;
