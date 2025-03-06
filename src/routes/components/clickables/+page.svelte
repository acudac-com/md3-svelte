<script>
	import { Clickable } from '$lib';
	import IconButton from '$lib/clickables/IconButton.svelte';
	import { mdiSettings } from '$lib/icons';
	let toggled = $state(false);
</script>

<Clickable
	bind:toggled
	tooltip="tooltip"
	class={['bg-primary-container', toggled ? 'bg-primary' : '']}>Clickable</Clickable
>
<IconButton bind:toggled icon={mdiSettings} color="error" />
<IconButton bind:toggled icon={mdiSettings} type="tonal" />
<IconButton bind:toggled icon={mdiSettings} type="filled" />
<IconButton bind:toggled icon={mdiSettings} type="outlined" />
