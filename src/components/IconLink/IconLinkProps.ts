import { HTMLAttributes, ReactNode } from "react";

export interface IconLinkProps extends HTMLAttributes<HTMLDivElement> {
    /** Angle of render */
    angle?: number;
    /** Children */
    children?: ReactNode;
    /** Distance of render */
    distance?: number;
    /** Anchor href */
    href?: string;
}

export default IconLinkProps;
