<script lang="ts">
  import type Link from "../types/Link";
  import type LinkToRender from "../types/LinkToRender";
  import { setAngle,setDistance } from "../utils/angles";
  import IconLink from "./IconLink.svelte";
  import Positioner from "./Positioner.svelte";



  export let links: Link[] = [];

  const linksToRender: LinkToRender[] = links
    .map((link, index) => ({
      ...link,
      angle: setAngle(index),
      distance: setDistance(index),
    }))
    .sort((linkA, linkB) => (linkA.tab > linkB.tab ? 1 : -1));
</script>

<nav>
  {#each linksToRender as { angle, color, distance, href, path, title }}
    <Positioner {angle} {distance}>
      <IconLink {angle} {color} {href} {path} {title} size={18} />
    </Positioner>
  {/each}
</nav>
