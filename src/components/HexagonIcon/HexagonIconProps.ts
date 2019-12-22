import { ReactNode } from "react";
import HexagonProps from "../Hexagon/HexagonProps";

export interface HexagonIconProps extends HexagonProps {
    /** Children */
    children?: ReactNode;
    /** Hexagon color */
    color?: string;
}

export default HexagonIconProps;