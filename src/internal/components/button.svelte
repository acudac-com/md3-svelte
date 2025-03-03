<script module lang="ts">
	import type { Image, Svg } from '$lib/components/Icon.svelte';

	export interface ButtonProps {
		class?: string | string[];
		text: string;

		href?: string;
		onclick?: (e: Event) => void;
		disabled?: boolean;

		icon?: Svg | Image;
		rightIcon?: Svg | Image;
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Clickable from './clickable.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let { class: cls, text, icon, rightIcon, disabled, href, onclick }: ButtonProps = $props();
</script>

<Clickable
	class={twMerge(
		'h-[40px] gap-[8px] rounded-full',
		!icon && !rightIcon // no icons
			? 'px-[24px]'
			: !icon // only right icon
				? 'pl-[24px] pr-[16px]'
				: !rightIcon // only left icon
					? 'pl-[16px] pr-[24px]'
					: 'px-[16px]', // both icons
		cls
	)}
	typeScale="label-large"
	{disabled}
	{href}
	{onclick}
>
	{#snippet children()}
		{#if icon}
			<Icon {icon} size="18" />
		{/if}
		{text}
		{#if rightIcon}
			<Icon icon={rightIcon} />
		{/if}
	{/snippet}
</Clickable>
