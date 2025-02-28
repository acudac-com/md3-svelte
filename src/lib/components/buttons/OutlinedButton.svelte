<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Button, { type ButtonProps } from '../../../internal/components/button.svelte';

	export interface OutlinedButtonProps extends ButtonProps {}
</script>

<script lang="ts">
	let { class: cls, disabled, ...rest }: OutlinedButtonProps = $props();
</script>

<Button
	class={twMerge(
		'border border-outline text-primary ',
		'hover:bg-primary/10',
		disabled ? 'border-on-surface/10 bg-surface/40 text-on-surface/40' : '',
		cls
	)}
	{disabled}
	{...rest}
/>
