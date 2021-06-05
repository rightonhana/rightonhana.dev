<script lang="ts">
	import IconLinks from "./IconLinks.svelte";
	import Logo from "./Logo.svelte";
	import links from "../constants/links"
</script>


<Logo --size="18vmin" />
<IconLinks links={links} />
