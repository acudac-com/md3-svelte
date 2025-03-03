<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { TypeScale } from './types';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	interface Props {
		class?: string | string[];
		children: Snippet;
		typescale?: TypeScale;
		attributes: HTMLLabelAttributes;
	}
	let { class: cls, children, typescale = 'headline-medium', attributes }: Props = $props();
</script>

<label class={[typescale, cls]} {...attributes}>
	{@render children()}
</label>
