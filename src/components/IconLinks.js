import React from "react";
import { IconLink } from "./IconLink";

const setAngle = (index) => (index<12 ? 30 : 60) * index;

const base = 24.5;
const separation = 3;
const setDistance = (index) => (index<12 ? (index % 2 === 0 ? (base + 15.5 + separation * 2) : (base + 11.5 + separation * 2)) : (base + separation));

export const IconLinks = ({ links }) => (
    links.map((link, index) => (<IconLink key={index} {...link} angle={setAngle(index)} distance={setDistance(index)}/>))
);

export default IconLinks;