import { AnchorHTMLAttributes, ReactNode } from "react";

export interface ReactiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Angle to posisionate the link */
    angle?: number;

    children: ReactNode;
}

export default ReactiveLinkProps;
