<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Chip from '../../../internal/components/chip.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { IconType } from '../Icon.svelte';
	interface Props {
		text: string;
		icon?: IconType;
		selectedIcon?: IconType;
		class?: string | string[];
		selected?: boolean;
		disabled?: boolean;
		buttonAttributes?: HTMLButtonAttributes;
		coloredIcons?: boolean;
	}
	let {
		class: cls,
		disabled,
		selected = $bindable(),
		icon,
		selectedIcon,
		...rest
	}: Props = $props();
</script>

<Chip
	class={twMerge(
		'border',
		disabled
			? 'border-on-surface/15 bg-on-surface/10 text-on-surface/40'
			: selected
				? 'bg-secondary-container text-on-secondary-container'
				: 'border-outline-variant text-on-surface-variant',
		cls
	)}
	onclick={() => {
		selected = !selected;
	}}
	icon={selected && selectedIcon ? selectedIcon : icon}
	{disabled}
	{...rest}
/>
