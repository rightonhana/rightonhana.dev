import React from "react";
import styled, { css } from "styled-components";

const CentredImage = styled.img`
    left:50%;
    opacity: .75;
    position: absolute;
    top:50%;
    transform: translate(-50%, -50%);

    ${({ size }) => css`
        width: ${size}vmin;
        height: ${size}vmin;
    `}
`;

export const Logo = () => (<CentredImage src="/roh.svg" size={18} alt="Florencia Gonzalez"/>);

export default Logo;