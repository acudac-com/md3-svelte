<script module lang="ts">
	import type { NavBtnProps } from '$lib/clickables/NavBtn.svelte';
	import NavBtn from '$lib/clickables/NavBtn.svelte';
	import Col from '$lib/layout/Col.svelte';
	import Row from '$lib/layout/Row.svelte';
	import type { Snippet } from 'svelte';

	export interface RootLayoutProps {
		start?: Snippet;
		end?: Snippet;
		navBtns: NavBtnProps[];
		navRailTop?: boolean;
		children: Snippet;
	}
</script>

<script lang="ts">
	let p: RootLayoutProps = $props();
</script>

<Col mobileOnly justify="between" class="max-w-full" wFull>
	<Row class="h-[64px] bg-surface-container px-[16px]" justify>
		{#if p.start}
			<Row wFit>{@render p.start()}</Row>
		{:else}
			<div></div>
		{/if}
		{#if p.end}
			<Row wFit>{@render p.end()}</Row>
		{:else}
			<div></div>
		{/if}
	</Row>
	<Col scroll wFull class="max-w-full">{@render p.children()}</Col>
	<Row class="h-[80px] max-h-[80px] bg-surface-container" justify="around">
		{#each p.navBtns as navBtn}
			<NavBtn {...navBtn} />
		{/each}
	</Row>
</Col>

<Row desktopOnly hFull>
	<Col justify class="w-[90px] max-w-[90px] bg-surface-container py-[16px]">
		{#if p.start}
			<Col hFit>{@render p.start()}</Col>
		{:else}
			<div></div>
		{/if}
		<Col hFit class="gap-[12px]">
			{#each p.navBtns as navBtn}
				<NavBtn {...navBtn} />
			{/each}
		</Col>
		{#if p.end}
			<Col hFit>{@render p.end()}</Col>
		{:else}
			<div></div>
		{/if}
	</Col>
	<Col scroll wFull class="max-w-full">{@render p.children()}</Col>
</Row>
