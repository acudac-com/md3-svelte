<script lang="ts">
	import { Col } from '$lib';
	import Chip from '$lib/clickables/Chip.svelte';
	import Example from '$lib/internal/Example.svelte';
	import Row from '$lib/layout/Row.svelte';
</script>

<Col wFull hFit gaps>
	<Example
		title="Standard"
		code={`<ListDetailsLayout href="/layouts">
	<p class="title-medium">Layouts</p>
	<Card type="filled" href="/layouts/row">Row</Card>
	<Card type="filled" href="/layouts/col">Col</Card>
	<Card type="filled" href="/layouts/grid">Grid</Card>
	<Card type="filled" href="/layouts/rootLayout">RootLayout</Card>
	<Card type="filled" href="/layouts/listDetailsLayout">ListDetailsLayout</Card>
	{#snippet details()}
		{@render children()}
	{/snippet}
	{#snippet detailsHeading()}
		<Row class="title-small">Examples</Row>
	{/snippet}
</ListDetailsLayout>`}
	>
		<p>
			The view you are looking at uses ListDetailsLayout, with list of components on the left and
			their details on the right.
		</p>
	</Example>
</Col>
