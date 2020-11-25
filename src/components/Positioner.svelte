<script lang="ts">
    export let angle = 0;
    export let distance = 0;
</script>

<div style="--angle: {angle}deg; --distance: {distance}vmin;">
    <slot/>
</div>

<style>
	div {
        left: 50%;
        list-style: none;
        margin: 0;
        padding: 0;
        pointer-events: none;
        position: absolute;
        text-align: right;
        top: 50%;
        transform-origin: 0 50%;
        transform: translate(0, -50%) rotate(var(--angle));
        user-select: none;
        width: var(--distance);
	}
</style>