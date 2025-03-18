<script module lang="ts">
	import { Icon, IconButton } from '$lib';
	import type { Snippet } from 'svelte';
	import { Menu } from '$lib';
	import OutlinedTextField from './OutlinedTextField.svelte';
	import Clickable from './Clickable.svelte';
	import { mdiChevronDown, mdiClose } from '$lib/icons';
	import Row from '$lib/layout/Row.svelte';
	import { ContainerMaxHeightClass, type ContainerSize } from '$lib/utils';

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

<Menu
	bind:open
	disableAutoClose
	class={['overflow-scroll rounded-xs', ContainerMaxHeightClass(menuMaxH)]}
	useTriggerWidth
>
	{#snippet trigger(md)}
		<Row>
			<OutlinedTextField
				inputClass="cursor-pointer"
				class={p.class}
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
				onkeyup={(e) => {
					if (e.key == 'Enter' && filteredValues.length > 0) {
						textValue = filteredValues[0].toString();
						textValueOnFocus = textValue;
						let htmlEl = e.target as HTMLInputElement;
						htmlEl.blur();
					}
					if (e.key == 'Escape') {
						let htmlEl = e.target as HTMLInputElement;
						htmlEl.blur();
					}
				}}
			/>
			{#if textValue && p.clearable}
				<IconButton
					icon={mdiClose}
					class="-mx-9 size-[30px]"
					iconSize="18"
					onclick={() => {
						textValue = '';
					}}
				/>
			{:else}
				<Icon icon={mdiChevronDown} class="-mx-4" />
			{/if}
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
