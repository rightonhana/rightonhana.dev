<script lang="ts">
</script>

<svg style="isolation:isolate;" viewBox="0 0 120 120">
	<defs>
		<clipPath id="a"><path d="M0 0h120v120H0z" /></clipPath>
	</defs>
	<g clip-path="url(#a)">
		<path
			fill="#fff"
			fill-rule="evenodd"
			d="M112 63.158v23.544L30.392 63.158H112zM11.811 27.802L34 15 60 0l26 15 26 15v26.699L11.811 27.802zM8 56.842V33.298l81.608 23.544H8zm100.189 35.356L86 105l-26 15-26-15L8 90V63.301l100.189 28.897z"
		/>
	</g>
</svg>

<style>
	svg {
		animation: wave 0.5s ease-out forwards;
		height: var(--size);
		left: 50%;
		opacity: 0;
		pointer-events: none;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		user-select: none;
		width: var(--size, 10vmin);
	}

	path {
		fill: var(--logo);
	}

	@keyframes wave {
		0% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(1, 1);
		}
		50% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(2, 2);
		}
		100% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1, 1);
		}
	}

	@media (prefers-reduced-motion) {
		svg {
			animation-name: dissolve;
			opacity: 1;
		}
	}
</style>