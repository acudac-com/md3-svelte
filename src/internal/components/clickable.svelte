<script module lang="ts">
	import Layer from '$lib/ripples/Layer.svelte';
	import type { Snippet } from 'svelte';

	export type TypeScale =
		| 'display-large'
		| 'display-medium'
		| 'display-small'
		| 'headline-large'
		| 'headline-medium'
		| 'headline-small'
		| 'title-large'
		| 'title-medium'
		| 'title-small'
		| 'body-large'
		| 'body-medium'
		| 'body-small'
		| 'label-large'
		| 'label-medium'
		| 'label-small'
		| 'prominent-large'
		| 'prominent-medium'
		| 'prominent-small';

	export interface ClickableProps {
		class?: string | string[];

		href?: string;
		onclick?: (e: Event) => void;
		children: Snippet;
		disabled?: boolean;
		typeScale?: TypeScale;
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let {
		class: cls,
		href,
		onclick,
		disabled,
		children,
		typeScale = 'body-medium'
	}: ClickableProps = $props();

	let classes = $derived(twMerge('relative flex items-center', typeScale, cls));
</script>

{#if href != undefined}
	<a class={classes} href={disabled ? undefined : href}>
		<Layer />
		{@render children()}
	</a>
{:else if onclick != undefined}
	<button class={classes} {onclick} {disabled}>
		<Layer />
		{@render children()}
	</button>
{:else}
	<div class={classes}>
		{@render children()}
	</div>
{/if}
