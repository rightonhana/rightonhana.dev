import { HTMLAttributes } from 'react';

export interface HexagonProps extends HTMLAttributes<HTMLDivElement> {
    /** Size of hexagon */
    size?: number;
}

export default HexagonProps;