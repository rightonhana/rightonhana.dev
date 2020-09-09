<script lang="ts">
	export let size = 10;
</script>

<div style="--size:{size}vmin;"></div>

<style>
	div {
        background-color: var(--hexagon);
        background-position: 50%;
        background-repeat: no-repeat;
        border-radius: 50%;
        display: inline-block;
        height: var(--size);
        left: 50%;
        clip-path: polygon(6.7% 25%, 50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%);
        top: 50%;
        width: var(--size);
	}
</style>