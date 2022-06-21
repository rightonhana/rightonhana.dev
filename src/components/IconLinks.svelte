<script lang="ts">
	import type Link from "../types/Link";
	import type LinkToRender from "../types/LinkToRender";
	import { setAngle,setAnimationDelay,setDistance } from "../utils/angles";
	import IconLink from "./IconLink.svelte";
	import Positioner from "./Positioner.svelte";

	export let links: Link[] = [];

	const linksToRender: LinkToRender[] = links
		.map((link, index) => ({
			...link,
			angle: setAngle(index),
			animationDelay: setAnimationDelay(index),
			distance: setDistance(index),
		}))
		.sort((linkA, linkB) => (linkA.tab > linkB.tab ? 1 : -1));
</script>

<nav>
	{#each linksToRender as { angle, animationDelay, color, distance, href, path, title }}
		<Positioner --angle={`${angle}deg`} --distance={`${distance}vmin`}>
			<IconLink {angle} {animationDelay} {color} {href} {path} {title} size={18} />
		</Positioner>
	{/each}
</nav>
