<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Button, { type ButtonProps } from '../../../internal/components/button.svelte';

	export interface ElevatedButtonProps extends ButtonProps {}
</script>

<script lang="ts">
	let { class: cls, disabled, ...rest }: ElevatedButtonProps = $props();
</script>

<Button
	class={twMerge(
		'bg-surface-container-low text-primary shadow-l1',
		'hover:bg-primary/10 hover:shadow-l2',
		disabled ? 'bg-on-surface/10 text-on-surface/40' : '',
		cls
	)}
	{disabled}
	{...rest}
/>
