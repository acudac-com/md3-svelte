<script lang="ts">
	import type { ItemProps } from '$lib/containers/ListDetailLayout.svelte';
	import { Row, ReversedRow, Col, ReversedCol, ListDetailLayout } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import Icon from '../../internal/Icon.svelte';

	let { children }: { children: Snippet } = $props();
	const href = '/showcase';

	let items: ItemProps<string>[] = [
		{ href: `${href}/containers`, item: 'Containers' },
		{ href: `${href}/components`, item: 'Components' }
	];
</script>

<ListDetailLayout {items} {href}>
	{#snippet listHeader()}
		<p class="text-lg font-bold">Showcase</p>
	{/snippet}
	{#snippet listItemView(item)}
		<p class="text-lg font-bold">{item}</p>
		<p>Click here for examples</p>
	{/snippet}
	{#snippet detailViewSettings()}
		<Icon size="36" icon="mdiAboutVariant" />
	{/snippet}
	{#snippet detailView()}
		{@render children()}
	{/snippet}
</ListDetailLayout>
