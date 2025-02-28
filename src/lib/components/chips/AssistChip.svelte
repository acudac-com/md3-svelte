<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Chip, { type ChipProps } from '../../../internal/components/chip.svelte';
	let { class: cls, disabled, ...rest }: ChipProps = $props();
</script>

<Chip
	class={twMerge(
		'border',
		disabled
			? 'border-on-surface/15 bg-on-surface/10 text-on-surface/40'
			: 'border-outline-variant text-on-surface',
		cls
	)}
	{disabled}
	{...rest}
/>
