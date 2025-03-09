<script module lang="ts">
	import { Container, Row } from '$lib';
	import type { Snippet } from 'svelte';
	import { Col } from '$lib';
	import { twMerge } from 'tailwind-merge';
	import IconButton from '$lib/clickables/IconButton.svelte';
	import { mdiArrowBack } from '$lib/icons';
	import { page } from '$app/state';

	export interface ListDetailsLayoutProps {
		href: string;
		children: Snippet;
		details: Snippet;
		detailsHeading?: Snippet;
		widthRatio?: '1/5' | '1/4' | '1/3' | '2/5' | '1/2';
		class?: string | string[];
	}
</script>

<script lang="ts">
	let p: ListDetailsLayoutProps = $props();
	if (p.href.endsWith('/')) {
		p.href = p.href.slice(0, -1);
	}

	let listWidthClass = $derived.by(() => {
		switch (p.widthRatio) {
			case '1/5':
				return 'w-1/5';
			case '1/4':
				return 'w-1/4';
			case '1/3':
				return 'w-1/3';
			case '2/5':
				return 'w-2/5';
			case '1/2':
				return 'w-1/2';
			default:
				return 'w-2/5';
		}
	});
	let detailsWidthClass = $derived.by(() => {
		switch (p.widthRatio) {
			case '1/5':
				return 'md:w-4/5';
			case '1/4':
				return 'md:w-3/4';
			case '1/3':
				return 'md:w-2/3';
			case '2/5':
				return 'md:w-3/5';
			case '1/2':
				return 'md:w-1/2';
			default:
				return 'md:w-3/5';
		}
	});

	let onListView = $derived.by(() => {
		let currentHref = page.url.pathname;
		if (currentHref.startsWith(p.href) && !currentHref.startsWith(p.href + '/')) {
			return true;
		}
		return false;
	});
</script>

<Row hFull class="gap-2 p-2 md:gap-3 md:p-3">
	<Container
		scroll
		class={twMerge(['gap-2', onListView ? 'w-full' : listWidthClass + ' hidden md:flex'], p.class)}
	>
		{#if p.children}
			{@render p.children()}
		{:else}
			<p class="text-error">Missing list snippet</p>
		{/if}
	</Container>
	<Container class={['p-0 md:p-0', onListView ? 'hidden' : 'w-full ' + detailsWidthClass]}>
		<Row class={['my-2 pr-3']}>
			<IconButton class="mx-2" icon={mdiArrowBack} href={p.href} />
			{#if p.detailsHeading}
				{@render p.detailsHeading()}
			{/if}
		</Row>
		<Col wFull scroll class="p-2 md:p-3">
			{#if p.details}
				{@render p.details()}
			{:else}
				<p class="text-error">Missing details snippet</p>
			{/if}
		</Col>
	</Container>
</Row>
