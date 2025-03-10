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

<ListDetailsLayout href="/layouts">
	<p class="title-medium">Layouts</p>
	<Card type="filled" href="/layouts/Row">Row</Card>
	<Card type="filled" href="/layouts/Col">Col</Card>
	<Card type="filled" href="/layouts/Grid">Grid</Card>
	<Card type="filled" href="/layouts/Menu">Menu</Card>
	<Card type="filled" href="/layouts/Dialog">Dialog</Card>
	<Card type="filled" href="/layouts/FabContainer">FabContainer</Card>
	<Card type="filled" href="/layouts/RootLayout">RootLayout</Card>
	<Card type="filled" href="/layouts/ListDetailsLayout">ListDetailsLayout</Card>
	{#snippet details()}
		{@render children()}
	{/snippet}
	{#snippet detailsHeading()}
		<Row class="title-small">
			{component}
		</Row>
	{/snippet}
</ListDetailsLayout>
<!-- {@render children()} -->
