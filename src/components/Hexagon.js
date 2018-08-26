import styled, { css } from "styled-components";

export const Hexagon = styled.div`
  background-image: url(/base.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  top: 50%;
  left: 50%;
  display: inline-block;

  ${({ size }) => css`
      width: ${size}vmin;
      height: ${size}vmin;
  `}
  
  img {
    width:100%;
    height:100%;
  }
`;

export default Hexagon;