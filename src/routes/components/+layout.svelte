<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../layouts/$types';
	import { Card, ListDetailsLayout, Row } from '$lib';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<ListDetailsLayout href="/layouts">
	<p class="title-medium">Layouts</p>
	<Card type="filled" href="/layouts/Button">Button</Card>
	<Card type="filled" href="/layouts/Card">Card</Card>
	<Card type="filled" href="/layouts/Checkbox">Checkbox</Card>
	<Card type="filled" href="/layouts/Chip">Chip</Card>
	<Card type="filled" href="/layouts/CircularProgress">CircularProgress</Card>
	<Card type="filled" href="/layouts/Clickable">Clickable</Card>
	<Card type="filled" href="/layouts/"></Card>
	{#snippet details()}
		{@render children()}
	{/snippet}
	{#snippet detailsHeading()}
		<Row class="title-small">Examples</Row>
	{/snippet}
</ListDetailsLayout>
<!-- {@render children()} -->
