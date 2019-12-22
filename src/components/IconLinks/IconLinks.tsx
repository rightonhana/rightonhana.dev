import { css, cx } from "emotion";
import React, { FC } from "react";
import { setAngle, setDistance } from "../../utils/angles";
import { IconLink } from "../IconLink";
import { Positioner } from "../Positioner";
import IconLinksProps from "./IconLinksProps";

/**
 * IconLinks component.
 */
export const IconLinks: FC<IconLinksProps> = ({ links = [], ...props }) => (
  <div {...props}>
    {links
      .map((link, index) => ({
        ...link,
        angle: setAngle(index),
        distance: setDistance(index),
        key: link.title
      }))
      .sort((linkA, linkB) => (linkA.tab > linkB.tab ? 1 : -1))
      .map(link => (
        <Positioner
          className={cx(
            css`
              transform: translate(0, -50%) rotate(${link.angle}deg);
              width: ${link.distance}vmin;
            `
          )}
          key={link.key}
        >
          <IconLink
            angle={link.angle}
            className={css`
              path {
                fill: var(--icon);
                transition: fill 0.2s ease-in-out;
              }
              &:hover,
              &:focus {
                path {
                  fill: ${link.color};
                }
              }
            `}
            href={link.href}
            title={link.title}
          >
            <link.Icon
              className={css`
                height: 100%;
                width: 100%;
              `}
            />
          </IconLink>
        </Positioner>
      ))}
  </div>
);

export default IconLinks;
