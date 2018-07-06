import React from "react";
import { Icon } from "./Icon";
import { Positioner } from "./Positioner";

export const IconLink = ({ href, title, src, angle}) => (
    <Positioner style={{transform:`rotate(${angle}deg)`}}>
        <a href={href} title={title} style={{transform:`rotate(${-angle}deg)`}}>
            <Icon src={src} alt={title}/>
        </a>
    </Positioner>
);

export default IconLink;