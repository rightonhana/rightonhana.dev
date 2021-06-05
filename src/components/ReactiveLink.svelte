<script lang="ts">
	export let href: string;
	export let title = "";
</script>

<a rel="noopener noreferrer"
	href="{href}"
	title="{title}"
>
	<slot />
</a>

<style>
	a {
		border-radius: 50%;
		color: var(--icon);
		display: inline-block;
		overflow: hidden;
		pointer-events: all;
		transform: rotate(var(--angle, 0)) scale(1);
		will-change: opacity, transform;
		transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
	}

	a:hover,
	a:focus {
		outline: 0;
		transform: rotate(var(--angle, 0)) scale(1.1);
	}

	a:hover,
	a:focus {
		color: var(--color, #000);
	}
</style>