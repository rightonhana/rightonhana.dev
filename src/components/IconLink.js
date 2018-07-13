import React from "react";
import { Icon } from "./Icon";
import { Positioner } from "./Positioner";

export const IconLink = ({ distance, href, title, src, angle}) => (
    <Positioner style={{
        transform: `translate(0, -50%) rotate(${angle}deg)`,
        width: `${distance}vmin`
    }}>
        <a href={href} title={title} style={{transform:`rotate(${-angle}deg)`}}>
            <Icon src={src} alt={title}/>
        </a>
    </Positioner>
);

export default IconLink;