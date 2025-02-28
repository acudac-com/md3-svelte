<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Icon, { type IconType } from '../../lib/components/Icon.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import Layer from '../../lib/ripples/Layer.svelte';

	export interface ButtonProps {
		text: string;
		icon?: IconType;
		rightIcon?: IconType;
		class?: string | string[];
		onclick?: (e: Event) => void;
		href?: string;
		disabled?: boolean;
	}
</script>

<script lang="ts">
	let { text, icon, rightIcon, class: cls, onclick, href, disabled }: ButtonProps = $props();
</script>

{#if href != undefined}
	<a
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
		href={disabled ? undefined : href}
	>
		<Layer />
		{#if icon}
			<Icon {icon} size="18" />
		{/if}
		{text}
		{#if rightIcon}
			<Icon icon={rightIcon} />
		{/if}
	</a>
{:else}
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
{/if}
