<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { ButtonProps } from '../../../internal/components/button.svelte';
	import Button from '../../../internal/components/button.svelte';

	let { class: cls, disabled, ...rest }: ButtonProps = $props();
</script>

<Button
	class={twMerge(
		disabled
			? 'bg-on-surface/10 text-on-surface/40'
			: 'bg-surface-container-low text-primary shadow-l1 hover:bg-primary/10 hover:shadow-l2',
		cls
	)}
	{disabled}
	{...rest}
/>
