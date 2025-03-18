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
	<Card type="filled" href="/components/DatePicker">DatePicker</Card>
	<Card type="filled" href="/components/Divider">Divider</Card>
	<Card type="filled" href="/components/Fab">Fab</Card>
	<Card type="filled" href="/components/FabDialog">FabDialog</Card>
	<Card type="filled" href="/components/Icon">Icon</Card>
	<Card type="filled" href="/components/IconButton">IconButton</Card>
	<Card type="filled" href="/components/IconDialog">IconDialog</Card>
	<Card type="filled" href="/components/IconMenu">IconMenu</Card>
	<Card type="filled" href="/components/LinearProgress">LinearProgress</Card>
	<Card type="filled" href="/components/Link">Link</Card>
	<Card type="filled" href="/components/MultiSelect">MultiSelect</Card>
	<Card type="filled" href="/components/NavBtn">NavBtn</Card>
	<Card type="filled" href="/components/OutlinedTextArea">OutlinedTextArea</Card>
	<Card type="filled" href="/components/OutlinedTextField">OutlinedTextField</Card>
	<Card type="filled" href="/components/RadioButtons">RadioButtons</Card>
	<Card type="filled" href="/components/SegmentedBtns">SegmentedBtns</Card>
	<Card type="filled" href="/components/Select">Select</Card>
	<Card type="filled" href="/components/Slider">Slider</Card>
	<Card type="filled" href="/components/Switch">Switch</Card>
	<Card type="filled" href="/components/Tabs">Tabs</Card>
	<Card type="filled" href="/components/TextArea">TextArea</Card>
	<Card type="filled" href="/components/TextField">TextField</Card>

	{#snippet detailsHeading()}
		<Row class="title-small">
			{component}
		</Row>
	{/snippet}

	{#snippet details()}
		{@render children()}
	{/snippet}
</ListDetailsLayout>
