<script module lang="ts">
	type RadioButtonProps =
		| string
		| {
				value: string;
				id?: string;
				disabled?: boolean;
		  };
	interface RadioButtonsProps {
		values: RadioButtonProps[];
		value?: string;
		color?: MainColor;
		disabled?: boolean;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { Label, RadioGroup } from 'bits-ui';
	import { twMerge } from 'tailwind-merge';
	import { BgColorClass, BorderColorClass, type MainColor } from '../../theme/colors';
	import Layer from '$lib/ripple/Layer.svelte';
	let { value = $bindable(''), ...p }: RadioButtonsProps = $props();
	let uuid = Math.random().toString(36).substring(7);
</script>

<RadioGroup.Root bind:value disabled={p.disabled}>
	{#each p.values as v}
		{@const text = typeof v == 'string' ? v : v.value}
		{@const disabled = p.disabled ? true : typeof v == 'string' ? false : v.disabled}
		<div class={twMerge('flex items-center gap-2', p.class)}>
			<RadioGroup.Item
				id={uuid + text}
				value={text}
				class="relative flex size-[40px] items-center justify-center rounded-full"
				{disabled}
			>
				<Layer />
				<div
					class={[
						'flex size-[20px] items-center justify-center rounded-full border-2',
						disabled ? 'border-on-surface-variant/30' : BorderColorClass(p.color, 'primary')
					]}
				>
					<div
						class={[
							'size-[10px] rounded-full',
							disabled && value == text
								? 'bg-on-surface-variant/30'
								: value == text
									? BgColorClass(p.color, 'primary')
									: ''
						]}
					></div>
				</div>
			</RadioGroup.Item>
			<Label.Root for={uuid + text}>{text}</Label.Root>
		</div>
	{/each}
</RadioGroup.Root>
