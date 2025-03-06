<script lang="ts" module>
	import { Icon } from '$lib';
	import { type Image, type Svg } from '$lib/icons';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	import { BorderColorClass, TextColorClass, type MainColor } from '../colors';
	import Clickable, { type ClickableProps } from './Clickable.svelte';
	import { page } from '$app/state';

	interface SecondaryTabOption
		extends Omit<
			ClickableProps,
			'children' | 'tooltipSide' | 'toggled' | 'noHrefAutoToggle' | 'onclick'
		> {
		text: string;
	}
	interface PrimaryTabOption extends SecondaryTabOption {
		icon: Svg | Image;
	}
	interface SegmentedBtnsProps {
		options: PrimaryTabOption[] | SecondaryTabOption[];
		class?: ClassNameValue;
		selected?: string;
		color?: MainColor;
		noHrefAutoToggle?: boolean;
	}
</script>

<script lang="ts">
	import { text } from '@sveltejs/kit';
	import Layer from '$lib/ripple/Layer.svelte';
	import { hrefIsToggled } from './utils';

	let { class: cls, selected = $bindable(''), ...p }: SegmentedBtnsProps = $props();

	for (let o of p.options) {
		if (o.href && o.href.startsWith('?')) {
			let hrefSearchParams = new URLSearchParams(o.href);
			let finalSearchParams = new URLSearchParams(page.url.search);
			for (let [key, value] of hrefSearchParams) {
				if (finalSearchParams.has(key)) {
					finalSearchParams.delete(key);
				}
				finalSearchParams.append(key, value);
			}
			o.href = page.url.pathname + '?' + finalSearchParams.toString();
		}
	}

	$effect(() => {
		for (let o of p.options) {
			if (hrefIsToggled(page.url, o.href)) {
				selected = o.text;
				break;
			}
		}
		if (selected == '') {
			selected = p.options[0].text;
		}
	});
</script>

{#snippet tab(option: PrimaryTabOption | SecondaryTabOption)}
	<Layer />
	<div
		class={[
			'flex h-full w-full flex-col items-center justify-between',
			selected == option.text ? TextColorClass(p.color) : ''
		]}
	>
		<div class="mt-[10px] flex flex-col items-center">
			{#if 'icon' in option}
				<Icon icon={option.icon} size="18" />
			{/if}
			{option.text}
		</div>
		<div
			class={[
				'border-b-[3px]',
				'icon' in option ? 'w-2/3 rounded-tl-md rounded-tr-md' : 'w-full',
				selected == option.text ? BorderColorClass(p.color, 'primary') : 'border-transparent'
			]}
		></div>
	</div>
{/snippet}

<div
	class={twMerge(
		[
			'title-small flex w-full flex-nowrap justify-around overflow-x-scroll bg-surface',
			'icon' in p.options[0] ? 'h-[64px]' : 'h-[48px]'
		],
		cls
	)}
>
	{#each p.options as option, index}
		{@const { text, class: oCls, ...clickableProps } = option}
		{#if !clickableProps.href}
			<button
				onclick={() => {
					selected = option.text;
				}}
				{...clickableProps}
				class={twMerge(['relative flex w-full overflow-x-clip whitespace-nowrap'], oCls)}
			>
				{@render tab(option)}
			</button>
		{:else}
			<a
				class={twMerge(['relative flex w-full overflow-x-clip whitespace-nowrap'], oCls)}
				href={option.href}
			>
				{@render tab(option)}
			</a>
		{/if}
	{/each}
</div>
