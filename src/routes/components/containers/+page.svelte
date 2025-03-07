<script>
	import { Button, Dialog } from '$lib';
	import IconButton from '$lib/clickables/IconButton.svelte';
	import { mdiSettings } from '$lib/icons';
	let open = $state(false);
</script>

<IconButton icon={mdiSettings} bind:toggled={open} />
<Dialog bind:open>
	<p>Card content</p>
	<Button
		onclick={(e) => {
			console.log('close');
			open = false;
		}}
		color="error"
		text="Close"
	/>
</Dialog>
