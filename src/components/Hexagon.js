import styled from "styled-components";

export const Hexagon = styled.div`
  background-image: url(/base.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  opacity: .25;
  top: 50%;
  left:50%;
  transform: translate(0%, -50%);
  height: 10vw;
  width: 10vw;
  display: inline-block;
  will-change: opacity;
  transition: opacity .2s ease-in-out;
  
  img{
    width:100%;
    height:100%;
  }

  &:hover{
    opacity: .75;
  }
`;

export default Hexagon;