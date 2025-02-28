<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Button, { type ButtonProps } from '../../../internal/components/button.svelte';

	export interface FilledButtonProps extends ButtonProps {}
</script>

<script lang="ts">
	let { class: cls, disabled, ...rest }: FilledButtonProps = $props();
</script>

<Button
	class={twMerge(
		'bg-primary text-on-primary',
		'hover:shadow-l1',
		disabled ? 'bg-on-surface/10 text-on-surface/40' : '',
		cls
	)}
	{disabled}
	{...rest}
/>
