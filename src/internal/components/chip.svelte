<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Icon, { type IconType } from '../../lib/components/Icon.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import Layer from '../../lib/ripples/Layer.svelte';

	export interface ChipProps {
		text: string;
		icon?: IconType;
		rightIcon?: IconType;
		rightIconTooltip?: string;
		onRightIconClick?: (e: Event) => void;
		class?: string | string[];
		onclick?: (e: Event) => void;
		disabled?: boolean;
		buttonAttributes?: HTMLButtonAttributes;
		coloredIcons?: boolean;
	}
</script>

<script lang="ts">
	let {
		text,
		icon,
		rightIcon,
		onRightIconClick,
		class: cls,
		onclick,
		disabled,
		buttonAttributes,
		coloredIcons = true
	}: ChipProps = $props();
</script>

<button
	class={twMerge(
		'label-medium relative flex h-[32px] w-fit shrink-0 grow-0 items-center gap-[8px] rounded-sm',
		!icon && !rightIcon
			? 'px-[16px]'
			: !icon
				? 'pl-[16px] pr-[4px]'
				: !rightIcon
					? 'pl-[8px] pr-[16px]'
					: 'pl-[8px] pr-[4px]',
		cls
	)}
	{...buttonAttributes}
	{onclick}
	{disabled}
>
	<Layer />
	{#if icon}
		<Icon class={coloredIcons ? 'text-primary' : ''} {icon} size="18" />
	{/if}
	{text}
	{#if rightIcon}
		<div
			role="button"
			tabindex={0}
			class={twMerge(
				'relative flex h-[24px] w-[24px] items-center justify-center rounded-full border-none ease-in-out hover:bg-on-surface/50',
				cls
			)}
			onkeyup={(e) => {}}
			onclick={(e) => {
				if (onRightIconClick) {
					onRightIconClick(e);
					e.stopPropagation();
				}
			}}
		>
			<Layer />
			<Icon icon={rightIcon} size="18" />
		</div>
	{/if}
</button>
