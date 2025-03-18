<script module lang="ts">
	import { Icon } from '$lib';
	import type { Snippet } from 'svelte';
	import { Menu } from '$lib';
	import OutlinedTextField from './OutlinedTextField.svelte';
	import Clickable from './Clickable.svelte';
	import { mdiChevronDown, mdiClose } from '$lib/icons';
	import Row from '$lib/layout/Row.svelte';
	import { twMerge } from 'tailwind-merge';
	import IconButton from './IconButton.svelte';

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
	}
</script>

<script lang="ts" generics="T extends Value">
	let { open = $bindable(false), value = $bindable([]), ...p }: SelectProps<T> = $props();

	let searchValue = $state('');
	let textValues: string[] = $state([]);
	let textValuesOnFocus: string = $state('');

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
				inputClass="cursor-pointer text-ellipsis"
				class={twMerge(['pr-8'], p.class)}
				menuAnchorName={md.anchorName}
				label={p.label}
				bind:value={searchValue}
				onfocus={() => {
					setTimeout(() => {
						searchValue = '';
					}, 100);
					if (md.open) {
						return;
					}
					textValuesOnFocus = textValues.join(',');
					md.show();
				}}
				onfocusout={(e) => {
					if (!md.open) {
						searchValue = textValues.join(', ');
						return;
					}
					let thisHtmlEl = e.target as HTMLInputElement;
					thisHtmlEl.focus();
					setTimeout(() => {
						if (textValues.join(', ') == textValuesOnFocus) {
							md.open = false;
							thisHtmlEl.blur();
						} else {
							textValuesOnFocus = textValues.join(', ');
						}
					}, 100);
				}}
				onkeyup={(e) => {
					// enter: add first item in filter list if any
					if (e.key == 'Enter' && filteredValues.length > 0) {
						let textVal = filteredValues[0].toString();
						console.log(textVal);
						if (!textValues.includes(textVal)) {
							textValues.push(textVal);
						} else {
							textValues = textValues.filter((textValue) => textValue != textVal);
						}
						searchValue = '';
						textValuesOnFocus = textValues.join(', ');
					}
					// escape: loose focus
					if (e.key == 'Escape') {
						let htmlEl = e.target as HTMLInputElement;
						htmlEl.blur();
					}
				}}
			/>
			{#if textValues.length}
				<IconButton
					icon={mdiClose}
					class="-mx-9 size-[30px]"
					iconSize="18"
					onclick={() => {
						textValues = [];
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
				'w-full justify-start p-3 ',
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
			{/if}
		</Clickable>
	{:else}
		<span class="block px-5 py-2 text-sm text-muted-foreground"> No results </span>
	{/each}
</Menu>
