import { HTMLAttributes } from "react";
import { links } from "../../links";

export interface IconLinksProps extends HTMLAttributes<HTMLDivElement> {
    /** Size of the logo */
    links?: typeof links;
}

export default IconLinksProps;
