<script module lang="ts">
	import type { Image, Svg } from '$lib/icons';
	import { twMerge } from 'tailwind-merge';
	import type { ClickableProps } from './Clickable.svelte';

	export interface FabProps extends Omit<ClickableProps, 'children' | 'tooltipSide' | 'disabled'> {
		icon: Svg | Image;
		text?: string;
		type?: 'standard' | 'small' | 'large';
		color?: MainColor;
	}
</script>

<script lang="ts">
	import Clickable from './Clickable.svelte';
	import { Icon } from '$lib';
	import { BgContainerColorClass, TextOnContainerColorClass, type MainColor } from '../colors';

	let { class: cls, type = 'standard', ...p }: FabProps = $props();
</script>

<Clickable
	class={twMerge(
		'gap-[12px] shadow-l2 ease-in-out hover:shadow-l3',
		type == 'small'
			? 'label-medium h-[40px] rounded-md px-[8px]'
			: type == 'large'
				? 'body-large h-[96px] rounded-xl px-[30px]'
				: 'label-large h-[56px] rounded-lg px-[16px]',
		BgContainerColorClass(p.color, 'primary'),
		TextOnContainerColorClass(p.color),
		cls
	)}
	{...p}
>
	<Icon icon={p.icon} size={type == 'large' ? '36' : '24'} />
	{#if p.text}
		{p.text}
	{/if}
</Clickable>
