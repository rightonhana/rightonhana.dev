<script lang="ts">
	import Home from "./Home.svelte";

</script>

<main>
	<header>Florencia Gonzalez personal website</header>
	<Home/>
</main>

<style>
	:global(:root) {
		--background: #0F0E17;
		--foreground: #DDD;
		--body: var(--background);
		--hexagon: var(--foreground);
		--icon: var(--background);
		--logo: var(--foreground);
	}

	/* Apply a light color scheme */
	@media (prefers-color-scheme: light) {
	:global(:root) {
		--body: var(--foreground);
		--hexagon: var(--background);
		--icon: var(--foreground);
		--logo: var(--background);
	}
	}

	:global(body) {
		background-color: var(--body);
		font-family: sans-serif;
		margin: 0;
		overflow: hidden;
		padding: 0;
	}

	header {
		display: none;
	}

</style>