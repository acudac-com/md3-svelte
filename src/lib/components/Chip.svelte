<script module lang="ts">
	import Clickable, { type ClickableProps } from './Clickable.svelte';
	import type { Svg, Image } from '$lib/icons';
	import {
		BgContainerColorClass,
		BgHoverColorClass,
		TextColorClass,
		TextOnContainerColorClass,
		type MainColor
	} from '../colors';
	import { twMerge } from 'tailwind-merge';
	import { Icon } from '$lib';

	export interface ChipProps extends Omit<ClickableProps, 'children' | 'tooltipSide' | 'tooltip'> {
		text: string;
		icon?: Svg | Image;
		class?: string | string[];
		color?: MainColor;
		elevated?: boolean;
	}
</script>

<script lang="ts">
	let { text, icon, class: cls, toggled = $bindable(false), ...p }: ChipProps = $props();
</script>

<Clickable
	class={twMerge(
		'label-medium h-[32px] w-fit shrink-0 grow-0 gap-[8px] rounded-sm border border-transparent',
		!icon ? 'px-[16px]' : 'pl-[8px] pr-[16px]',
		p.elevated ? 'shadow-l1 hover:shadow-l2' : '',
		p.disabled
			? 'border-on-surface/15 bg-on-surface/10 text-on-surface/40'
			: toggled
				? [
						BgContainerColorClass(p.color, 'secondary'),
						TextOnContainerColorClass(p.color, 'secondary')
					]
				: 'mx-0 border-outline-variant text-on-surface-variant',
		!p.disabled ? BgHoverColorClass(false, p.color, 'primary') : '',

		cls
	)}
	bind:toggled
	{...p}
>
	{#if icon}
		<Icon class={TextColorClass(p.color, 'primary')} {icon} size="18" />
	{/if}
	{text}
</Clickable>
