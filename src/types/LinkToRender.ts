import type Link from "./Link";

export type LinkToRender = Link & {
	angle: number,
	animationDelay: number,
	distance: number,
};

export default LinkToRender;