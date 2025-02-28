<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Icon, { type IconType } from '../../lib/components/Icon.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import Layer from '../../lib/ripples/Layer.svelte';

	export interface ChipProps {
		text: string;
		icon?: IconType;
		rightIcon?: IconType;
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
		class: cls,
		onclick,
		disabled,
		buttonAttributes,
		coloredIcons = true
	}: ChipProps = $props();
</script>

<button
	class={twMerge(
		'label-large relative flex h-[32px] items-center gap-[8px] rounded-sm',
		!icon && !rightIcon
			? 'px-[16px]'
			: !icon
				? 'pl-[16px] pr-[8px]'
				: !rightIcon
					? 'pl-[8px] pr-[16px]'
					: '',
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
		<Icon class={coloredIcons ? 'text-primary' : ''} icon={rightIcon} />
	{/if}
</button>
