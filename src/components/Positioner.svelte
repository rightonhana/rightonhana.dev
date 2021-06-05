<script lang="ts">
</script>

<div>
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
		transform: translate(0, -50%) rotate(var(--angle, 0));
		user-select: none;
		width: var(--distance, 0);
	}
</style>