<script module lang="ts">
	import Layer from '$lib/ripple/Layer.svelte';
	import { Divider, Icon } from '$lib';
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

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

		itemSnippet?: Snippet<[T]>;
		width?: ContainerSize;
	}
</script>

<script lang="ts" generics="T extends Value">
	import { Menu } from '$lib';
	import { text } from '@sveltejs/kit';
	import OutlinedTextField from './OutlinedTextField.svelte';
	import Clickable from './Clickable.svelte';
	import { ContainerWidthClass, type ContainerSize } from '$lib/utils';
	import { mdiChevronDown } from '$lib/icons';
	import Row from '$lib/layout/Row.svelte';

	let {
		open = $bindable(false),
		width = '300px',
		value = $bindable(),
		...p
	}: SelectProps<T> = $props();

	let searchValue = $state('');
	let textValue = $state('');
	let textValueOnFocus = $state('');

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
	$effect(() => {
		// set textValue based on value
		var newTextValue: string;
		if (value) {
			newTextValue = value.toString();
		} else {
			newTextValue = '';
		}
		if (newTextValue != textValue) {
			textValue = newTextValue;
		}
	});

	$effect(() => {
		if (!open) {
			searchValue = textValue;
		}
	});

	const filteredValues = $derived(
		searchValue === ''
			? p.values
			: p.values.filter((val) => val.toString().toLowerCase().includes(searchValue.toLowerCase()))
	);
</script>

<Menu bind:open disableAutoClose class={['rounded-xs']} useTriggerWidth>
	{#snippet trigger(md)}
		<Row>
			<OutlinedTextField
				inputClass="cursor-pointer"
				class={[ContainerWidthClass(width)]}
				menuAnchorName={md.anchorName}
				label={p.label}
				bind:value={searchValue}
				onfocus={() => {
					if (md.open) {
						return;
					}
					searchValue = '';
					textValueOnFocus = textValue;
					md.show();
				}}
				onfocusout={(e) => {
					if (!md.open) {
						return;
					}
					let thisHtmlEl = e.target as HTMLInputElement;
					thisHtmlEl.focus();
					setTimeout(() => {
						if (textValue == textValueOnFocus || !p.keepFocusOnSelect) {
							md.open = false;
							thisHtmlEl.blur();
						} else {
							textValueOnFocus = textValue;
						}
					}, 100);
				}}
			/>
			<Icon icon={mdiChevronDown} class="-mx-4" />
		</Row>
	{/snippet}
	{#each filteredValues as val, i (i + val.toString())}
		<Clickable
			class={[
				'w-full justify-start p-3 hover:bg-on-surface/10',
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
