<script>
	import { Button, Dialog, Menu, Row } from '$lib';
	import Card from '$lib/clickables/Card.svelte';
	import IconButton from '$lib/clickables/IconButton.svelte';
	import { mdiSettings } from '$lib/icons';
	let open = $state(false);
	let menuOpen = $state(false);
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

<Menu class="ml-0" sideOffset={4} bind:open={menuOpen}>
	{#snippet trigger()}
		<IconButton icon={mdiSettings} bind:toggled={menuOpen} />
	{/snippet}
	<Card class="px-8">
		<p class="headline-medium">Headline</p>
		<Row justify="end" gaps>
			<Button
				text="Cancel"
				onclick={() => {
					menuOpen = false;
				}}
			/>
			<Button text="Save" />
		</Row>
	</Card>
</Menu>
