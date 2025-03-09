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
		wFit?: boolean;
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

{#if p.href}
	<Clickable
		class={twMerge(
			[
				'relative flex flex-col rounded-md bg-surface-container-low p-[16px]',
				BgHoverColorClass(false, p.toggledColor, 'primary'),
				p.wFit ? 'w-fit' : 'w-full'
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
		bind:toggled
		{...p}
	>
		{@render children()}
	</Clickable>
{:else}
	<div
		class={twMerge(
			[
				'relative flex flex-col rounded-md bg-surface-container-low p-[16px]',
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
		{...p}
	>
		{@render children()}
	</div>
{/if}
