<script lang="ts" module>
	import { twMerge } from 'tailwind-merge';
	import Clickable, { type ClickableProps } from './Clickable.svelte';
	import {
		BgContainerColorClass,
		BgHoverColorClass,
		TextOnContainerColorClass,
		type MainColor
	} from '$lib/colors';

	export interface CardProps
		extends Omit<
			ClickableProps,
			'tooltip' | 'tooltipSide' | 'onclick' | 'disabled' | 'disabledTitle'
		> {
		type?: 'elevated' | 'filled' | 'outlined';
		toggledColor?: MainColor;
	}
</script>

<script lang="ts">
	let {
		children,
		toggled = $bindable(),
		class: cls,
		type = 'elevated',
		...p
	}: CardProps = $props();
</script>

<Clickable
	class={twMerge(
		[
			'relative m-[1px] flex flex-col rounded-md bg-surface-container-low p-[16px]',
			p.href ? BgHoverColorClass(false, p.toggledColor, 'primary') : ''
		],
		type == 'elevated'
			? ['shadow-l1', p.href ? 'hover:shadow-l2' : '']
			: type == 'filled'
				? 'bg-surface-container-highest'
				: 'border border-outline-variant bg-surface',
		toggled ? BgContainerColorClass(p.toggledColor, 'secondary') : '',
		toggled ? TextOnContainerColorClass(p.toggledColor, 'secondary') : '',
		cls
	)}
	disabled={!p.href}
	bind:toggled
	{...p}
>
	{@render children()}
</Clickable>
