<script module lang="ts">
	import type { ClickableProps } from './Clickable.svelte';
	import type { Image, Svg } from '$lib/icons';
	import { twMerge } from 'tailwind-merge';
	import Clickable from './Clickable.svelte';
	import {
		BgColorClass,
		BgContainerColorClass,
		BorderColorClass,
		TextColorClass,
		TextOnColorClass,
		TextOnContainerColorClass,
		type MainColor
	} from '../colors';
	import { Icon } from '$lib';

	export interface ButtonProps
		extends Omit<ClickableProps, 'children' | 'tooltip' | 'tooltipSide'> {
		text: string;
		prependIcon?: Svg | Image;
		appendIcon?: Svg | Image;
		type?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text' | 'toggled';
		color?: MainColor;
	}
</script>

<script lang="ts">
	let { class: cls, type = 'filled', ...p }: ButtonProps = $props();
</script>

<Clickable
	class={twMerge(
		'label-large h-[40px] gap-[8px] rounded-full',
		!p.prependIcon && !p.appendIcon
			? 'px-[24px]'
			: !p.prependIcon
				? 'pl-[24px] pr-[16px]'
				: !p.appendIcon
					? 'pl-[16px] pr-[24px]'
					: 'pl-[16px] pr-[16px]',
		type == 'elevated'
			? p.disabled
				? 'bg-on-surface/10 text-on-surface/40 shadow-l1'
				: ['bg-surface-container-low shadow-l1 hover:shadow-l2', TextColorClass(p.color, 'primary')]
			: type == 'filled'
				? p.disabled
					? 'bg-on-surface/10 text-on-surface/40'
					: [BgColorClass(p.color, 'primary'), TextOnColorClass(p.color, 'primary')]
				: type == 'tonal'
					? p.disabled
						? 'bg-on-surface/10 text-on-surface/40'
						: [
								BgContainerColorClass(p.color, 'secondary'),
								TextOnContainerColorClass(p.color, 'secondary')
							]
					: type == 'outlined'
						? p.disabled
							? 'border border-on-surface/10 text-on-surface/40'
							: ['border', TextColorClass(p.color, 'primary'), BorderColorClass(p.color, 'primary')]
						: type == 'text'
							? p.disabled
								? 'text-on-surface/40'
								: TextColorClass(p.color, 'primary')
							: '',
		cls
	)}
	{...p}
>
	{#snippet children()}
		{#if p.prependIcon}
			<Icon icon={p.prependIcon} size="18" />
		{/if}
		{p.text}
		{#if p.appendIcon}
			<Icon icon={p.appendIcon} />
		{/if}
	{/snippet}
</Clickable>
