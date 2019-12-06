import { css } from "emotion";
import React, { FC } from "react";
import { setAngle, setDistance } from "../../utils/angles";
import { IconLink } from "../IconLink";
import IconLinksProps from "./IconLinksProps";

/**
 * IconLinks component.
 */
export const IconLinks: FC<IconLinksProps> = ({ links = [], ...props}) => (
  <div {...props}>
    {links
      .map((link, index) => ({
        ...link,
        angle: setAngle(index),
        distance: setDistance(index),
        key: index
      }))
      .sort((linkA, linkB) => (linkA.tab > linkB.tab ? 1 : -1))
      .map(link => (
        <IconLink {...link} >
          <link.Icon className={css`
            height: 100%;
            width: 100%;
            
            path {
              fill: var(--icon);
            }
          `}/>
        </IconLink>
      ))}
  </div>
);

export default IconLinks;
