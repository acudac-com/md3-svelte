<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Chip from '../../../internal/components/chip.svelte';
	import type { IconType } from '../Icon.svelte';
	import { mdiCheck } from '../../../internal/icons';
	import FittedRow from '$lib/containers/FittedRow.svelte';
	interface ChipProps {
		text: string;
		icon?: IconType;
		keepIconIfChecked?: boolean;
		disabled?: boolean;
	}
	interface Props {
		class?: string | string[];
		selected?: string;
		chips: ChipProps[];
	}
	let { class: cls, selected = $bindable(), chips }: Props = $props();
</script>

<FittedRow class="gap-1 p-1">
	{#each chips as chip}
		<Chip
			class={twMerge(
				'border',
				selected === chip.text
					? 'bg-secondary-container text-on-secondary-container'
					: 'border-outline-variant text-on-surface-variant',
				cls
			)}
			onclick={() => {
				selected = chip.text;
			}}
			icon={selected === chip.text && !chip.keepIconIfChecked ? mdiCheck : chip.icon}
			disabled={chip.disabled}
			text={chip.text}
		/>
	{/each}
</FittedRow>
