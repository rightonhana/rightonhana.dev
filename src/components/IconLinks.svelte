<script lang="ts">
    import IconLink from "./IconLink.svelte";
    import Positioner from "./Positioner.svelte";
    import type LinkToRender from "../types/LinkToRender";
    import { setAngle, setDistance } from "../utils/angles";
    import type Link from "../types/Link";

    export let links: Link[] = [];

    const linksToRender: LinkToRender[] = links
      .map((link, index) => ({
        ...link,
        angle: setAngle(index),
        distance: setDistance(index)
      }))
      .sort((linkA, linkB) => (linkA.tab > linkB.tab ? 1 : -1));
</script>

<div>
    {#each linksToRender as { angle, color, distance, href, svg, title }}
        <div style="--color:{color};">
            <Positioner angle={angle} distance={distance}>
                <IconLink
                    angle={angle}
                    color={color}
                    href={href}
                    title={title}
                    size={18}
                >
                    {svg}
                </IconLink>
            </Positioner>
        </div>
    {/each}
</div>
