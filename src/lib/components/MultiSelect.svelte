<script module lang="ts">
	import { Icon } from '$lib';
	import type { Snippet } from 'svelte';
	import { Menu } from '$lib';
	import OutlinedTextField from './OutlinedTextField.svelte';
	import Clickable from './Clickable.svelte';
	import { mdiCheck, mdiChevronDown, mdiChevronUp, mdiClose } from '$lib/icons';
	import Row from '$lib/layout/Row.svelte';
	import { twMerge } from 'tailwind-merge';
	import IconButton from './IconButton.svelte';
	import { ContainerMaxHeightClass, type ContainerSize } from '$lib/utils';

	export interface Value {
		toString(): string;
	}
	export interface SelectProps<T extends Value> {
		value?: T[];
		values: T[];
		label: string;
		open?: boolean;
		class?: string | string[];
		menuClass?: string | string[];
		itemSnippet?: Snippet<[T]>;
		menuMaxH?: ContainerSize;
	}
</script>

<script lang="ts" generics="T extends Value">
	let {
		open = $bindable(false),
		menuMaxH = '300px',
		value = $bindable([]),
		...p
	}: SelectProps<T> = $props();

	let textValues: string[] = $state([]);

	if (value) {
		value.forEach((val) => {
			textValues.push(val.toString());
		});
	}
	$effect(() => {
		// set value based on textvalue
		// let newValue = p.values.find((val) => val.toString().toLowerCase() === textValue.toLowerCase());
		let newValue: T[] = [];
		textValues.forEach((textValue) => {
			let newVal = p.values.find((val) => val.toString().toLowerCase() === textValue.toLowerCase());
			if (newVal != undefined) {
				newValue.push(newVal);
			}
		});
		let changed = newValue.length != value.length;
		if (!changed) {
			newValue.forEach((val, i) => {
				if (val != value[i]) {
					changed = true;
				}
			});
		}
		if (changed) {
			value = newValue;
		}
	});
	$effect(() => {
		// set textValue based on value
		var newTextValues: string[] = [];
		if (value) {
			value.forEach((val) => {
				newTextValues.push(val.toString());
			});
		} else {
			newTextValues = [];
		}
		let changed = newTextValues.length != textValues.length;
		if (!changed) {
			newTextValues.forEach((textValue, i) => {
				if (textValue != textValues[i]) {
					changed = true;
				}
			});
		}
	});
</script>

<Menu
	bind:open
	class={['rounded-xs', 'overflow-scroll', ContainerMaxHeightClass(menuMaxH)]}
	useTriggerWidth
>
	{#snippet trigger(md)}
		<Clickable
			menuAnchorName={md.anchorName}
			class={twMerge(
				[
					'h-fit min-h-[44px] w-[300px] justify-between rounded-xs border bg-surface px-2',
					md.open ? 'border-primary' : 'border-on-surface/20 hover:border-primary/50'
				],
				p.class
			)}
			onclick={() => {
				md.show();
			}}
		>
			<p
				class={[
					'absolute bg-inherit px-[3px] leading-3',
					md.open || textValues.length > 0
						? 'top-0 -mt-[5px] text-[8pt] text-on-surface/80'
						: 'text-[12pt] text-on-surface/70'
				]}
			>
				{p.label}
			</p>
			<p class="label-large max-w-full text-ellipsis px-1 pb-[6px] pt-[8px]">
				{textValues.join(', ')}
			</p>
			{#if textValues.length > 0}
				<IconButton
					icon={mdiClose}
					class="min-size-[30px] max-size-[30px] size-[30px]"
					iconSize="18"
					onclick={() => {
						textValues = [];
					}}
				/>
			{:else if md.open}
				<Icon icon={mdiChevronUp} />
			{:else}
				<Icon icon={mdiChevronDown} />
			{/if}</Clickable
		>
	{/snippet}
	{#each p.values as val, i (i + val.toString())}
		<Clickable
			class={[
				'w-full justify-between p-3',
				textValues.includes(val.toString())
					? 'bg-on-surface/15 hover:bg-on-surface/10'
					: 'hover:bg-on-surface/5'
			]}
			onclick={() => {
				if (!textValues.includes(val.toString())) {
					textValues.push(val.toString());
				} else {
					textValues = textValues.filter((textValue) => textValue != val.toString());
				}
			}}
		>
			{#if p.itemSnippet != undefined}
				{@render p.itemSnippet(val)}
			{:else}
				{val.toString()}
				{#if textValues.includes(val.toString())}
					<Icon icon={mdiCheck} size={22} />
				{/if}
			{/if}
		</Clickable>
	{:else}
		<span class="block px-5 py-2 text-sm text-muted-foreground"> No results </span>
	{/each}
</Menu>
