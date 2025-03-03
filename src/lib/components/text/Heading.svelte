<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { TypeScale } from './types';
	import type { HTMLAttributes, HTMLBaseAttributes } from 'svelte/elements';

	interface Props {
		class?: string | string[];
		typescale?: TypeScale;
		children: Snippet;
		attributes: HTMLAttributes<HTMLHeadingElement>;
	}
	let p: Props = $props();
	p.typescale = 'headline-medium';
</script>

<h1 class={[p.typescale, p.class]} {...p.attributes}>
	{@render p.children()}
</h1>
