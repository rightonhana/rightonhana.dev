import { AnchorHTMLAttributes } from "react";

export interface ReactiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Angle to posisionate the link */
    angle?: number;
}

export default ReactiveLinkProps;
