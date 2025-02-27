<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { ButtonProps } from '../../../internal/components/button.svelte';
	import Button from '../../../internal/components/button.svelte';

	let { class: cls, disabled, ...rest }: ButtonProps = $props();
</script>

<Button
	class={twMerge(
		disabled
			? 'border border-on-surface/10 bg-surface/40 text-on-surface/40'
			: 'border border-outline text-primary hover:bg-primary/10',
		cls
	)}
	{disabled}
	{...rest}
/>
