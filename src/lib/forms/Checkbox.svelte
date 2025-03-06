<script module lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { AccentColorClass, TextOnColorClass, type MainColor } from '../colors';

	export interface CheckboxProps {
		checked?: boolean;
		color?: MainColor;
		class?: string | string[];
		disabled?: boolean;
	}
</script>

<script lang="ts">
	let { checked = $bindable(false), ...p }: CheckboxProps = $props();
</script>

<label class="flex size-[40px] items-center justify-center rounded-full">
	<input
		class={twMerge(
			[
				'accent-primar size-[18px] rounded-[2px] border-2 text-on-primary',
				TextOnColorClass(p.color),
				AccentColorClass(p.color),
				p.disabled && checked
					? 'bg-on-surface/40'
					: p.disabled
						? 'border-on-surface-variant/40'
						: !checked
							? 'border-on-surface-variant'
							: ''
			],
			p.class
		)}
		disabled={p.disabled}
		type="checkbox"
		{checked}
	/>
</label>
