import { HTMLAttributes } from "react";

export interface IconLinkProps extends HTMLAttributes<HTMLDivElement> {
    distance?: number;
    href?: string;
    src?: string;
    angle?: number;
}

export default IconLinkProps;
