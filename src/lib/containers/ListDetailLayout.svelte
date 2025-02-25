<script lang="ts" module>
	export interface ItemProps<T> {
		href: string;
		item: T;
	}
</script>

<script lang="ts" generics="T">
	import { Row, Col } from '$lib/index.js';
	import type { Snippet } from 'svelte';
	import Icon from '../../internal/Icon.svelte';
	import { page } from '$app/state';
	import ReversedRow from './ReversedRow.svelte';
	import { Card, Layer } from 'm3-svelte';
	import CardClickable from './CardClickable.svelte';

	interface Props<T> {
		sidePanelWidth?: '1/2' | '1/3' | '1/4' | '1/5' | '2/3' | '2/5';
		items: ItemProps<T>[];
		href: string;
		listItemView: Snippet<[T]>;
		detailView: Snippet;
		detailViewSettings?: Snippet;
		listHeader?: Snippet;
	}
	let {
		sidePanelWidth = '2/5',
		items,
		listItemView,
		href,
		detailView,
		detailViewSettings,
		listHeader
	}: Props<T> = $props();

	let onHref = $derived(href == page.route.id);

	let leftCls = $derived.by(() => {
		// if (onHref) return 'w-full';
		if (sidePanelWidth === '1/2') return 'w-full md:w-1/2';
		if (sidePanelWidth === '1/4') return 'w-full md:w-1/4';
		if (sidePanelWidth === '1/5') return 'w-full md:w-1/5';
		if (sidePanelWidth === '2/3') return 'w-full md:w-2/3';
		if (sidePanelWidth === '2/5') return 'w-full md:w-2/5';
		return 'w-full md:w-2/5';
	});
</script>

<Row full gap>
	<Col desktopOnly={!onHref} container rounded spaced noShrink class={[leftCls]}>
		{#if listHeader}
			{@render listHeader()}
		{/if}
		{#each items as i}
			<Col containerHighest hover rounded wFull hFit href={i.href}>
				{@render listItemView(i.item)}
			</Col>
			<CardClickable type="filled" extraOptions={{ style: 'width:100%' }}>hi</CardClickable>
		{/each}
	</Col>
	<Col desktopOnly={onHref} container rounded wFull spaced>
		<Row justify class={onHref ? 'hidden' : 'flex'}>
			<Row {href} class="p-1" hoverHighest fit roundedFull
				><Icon size="36" icon="mdiArrowBack" /></Row
			>
			<ReversedRow gap>
				{#if detailViewSettings}
					{@render detailViewSettings()}
				{/if}
			</ReversedRow>
		</Row>
		{@render detailView()}
	</Col>
</Row>
