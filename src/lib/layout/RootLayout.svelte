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
		railWidth?: '70px' | '80px' | '90px' | '100px' | '110px' | '120px';
	}
</script>

<script lang="ts">
	let p: RootLayoutProps = $props();

	let railWidthClass = $derived.by(() => {
		switch (p.railWidth) {
			case '70px':
				return 'w-[70px] max-w-[70px]';
			case '80px':
				return 'w-[80px] max-w-[80px]';
			case '90px':
				return 'w-[90px] max-w-[90px]';
			case '100px':
				return 'w-[100px] max-w-[100px]';
			case '110px':
				return 'w-[110px] max-w-[110px]';
			case '120px':
				return 'w-[120px] max-w-[120px]';
			default:
				return 'w-[80px] max-w-[80px]';
		}
	});
</script>

<Col mobileOnly justify="between" class="max-w-full" wFull>
	<Row class="h-[64px] bg-surface-container px-[16px]" justify>
		{#if p.start}
			<Row wFit>{@render p.start()}</Row>
		{:else}
			<div></div>
		{/if}
		{#if p.end}
			<Row wFit gaps>{@render p.end()}</Row>
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
	<Col justify class={['bg-surface-container px-2 py-[16px]', railWidthClass]}>
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
			<Col hFit gaps>{@render p.end()}</Col>
		{:else}
			<div></div>
		{/if}
	</Col>
	<Col scroll wFull class="max-w-full">{@render p.children()}</Col>
</Row>
