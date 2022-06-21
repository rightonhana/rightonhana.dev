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
		animation: wave 0.3s ease-out forwards;
		animation-delay: var(--animation-delay, 0s);
		border-radius: 50%;
		color: var(--icon);
		display: inline-block;
		opacity: 0;
		overflow: hidden;
		pointer-events: all;
		transform: rotate(var(--angle, 0)) scale(1);
		transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
		will-change: opacity, transform;
	}

	a:hover,
	a:focus {
		outline: 0;
		transform: rotate(var(--angle, 0)) scale(1.1) !important;
	}

	a:hover,
	a:focus {
		color: var(--color, #000);
	}

	@keyframes wave {
		0% {
			opacity: 0;
			transform:  rotate(var(--angle, 0)) scale(1, 1);	
		}
		50% {
			opacity: 1;
			transform:  rotate(var(--angle, 0)) scale(1.3, 1.3);
		}
		100% {
			opacity: 1;
			transform:  rotate(var(--angle, 0)) scale(1, 1);
		}
	}

	@media (prefers-reduced-motion) {
		a {
			animation-name: dissolve;
			opacity: 1;
		}
	}
</style>