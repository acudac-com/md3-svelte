<script lang="ts" module>
	interface SegmentedBtnOption {
		id: string;
		text?: string;
		icon?: IconifyIcon;
		disabled?: boolean;
	}
	interface SegmentedBtnsProps {
		options: SegmentedBtnOption[];
		multi?: boolean;
		class?: ClassNameValue;
		selected?: string[];
	}
</script>

<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	import Layer from '$lib/ripples/Layer.svelte';
	import type { IconifyIcon } from '@iconify/types';

	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	import { mdiCheck } from '../../../internal/icons';
	import { scale } from 'svelte/transition';

	let { options, multi, class: cls, selected = $bindable([]) }: SegmentedBtnsProps = $props();
	if (options.length > 5 || options.length < 1) {
		throw new Error('SegmentedBtns must have between 1 and 5 options');
	}
	let gridColsCls = $derived.by(() => {
		switch (options.length) {
			case 1:
				return 'grid-cols-1';
			case 2:
				return 'grid-cols-2';
			case 3:
				return 'grid-cols-3';
			case 4:
				return 'grid-cols-4';
			case 5:
				return 'grid-cols-5';
			default:
				return 'grid-cols-1';
		}
	});

	function toggle(id: string) {
		if (selected.includes(id)) {
			selected = selected.filter((s) => s !== id);
		} else {
			if (multi) {
				selected = [...selected, id];
			} else {
				selected = [id];
			}
		}
	}

	function isSelected(id: string) {
		return selected.includes(id);
	}
</script>

<div class={twMerge('grid h-fit w-fit rounded-full border border-outline', gridColsCls, cls)}>
	{#each options as option, index}
		<!-- {#if index == 0} -->
		<button
			class={[
				'label-large relative h-[40px] min-w-[60px] justify-center overflow-x-clip whitespace-nowrap',
				option.disabled
					? 'bg-on-surface/10 text-on-surface/40'
					: isSelected(option.id)
						? 'bg-secondary-container text-on-secondary-container'
						: 'text-on-surface',
				index == 0
					? 'rounded-l-full border-r border-outline pl-[12px] pr-[8px]'
					: index == options.length - 1
						? 'rounded-r-full pl-[8px] pr-[12px]'
						: 'border-r border-outline px-[8px]'
			]}
			disabled={option.disabled}
			onclick={() => {
				toggle(option.id);
			}}
			><Layer />
			<span class="flex items-center justify-center gap-[8px]">
				{#if isSelected(option.id)}
					<span in:scale class="flex items-center">
						<Icon class="inline" icon={mdiCheck} size="18" />
					</span>
				{/if}
				{#if option.icon && (!isSelected(option.id) || !option.text)}
					<span in:scale class="flex items-center">
						<Icon class="inline" icon={option.icon} size="18" />
					</span>
				{/if}

				{#if option.text}
					<p>{option.text}</p>
				{/if}
			</span>
		</button>
	{/each}
</div>
