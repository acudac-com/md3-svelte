<script lang="ts" module>
	import { Icon } from '$lib';
	import { mdiCheck, type Image, type Svg } from '$lib/icons';
	import { scale } from 'svelte/transition';

	interface SegmentedBtnOption
		extends Omit<
			ClickableProps,
			'children' | 'tooltipSide' | 'toggled' | 'noHrefAutoToggle' | 'onclick'
		> {
		id: string;
		text?: string;
		icon?: Svg | Image;
	}
	interface SegmentedBtnsProps {
		options: SegmentedBtnOption[];
		multi?: boolean;
		class?: ClassNameValue;
		selected?: string[];
		color?: MainColor;
		noHrefAutoToggle?: boolean;
	}
</script>

<script lang="ts">
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	import {
		BgContainerColorClass,
		TextOnContainerColorClass,
		type MainColor
	} from '../../theme/colors';
	import Clickable, { type ClickableProps } from './Clickable.svelte';
	import { page } from '$app/state';

	let { class: cls, selected = $bindable([]), ...p }: SegmentedBtnsProps = $props();

	if (!p.multi) {
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
	}

	let toggled: { [key: string]: boolean } = $state({});
	let previousSelected = new Set<string>();
	$effect(() => {
		let newSelected = [];
		for (let option of p.options) {
			if (toggled[option.id]) {
				newSelected.push(option.id);
			}
		}
		let toggleRequiresChange = false;
		if (newSelected.length > 1 && !p.multi) {
			newSelected = newSelected.filter((key) => !previousSelected.has(key));
			toggleRequiresChange = true;
		}
		let changed = false;
		if (newSelected.length != selected.length) {
			changed = true;
		} else {
			for (let i = 0; i < newSelected.length; i++) {
				if (newSelected[i] !== selected[i]) {
					changed = true;
					break;
				}
			}
		}
		if (changed) {
			selected = newSelected;
		}
		previousSelected = new Set(newSelected);

		if (toggleRequiresChange) {
			for (let key in toggled) {
				if (!newSelected.includes(key)) {
					toggled[key] = false;
				}
			}
		}
	});

	if (p.options.length > 5 || p.options.length < 1) {
		throw new Error('SegmentedBtns must have between 1 and 5 options');
	}
	let gridColsCls = $derived.by(() => {
		switch (p.options.length) {
			case 1:
				return 'grid-cols-1';
			case 2:
				return 'grid-cols-2';
			case 3:
				return 'grid-cols-3';
			case 4:
				return 'grid-cols-4';
			case 5:
				return 'grid-cols-5';
			default:
				return 'grid-cols-1';
		}
	});
</script>

<div class={twMerge(['grid h-fit w-fit rounded-full border border-outline', gridColsCls], cls)}>
	{#each p.options as option, index}
		{@const { id, text, icon, class: oCls, ...clickableProps } = option}
		<Clickable
			bind:toggled={toggled[option.id]}
			{...clickableProps}
			class={twMerge(
				[
					'label-large relative flex h-[40px] w-full min-w-[60px] items-center justify-center overflow-x-clip whitespace-nowrap px-6',
					option.disabled
						? 'bg-on-surface/10 text-on-surface/40'
						: toggled[option.id]
							? BgContainerColorClass(p.color, 'secondary') +
								' ' +
								TextOnContainerColorClass(p.color, 'secondary')
							: 'text-on-surface',
					index == 0
						? 'rounded-l-full border-r border-outline'
						: index == p.options.length - 1
							? 'rounded-r-full'
							: 'border-r border-outline'
				],
				oCls
			)}
		>
			<div in:scale class="flex shrink-0 grow-0 items-center gap-2">
				{#if toggled[option.id]}
					<div in:scale class="flex shrink-0 grow-0 items-center">
						<Icon icon={mdiCheck} size="18" />
					</div>
				{/if}
				{#if option.icon && (!toggled[option.id] || !option.text)}
					<Icon icon={option.icon} size="18" />
				{/if}
				{option.text}
			</div>
		</Clickable>
	{/each}
</div>
