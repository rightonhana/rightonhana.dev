import { AnchorHTMLAttributes, ReactNode } from "react";

export interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Angle of render */
  angle?: number;
  /** Children */
  children?: ReactNode;
  /** Anchor href */
  href?: string;
}

export default IconLinkProps;
