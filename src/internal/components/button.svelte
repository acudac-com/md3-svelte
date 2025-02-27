<script module lang="ts">
	import type { IconifyIcon } from '@iconify/types';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../../lib/components/Icon.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import Layer from '../../lib/ripples/Layer.svelte';

	export interface ButtonProps extends HTMLButtonAttributes {
		children: Snippet;
		icon?: IconifyIcon;
		rightIcon?: IconifyIcon;
		class?: string | string[];
	}
</script>

<script lang="ts">
	let { children, icon, rightIcon, class: cls, ...rest }: ButtonProps = $props();
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
	{...rest}
>
	<Layer />
	{#if icon}
		<Icon {icon} size="18" />
	{/if}
	{@render children()}
	{#if rightIcon}
		<Icon icon={rightIcon} />
	{/if}
</button>
