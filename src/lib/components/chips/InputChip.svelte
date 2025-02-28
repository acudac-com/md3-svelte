<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Chip from '../../../internal/components/chip.svelte';
	import type { IconType } from '../Icon.svelte';
	import { mdiClose } from '../../../internal/icons';
	interface Props {
		text: string;
		icon?: IconType;
		class?: string | string[];
		onclick?: (e: Event) => void;
		onremove?: (e: Event) => void;
		disabled?: boolean;
	}
	let { class: cls, disabled, onclick, onremove, ...rest }: Props = $props();
</script>

<Chip
	class={twMerge(
		'border',
		disabled
			? 'border-on-surface/15 bg-on-surface/10 text-on-surface/40'
			: 'border-outline-variant text-on-surface',
		cls
	)}
	rightIcon={mdiClose}
	{onclick}
	onRightIconClick={onremove}
	{disabled}
	{...rest}
/>
