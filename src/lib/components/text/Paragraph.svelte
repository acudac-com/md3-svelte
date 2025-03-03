<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { TypeScale } from './types';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Button } from 'bits-ui';

	interface Props {
		class?: string | string[];
		children: Snippet;
		typescale?: TypeScale;
		attributes?: HTMLAttributes<HTMLParagraphElement>;
	}
	let p: Props = $props();
	p.typescale = 'body-medium';
</script>

<p class={[p.typescale, p.class]} {...p.attributes}>
	{@render p.children()}
	<Button oncl></Button>
</p>
