<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Chip from '../../../internal/components/chip.svelte';
	import type { IconType } from '../Icon.svelte';
	import { mdiCheck } from '../../../internal/icons';
	interface Props {
		text: string;
		icon?: IconType;
		keepIconIfChecked?: boolean;
		class?: string | string[];
		selected?: boolean;
		disabled?: boolean;
	}
	let {
		class: cls,
		disabled,
		keepIconIfChecked,
		selected = $bindable(),
		icon,
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
	icon={selected && !keepIconIfChecked ? mdiCheck : icon}
	{disabled}
	{...rest}
/>
