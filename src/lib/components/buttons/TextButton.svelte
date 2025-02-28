<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Button, { type ButtonProps } from '../../../internal/components/button.svelte';

	export interface TextButtonProps extends ButtonProps {}
</script>

<script lang="ts">
	let { class: cls, disabled, icon, rightIcon, ...rest }: TextButtonProps = $props();
</script>

<Button
	class={twMerge(
		'text-primary',
		'hover:bg-primary/10',
		disabled ? 'bg-on-surface/10 text-on-surface/40' : '',
		!icon && !rightIcon
			? 'px-[16px]'
			: !icon
				? 'pl-[12px] pr-[16px]'
				: !rightIcon
					? 'pl-[16px] pr-[12px]'
					: '',
		cls
	)}
	{disabled}
	{icon}
	{rightIcon}
	{...rest}
/>
