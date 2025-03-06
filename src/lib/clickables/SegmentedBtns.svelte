<script lang="ts" module>
	import { Icon } from '$lib';
	import { mdiCheck, type Image, type Svg } from '$lib/icons';
	import Layer from '$lib/ripple/Layer.svelte';
	import { scale } from 'svelte/transition';

	interface SegmentedBtnOption
		extends Omit<ClickableProps, 'children' | 'tooltipSide' | 'toggled' | 'noHrefAutoToggle'> {
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

	let { class: cls, selected = $bindable([]), ...p }: SegmentedBtnsProps = $props();

	let toggled: { [key: string]: boolean } = $state({});
	let previousToggled: { [key: string]: boolean } = $state({});
	$effect(() => {
		let changedKey = '';
		// iterate through toggled
		for (let key in toggled) {
			// if the value of the key has changed
			if (toggled[key] !== previousToggled[key]) {
				// set the changedKey to the key
				changedKey = key;
				// break the loop
				break;
			}
		}
		if (!p.multi) {
			console.log('ck', changedKey);
			// if the changed key is not empty
			if (changedKey !== '') {
				// iterate through toggled
				for (let key in toggled) {
					// if the key is not the changed key
					if (key !== changedKey) {
						// set the value of the key to false
						toggled[key] = false;
					}
				}
			}
		}
		Object.assign(previousToggled, toggled);
		let newSelected = [];
		for (let option of p.options) {
			if (toggled[option.id]) {
				newSelected.push(option.id);
			}
		}
		selected = newSelected;
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
