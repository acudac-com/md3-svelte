<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Button, { type ButtonProps } from '../../../internal/components/button.svelte';

	export interface TonalButtonProps extends ButtonProps {}
</script>

<script lang="ts">
	let { class: cls, disabled, icon, rightIcon, ...rest }: TonalButtonProps = $props();
</script>

<Button
	class={twMerge(
		'bg-secondary-container text-on-secondary-container',
		'hover:shadow-l1',
		disabled ? 'bg-on-surface/10 text-on-surface/40' : '',
		cls
	)}
	{disabled}
	{...rest}
/>
