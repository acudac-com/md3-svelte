<script module lang="ts">
	import type { Snippet } from 'svelte';

	export interface LinkProps {
		href: string;
		children: Snippet;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let p: LinkProps = $props();
</script>

<a href={p.href} class={twMerge('text-primary', p.class)}>{@render p.children()}</a>
