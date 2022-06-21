<script lang="ts">
	import Hexagon from "./Hexagon.svelte";
	import ReactiveLink from "./ReactiveLink.svelte";
	import type LinkProps from "../types/LinkProps";
	import MediaIcon from "./MediaIcon.svelte";

	export let angle: number;
	export let color: string;
	export let animationDelay: number;
	export let href: string;
	export let size: number;
	export let title: string;
	export let path: string;

	const linkProps: LinkProps = {
		href,
		title
	};
</script>

<ReactiveLink {...linkProps} --angle={`-${angle}deg`} --animation-delay={`${animationDelay}s`} --color={color}>
	<Hexagon --size={`${size}vmin`}>
		<MediaIcon path={path}/>
	</Hexagon>
</ReactiveLink>