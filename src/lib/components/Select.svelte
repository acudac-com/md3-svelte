<script module lang="ts">
	import { Combobox } from 'bits-ui';
	import Layer from '$lib/ripple/Layer.svelte';
	import { Icon } from '$lib';
	import type { Svg, Image } from '$lib/icons';
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
		prependIcon?: Svg | Image;
		class?: string | string[];
		menuClass?: string | string[];
		item?: Snippet<[T]>;
		width?: '100px' | '200px' | '300px' | '400px' | '500px' | '600px';
	}
</script>

<script lang="ts" generics="T extends Value">
	let { open = $bindable(false), value = $bindable(), ...p }: SelectProps<T> = $props();

	let searchValue = $state('');
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

	const filteredValues = $derived(
		searchValue === ''
			? p.values
			: p.values.filter((val) => val.toString().toLowerCase().includes(searchValue.toLowerCase()))
	);

	const widthClass = $derived.by(() => {
		switch (p.width) {
			case '100px':
				return 'w-[100px]';
			case '200px':
				return 'w-[200px]';
			case '300px':
				return 'w-[300px]';
			case '400px':
				return 'w-[400px]';
			case '500px':
				return 'w-[500px]';
			case '600px':
				return 'w-[600px]';
			default:
				return 'w-[300px]';
		}
	});
</script>

<Combobox.Root
	type="single"
	onOpenChange={(o) => {
		if (!o) searchValue = '';
	}}
	bind:value={textValue}
	bind:open
>
	<div
		class={twMerge(
			[
				'body-large relative flex items-center gap-2 rounded-xs border border-outline px-2 py-[4px]',
				open ? 'border-2' : '',
				widthClass
			],
			p.class
		)}
	>
		{#if p.prependIcon}
			<Icon icon={p.prependIcon} />
		{/if}
		<Combobox.Input
			onfocus={() => {
				open = true;
			}}
			defaultValue={textValue}
			class="body-large w-full bg-transparent outline-none"
			oninput={(e) => (searchValue = e.currentTarget.value)}
			placeholder={p.label}
			aria-label={p.label}
		/>
		<Combobox.Arrow
			onclick={() => {
				open = true;
			}}
			class="cursor-pointer p-2"
		/>
	</div>
	<Combobox.Portal>
		<Combobox.Content sideOffset={10} align="center" side="bottom">
			<Combobox.Viewport
				class={twMerge(
					[
						'flex max-h-[200px] w-[200px] flex-col flex-nowrap overflow-y-auto rounded-xs bg-surface shadow-l1 dark:shadow-l2',
						p.prependIcon ? '' : 'ml-8',
						widthClass
					],
					p.menuClass
				)}
			>
				{#each filteredValues as val, i (i + val.toString())}
					<Combobox.Item
						value={val.toString()}
						label={val.toString()}
						class="relative p-[4px] hover:bg-on-surface/10"
					>
						<Layer />
						{#if p.item != undefined}
							{@render p.item(val)}
						{:else}
							{val.toString()}
						{/if}
					</Combobox.Item>
				{:else}
					<span class="block px-5 py-2 text-sm text-muted-foreground"> No results </span>
				{/each}
			</Combobox.Viewport>
		</Combobox.Content>
	</Combobox.Portal>
</Combobox.Root>
