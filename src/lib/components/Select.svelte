<script module lang="ts">
	import { Icon, IconButton } from '$lib';
	import type { Snippet } from 'svelte';
	import { Menu } from '$lib';
	import Clickable from './Clickable.svelte';
	import { mdiChevronDown, mdiChevronUp, mdiClose } from '$lib/icons';
	import Row from '$lib/layout/Row.svelte';
	import { ContainerMaxHeightClass, type ContainerSize } from '$lib/utils';
	import { twMerge } from 'tailwind-merge';
	import { text } from '@sveltejs/kit';
	import { Label } from 'bits-ui';

	export interface Value {
		toString(): string;
	}
	export interface SelectProps<T extends Value> {
		value?: T;
		values: T[];
		label: string;
		open?: boolean;
		class?: string | string[];
		menuClass?: string | string[];
		keepFocusOnSelect?: boolean;
		clearable?: boolean;
		itemSnippet?: Snippet<[T]>;
		menuMaxH?: ContainerSize;
	}
</script>

<script lang="ts" generics="T extends Value">
	let {
		open = $bindable(false),
		menuMaxH = '300px',
		value = $bindable(),
		...p
	}: SelectProps<T> = $props();

	let textValue = $state('');

	if (value) {
		textValue = value.toString();
	}
	$effect(() => {
		// set value based on textvalue
		let newValue = p.values.find((val) => val.toString().toLowerCase() === textValue.toLowerCase());
		if (newValue != value && newValue != undefined) {
			value = newValue;
		}
	});
</script>

<Menu
	bind:open
	class={['overflow-scroll rounded-xs', ContainerMaxHeightClass(menuMaxH)]}
	useTriggerWidth
>
	{#snippet trigger(md)}
		<Clickable
			menuAnchorName={md.anchorName}
			class={twMerge(
				[
					'h-[44px] w-[300px] justify-between rounded-xs border bg-surface px-2',
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
					md.open || textValue
						? '-mt-10 text-[8pt] text-on-surface/80'
						: 'text-[12pt] text-on-surface/70'
				]}
			>
				{p.label}
			</p>
			<p class="label-large px-1 pt-[1px]">{textValue}</p>
			{#if textValue && p.clearable}
				<IconButton
					icon={mdiClose}
					class="size-[30px]"
					iconSize="18"
					onclick={() => {
						textValue = '';
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
				'label-medium w-full justify-start p-3 hover:bg-on-surface/10',
				val.toString() == textValue ? 'bg-on-surface/15' : ''
			]}
			onclick={() => {
				textValue = val.toString();
			}}
		>
			{#if p.itemSnippet != undefined}
				{@render p.itemSnippet(val)}
			{:else}
				{val.toString()}
			{/if}
		</Clickable>
	{:else}
		<span class="block px-5 py-2 text-sm text-muted-foreground"> No results </span>
	{/each}
</Menu>
