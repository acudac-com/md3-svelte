<script module lang="ts">
	import { page } from '$app/state';
	import Layer from '$lib/ripple/Layer.svelte';
	import { Tooltip } from 'bits-ui';
	import { onMount, type Snippet } from 'svelte';
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { hrefIsToggled, newToggledHref } from './utils';

	export interface ClickableProps {
		children: Snippet;
		onclick?: (e: Event) => void;
		href?: string;
		toggled?: boolean;
		disableAutoToggle?: boolean;
		class?: string | string[];
		disabled?: boolean;
		disabledTitle?: string;
		tooltip?: string | string[];
		tooltipOpenDelay?: number;
		tooltipCloseDelay?: number;
		tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
		anchorName?: string;
	}
</script>

<script lang="ts">
	import Menu from '$lib/layout/Menu.svelte';

	let {
		toggled = $bindable(),
		tooltipOpenDelay = 300,
		tooltipCloseDelay = 600,
		tooltipSide = 'top',
		...p
	}: ClickableProps = $props();

	let href = $derived(newToggledHref(page.url, p.href));
	$effect(() => {
		if (href) {
			if (!p.disableAutoToggle && hrefIsToggled(page.url, p.href)) {
				toggled = true;
			} else {
				toggled = false;
			}
		}
	});
	let tooltipText = $derived.by(() => {
		if (p.tooltip == undefined) {
			return undefined;
		}
		if (typeof p.tooltip === 'string') {
			return p.tooltip;
		} else {
			return p.tooltip.join('<br>');
		}
	});

	let targetElement: HTMLElement | undefined = $state();

	onMount(() => {
		setTimeout(() => {
			if (targetElement) {
				if (toggled) {
					targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}
		}, 100); // Adjust timeout as needed
	});
</script>

<Menu
	anchorName={p.anchorName}
	side={tooltipSide}
	disableAutoClose
	class="rounded-xs bg-inverse-surface p-1 text-inverse-on-surface"
>
	{#snippet trigger(md)}
		{#if href != undefined}
			<a
				class={twMerge('relative flex w-fit items-center justify-center', p.class)}
				href={p.disabled ? undefined : href}
				title={p.disabled ? p.disabledTitle : undefined}
				bind:this={targetElement}
				style={`anchor-name:${md.anchorName}`}
				onmouseenter={() => {
					if (tooltipText) {
						md.show(tooltipOpenDelay);
					}
				}}
				onmouseleave={() => {
					md.hide(tooltipCloseDelay);
				}}
			>
				{#if !p.disabled}
					<Layer />
				{/if}
				{@render p.children()}
			</a>
		{:else}
			<button
				style={`anchor-name:${md.anchorName}`}
				onmouseenter={() => {
					if (tooltipText) {
						md.show(tooltipOpenDelay);
					}
				}}
				onmouseleave={() => {
					md.hide(tooltipCloseDelay);
				}}
				title={p.disabled ? p.disabledTitle : undefined}
				class={twMerge('relative flex w-fit items-center justify-center', p.class)}
				disabled={p.disabled}
				onclick={p.onclick != undefined
					? p.onclick
					: (e) => {
							if (!p.disableAutoToggle) {
								toggled = !toggled;
							}
						}}
			>
				<Layer />
				{@render p.children()}
			</button>
		{/if}
	{/snippet}

	{#if p.tooltip}
		<p>{p.tooltip}</p>
	{/if}
</Menu>

<style>
</style>
