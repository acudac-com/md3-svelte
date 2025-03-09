<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../layout/$types';
	import { ListDetailsLayout, Row } from '$lib';
	import Card from '$lib/clickables/Card.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let open = $state(false);
</script>

<ListDetailsLayout href="/layouts" bind:open>
	<p class="title-medium">Layouts</p>
	<Card type="filled" href="/layouts/row">
		Row
		{#if open}
			(open)
		{/if}
	</Card>
	<Card type="filled" href="/layouts/col">Col</Card>
	<Card type="filled" href="/layouts/grid">Grid</Card>
	{#snippet details()}
		{@render children()}
	{/snippet}
	{#snippet detailsHeading()}
		<Row class="title-small">Examples</Row>
	{/snippet}
</ListDetailsLayout>
<!-- {@render children()} -->
