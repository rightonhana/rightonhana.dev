import React from "react";
import { Hexagon } from "./Hexagon";

export const Icon = ({ src, alt }) => (
  <Hexagon size={18}>
    <img src={`/icons/${src}`} alt={alt}/>
  </Hexagon>
);

export default Icon;
