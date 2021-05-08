<script lang="ts">
	import Home from "./Home.svelte";

</script>

<main>
	<header>Florencia Gonzalez personal website</header>
	<Home/>
</main>

<style>
	:global(:root) {
		--background: #141e30;
		--background-secondary: rgb(20,30,48);
		--foreground: #bbbfca;
		--foreground-secondary: #495464;
		--body: var(--background);
		--hexagon: var(--foreground);
		--icon: var(--background);
		--logo: var(--foreground);
		--gradient-a: var(--background-secondary);
		--gradient-b: var(--background);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--body: var(--foreground);
			--hexagon: var(--background);
			--icon: var(--foreground);
			--logo: var(--background);
			--gradient-a: var(--foreground);
			--gradient-b: var(--foreground-secondary);
		}
	}

	:global(body) {
		background-color: var(--body);
		background-image: linear-gradient(306deg, rgba(54, 54, 54, 0.05) 0%, rgba(54, 54, 54, 0.05) 33.333%,rgba(85, 85, 85, 0.05) 33.333%, rgba(85, 85, 85, 0.05) 66.666%,rgba(255, 255, 255, 0.05) 66.666%, rgba(255, 255, 255, 0.05) 99.999%),linear-gradient(353deg, rgba(81, 81, 81, 0.05) 0%, rgba(81, 81, 81, 0.05) 33.333%,rgba(238, 238, 238, 0.05) 33.333%, rgba(238, 238, 238, 0.05) 66.666%,rgba(32, 32, 32, 0.05) 66.666%, rgba(32, 32, 32, 0.05) 99.999%),linear-gradient(140deg, rgba(192, 192, 192, 0.05) 0%, rgba(192, 192, 192, 0.05) 33.333%,rgba(109, 109, 109, 0.05) 33.333%, rgba(109, 109, 109, 0.05) 66.666%,rgba(30, 30, 30, 0.05) 66.666%, rgba(30, 30, 30, 0.05) 99.999%),linear-gradient(189deg, rgba(77, 77, 77, 0.05) 0%, rgba(77, 77, 77, 0.05) 33.333%,rgba(55, 55, 55, 0.05) 33.333%, rgba(55, 55, 55, 0.05) 66.666%,rgba(145, 145, 145, 0.05) 66.666%, rgba(145, 145, 145, 0.05) 99.999%),linear-gradient(90deg, var(--gradient-a),var(--gradient-b));
		background-size: cover;
		font-family: sans-serif;
		margin: 0;
		min-height: 100vh;
		overflow: hidden;
		padding: 0;
	}

	header {
		display: none;
	}

</style>