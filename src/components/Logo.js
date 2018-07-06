import React from "react";
import styled from "styled-components";

const CentredImage = styled.img`
    position: absolute;
    width: 10vw;
    height:10vw;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`;

export const Logo = () => (<CentredImage src="/roh.svg"/>);

export default Logo;