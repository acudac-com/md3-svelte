<script module lang="ts">
	import type { IconifyIcon } from '@iconify/types';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../../lib/components/Icon.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import Layer from '../../lib/ripples/Layer.svelte';

	export interface ButtonProps {
		text: string;
		icon?: IconifyIcon;
		rightIcon?: IconifyIcon;
		class?: string | string[];
		onclick?: (e: Event) => void;
		disabled?: boolean;
		buttonAttributes?: HTMLButtonAttributes;
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
		buttonAttributes
	}: ButtonProps = $props();
</script>

<button
	class={twMerge(
		'label-large relative flex h-[40px] items-center gap-[8px] rounded-full',
		!icon && !rightIcon
			? 'px-[24px]'
			: !icon
				? 'pl-[24px] pr-[16px]'
				: !rightIcon
					? 'pl-[16px] pr-[24px]'
					: '',
		cls
	)}
	{...buttonAttributes}
	{onclick}
	{disabled}
>
	<Layer />
	{#if icon}
		<Icon {icon} size="18" />
	{/if}
	{text}
	{#if rightIcon}
		<Icon icon={rightIcon} />
	{/if}
</button>
