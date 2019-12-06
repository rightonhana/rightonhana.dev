import { SVGAttributes } from "react";

export interface LogoProps extends SVGAttributes<SVGElement> {
    /** Color of the logo */
    color?: string;
    /** Size of the logo */
    size?: number;
}

export default LogoProps;
