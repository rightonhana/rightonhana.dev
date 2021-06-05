<script lang="ts">
	export let path = "";
</script>

<svg style="isolation:isolate;" viewBox="0 0 16 16">
	<path d={path} fill="#fff" fill-rule="evenodd"/>
</svg>

<style>
	path {
		fill: currentColor;
		transition: fill 0.2s ease-in-out;
	}
</style>