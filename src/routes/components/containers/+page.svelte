<script>
	import { Button, Dialog, Fab, Menu, Row } from '$lib';
	import Card from '$lib/clickables/Card.svelte';
	import IconButton from '$lib/clickables/IconButton.svelte';
	import Container from '$lib/containers/Container.svelte';
	import FabContainer from '$lib/containers/FabContainer.svelte';
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

<Card class="h-[300px] w-[400px]">
	<FabContainer>
		<Fab icon={mdiSettings} type="small" color="tertiary" />
		<Fab icon={mdiSettings} />
	</FabContainer>
</Card>

<Container class="m-4">content</Container>
