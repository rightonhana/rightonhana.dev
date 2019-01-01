import React from "react";
import { IconLink } from "./IconLink";

const setAngle = (index) => (index < 12 ? 30 : 60) * index;

const base = 24.5;
const separation = 3;
const setDistance = (index) => (index < 12 ? (index % 2 === 0 ? (base + 15.5 + separation * 2) : (base + 11.5 + separation * 2)) : (base + separation));

/**
 * IconLinks component.
 * @param {object} param
 * @param {typeof import("../links.js").links} param.links
 */
export const IconLinks = ({ links }) => (
    links
        .map((link, index) => ({ ...link, key: index, angle: setAngle(index), distance: setDistance(index) }))
        .sort((linkA, linkB) => linkA.tab > linkB.tab ? 1 : -1)
        .map((link) => (
            <IconLink {...link}/>
        ))
);

export default IconLinks;