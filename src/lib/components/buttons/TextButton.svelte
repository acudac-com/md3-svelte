<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { ButtonProps } from '../../../internal/components/button.svelte';
	import Button from '../../../internal/components/button.svelte';

	let { class: cls, disabled, icon, rightIcon, ...rest }: ButtonProps = $props();
</script>

<Button
	class={twMerge(
		disabled ? 'bg-on-surface/10 text-on-surface/40' : 'text-primary hover:bg-primary/10',
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
