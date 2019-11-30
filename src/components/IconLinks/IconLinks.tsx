import React, { FC } from "react";
import { setAngle, setDistance } from "../../utils/angles";
import { IconLink } from "../IconLink";
import IconLinksProps from "./IconLinksProps";

/**
 * IconLinks component.
 */
export const IconLinks: FC<IconLinksProps> = ({ links }) => (
  <>
    {(links || [])
      .map((link, index) => ({
        ...link,
        key: index,
        angle: setAngle(index),
        distance: setDistance(index)
      }))
      .sort((linkA, linkB) => (linkA.tab > linkB.tab ? 1 : -1))
      .map(link => (
        <IconLink {...link} />
      ))}
  </>
);

export default IconLinks;
