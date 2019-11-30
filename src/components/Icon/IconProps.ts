import { ImgHTMLAttributes } from "react";

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Size of the icon */
    size?: number;
}

export default IconProps;
