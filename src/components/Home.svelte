<script lang="ts">
        import IconLinks from "./IconLinks.svelte";
        import Logo from "./Logo.svelte";
        import links from "../constants/links"
</script>


<Logo color="var(--logo)" size={18} />
<IconLinks links={links} />
