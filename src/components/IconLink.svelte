<script lang="ts">
    import Hexagon from "./Hexagon.svelte";
    import ReactiveLink from "./ReactiveLink.svelte";
    import type LinkProps from "../types/LinkProps";
    import type HexagonProps from "../types/HexagonProps";
    import MediaIcon from "./MediaIcon.svelte";

    export let angle: number;
    export let color: string;
    export let href: string;
    export let size: number;
    export let title: string;
    export let path: string;

    const linkProps: LinkProps = {
        angle: -angle,
        color,
        href,
        title
    };

    const hexagonProps: HexagonProps = {
        size
    };
</script>

<ReactiveLink {...linkProps}>
    <Hexagon {...hexagonProps}>
        <MediaIcon path={path}/>
    </Hexagon>
</ReactiveLink>