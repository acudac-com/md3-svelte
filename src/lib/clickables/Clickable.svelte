<script module lang="ts">
	import { page } from '$app/state';
	import Layer from '$lib/ripple/Layer.svelte';
	import { Tooltip } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	export interface ClickableProps {
		children: Snippet;
		onclick?: (e: Event) => void;
		href?: string;
		toggled?: boolean;
		noHrefAutoToggle?: boolean;
		class?: string | string[];
		disabled?: boolean;
		disabledTitle?: string;
		tooltip?: string | string[];
		tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
	}
</script>

<script lang="ts">
	let { toggled = $bindable(), tooltipSide = 'top', ...p }: ClickableProps = $props();
	if (
		p.href &&
		!p.href.startsWith('http:') &&
		!p.href.startsWith('https:') &&
		!p.noHrefAutoToggle
	) {
		let pathName = page.url.pathname;
		let searchParams = page.url.searchParams;

		let hrefUrl = new URL(p.href, page.url.origin);
		let hrefPath = p.href;
		if (hrefPath.startsWith('?')) {
			hrefPath = pathName;
		}
		if (hrefPath.startsWith(pathName)) {
			if (hrefUrl.searchParams.size == 0) {
				toggled = true;
			} else {
				let hasAllSearchParams = true;
				hrefUrl.searchParams.forEach((value, key) => {
					console.log(key, value);
					if (searchParams.get(key) != value) {
						hasAllSearchParams = false;
					}
				});
				if (hasAllSearchParams) {
					toggled = true;
				}
			}
		}
	}
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
</script>

{#if p.href != undefined}
	<Tooltip.Provider>
		<Tooltip.Root delayDuration={300}>
			<Tooltip.Trigger
				title={p.disabled && p.disabledTitle ? p.disabledTitle : undefined}
				disabled={p.disabled}
			>
				<a
					class={twMerge('relative flex w-fit items-center justify-center rounded-full', p.class)}
					href={p.disabled ? undefined : p.href}
					title={p.disabled ? p.disabledTitle : undefined}
				>
					<Layer />
					{@render p.children()}
				</a>
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content forceMount={true} side={tooltipSide} sideOffset={6}>
					{#snippet child({ wrapperProps, props, open })}
						{#if open && tooltipText}
							<div {...wrapperProps}>
								<div {...props} in:scale={{ delay: 10 }} out:scale={{ delay: 10 }}>
									<p
										class="label-small min-h-[24px] items-center rounded-xs bg-inverse-surface px-[8px] text-inverse-on-surface"
									>
										{@html tooltipText}
									</p>
								</div>
							</div>
						{/if}
					{/snippet}
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	</Tooltip.Provider>
{:else}
	<Tooltip.Provider>
		<Tooltip.Root delayDuration={300}>
			<Tooltip.Trigger
				title={p.disabled ? p.disabledTitle : undefined}
				class={twMerge('relative flex w-fit items-center justify-center rounded-full', p.class)}
				disabled={p.disabled}
				onclick={p.onclick != undefined
					? p.onclick
					: (e) => {
							toggled = !toggled;
						}}
			>
				<Layer />
				{@render p.children()}
			</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content forceMount={true} side={tooltipSide} sideOffset={6}>
					{#snippet child({ wrapperProps, props, open })}
						{#if open && tooltipText}
							<div {...wrapperProps}>
								<div {...props} in:scale={{ delay: 10 }} out:scale={{ delay: 10 }}>
									<p
										class="label-small min-h-[24px] items-center rounded-xs bg-inverse-surface px-[8px] py-1 text-inverse-on-surface"
									>
										{@html tooltipText}
									</p>
								</div>
							</div>
						{/if}
					{/snippet}
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	</Tooltip.Provider>
{/if}
