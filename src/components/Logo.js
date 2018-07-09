import React from "react";
import styled from "styled-components";

const CentredImage = styled.img`
    position: absolute;
    width: 10vmax;
    height:10vmax;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    opacity: .75;
`;

export const Logo = () => (<CentredImage src="/roh.svg"/>);

export default Logo;