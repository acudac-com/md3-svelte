<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../layouts/$types';
	import { Card, ListDetailsLayout, Row } from '$lib';
	import { page } from '$app/state';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let component = $derived.by(() => {
		let parts = page.url.pathname.split('/');
		return parts[parts.length - 1];
	});
</script>

<ListDetailsLayout href="/components">
	<p class="title-medium">Layouts</p>
	<Card type="filled" href="/components/Button">Button</Card>
	<Card type="filled" href="/components/ButtonDialog">ButtonDialog</Card>
	<Card type="filled" href="/components/Card">Card</Card>
	<Card type="filled" href="/components/Checkbox">Checkbox</Card>
	<Card type="filled" href="/components/Chip">Chip</Card>
	<Card type="filled" href="/components/ChipDialog">ChipDialog</Card>
	<Card type="filled" href="/components/CircularProgress">CircularProgress</Card>
	<Card type="filled" href="/components/Clickable">Clickable</Card>
	<Card type="filled" href="/components/Divider">Divider</Card>
	<Card type="filled" href="/components/Fab">Fab</Card>
	<Card type="filled" href="/components/FabDialog">FabDialog</Card>
	<Card type="filled" href="/components/Icon">Icon</Card>
	<Card type="filled" href="/components/IconButton">IconButton</Card>
	<Card type="filled" href="/components/IconDialog">IconDialog</Card>
	<Card type="filled" href="/components/IconMenu">IconMenu</Card>

	{#snippet detailsHeading()}
		<Row class="title-small">
			{component}
		</Row>
	{/snippet}

	{#snippet details()}
		{@render children()}
	{/snippet}
</ListDetailsLayout>
