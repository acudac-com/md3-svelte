<script lang="ts">
	import { Col, Divider } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		A ListDetailsLayout is used to list elements on the left and show their details on the right. On
		mobile devices only the left (list) or right (detail) view is shown based on the url. This
		component is mostly used in +layout.svelte files.
	</p>
	<Divider />

	<Example
		title=""
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
			The view you are looking at uses ListDetailsLayout, with the list of components on the left
			and their details on the right.
		</p>
	</Example>
</Col>
