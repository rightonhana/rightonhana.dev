import { ImgHTMLAttributes } from "react";

export interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Size of the logo */
    size?: number;
}

export default LogoProps;
