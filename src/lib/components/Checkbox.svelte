<script lang="ts">
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	interface Props {
		checked?: boolean;
		class?: ClassNameValue;
		disabled?: boolean;
		error?: string | boolean;
	}
	let { checked = $bindable(false), disabled, class: cls, error }: Props = $props();
</script>

<label class="flex size-[40px] items-center justify-center rounded-full">
	<input
		class={twMerge(
			'size-[18px] rounded-[2px] text-on-primary accent-primary',
			checked ? '' : 'border-2 border-on-surface-variant',
			disabled && checked ? 'bg-on-surface/40' : disabled ? 'border-on-surface-variant/40' : '',
			error ? 'border-error text-on-error accent-error' : '',
			cls
		)}
		{disabled}
		type="checkbox"
		{checked}
	/>
</label>
