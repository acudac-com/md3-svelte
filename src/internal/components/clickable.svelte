<script module lang="ts">
	import { page } from '$app/state';
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
		hrefPath?: string;
		hasHrefPrefix?: boolean;
		hrefParams?: string[];
		hasHrefParams?: boolean;
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
		hrefPath,
		hasHrefPrefix = $bindable(),
		hrefParams,
		hasQueryParam = $bindable(),
		onclick,
		disabled,
		children,
		typeScale = 'body-medium'
	}: ClickableProps = $props();

	let classes = $derived(twMerge('relative flex items-center w-fit', typeScale, cls));

	if (href) {
		$effect(() => {
			let currentHref = page.url.href.replace(page.url.origin, '');
			if (currentHref.startsWith(href + '/') || currentHref.startsWith(href + '?')) {
				hasHrefPrefix = true;
			} else {
				hasHrefPrefix = false;
			}
		});
	}

	if (queryParams) {
		$effect(() => {
			let currentHref = page.url.href.replace(page.url.origin, '');
			if (currentHref.includes('?' + queryParam) || currentHref.includes('&' + queryParam)) {
				hasQueryParam = true;
			} else {
				hasQueryParam = false;
			}
		});
	}

	let finalHref = $derived.by(() => {
		if (disabled) return undefined;
		if (href) {
			let result = href;
			if (queryParam) {
				result += '?' + queryParam;
			}
			return href;
		}
		if (queryParam) {
			let currentHref = page.route.id || '/';
			if (hasQueryParam) {
				return currentHref;
			}
			if (currentHref.includes('?')) {
				return `${currentHref}&${queryParam}`;
			} else {
				return `${currentHref}?${queryParam}`;
			}
		}
	});
</script>

{#if finalHref != undefined}
	<a class={classes} href={finalHref}>
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
