import React from "react";
import { IconLink } from "./IconLink";

export const IconLinks = ({ links }) => (
    links.map((link, index) => (<IconLink key={index} {...link} angle={60*index}/>))
);

export default IconLinks;