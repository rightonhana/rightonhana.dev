import styled from "styled-components";

export const Positioner = styled.div`
    left: 50%;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: right;
    top: 50%;
    transform-origin: 0 50%;
    transform: translate(0, -50%);
    
    a {
        opacity: .25;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        will-change: opacity;
        transition: opacity .2s ease-in-out;

        &:hover, &:focus {
            outline: 0;
            opacity: .75;
        }
    }
`;

export default Positioner;