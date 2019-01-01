import React from "react";
import { Icon } from "./Icon";
import { Positioner } from "./Positioner";
import styled, { css } from "styled-components";

const ReactiveLink = styled.a`
    opacity: .5;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    ${props => css`
        transform: rotate(${props.angle}deg) scale(1);
    `}
    will-change: opacity, transform;
    transition: opacity .2s ease-in-out, transform .2s ease-in-out;

    &:hover, &:focus {
        outline: 0;
        opacity: .75;
        ${props => css`
            transform: rotate(${props.angle}deg) scale(1.1);
        `}
    }
`;

export const IconLink = ({ distance, href, title, src, angle }) => (
    <Positioner style={{
        transform: `translate(0, -50%) rotate(${angle}deg)`,
        width: `${distance}vmin`
    }}>
        <ReactiveLink href={href} title={title} angle={-angle}>
            <Icon src={src} alt={title}/>
        </ReactiveLink>
    </Positioner>
);

export default IconLink;