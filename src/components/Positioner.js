import styled/*, { css }*/ from "styled-components";

export const Positioner = styled.div`
    left: 50%;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: right;
    top: 50%;
    transform-origin: 0 50%;
    transform: translate(-50%,-50%);
    width: 18vw;
    
    a{
        display: inline-block;
        border-radius:50%;
    }
`;

export default Positioner;

 /*
    ${props => (props.index>6) && css`
        left: 75%;
        top: 75%;
        width: 36vw;
    `}*/