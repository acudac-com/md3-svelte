<script module lang="ts">
	import { Slider, Tooltip } from 'bits-ui';
	import { BgColorClass, BgContainerColorClass, TextOnColorClass, type MainColor } from '../colors';
	import { twMerge } from 'tailwind-merge';
	import { Icon } from '$lib';
	import { type Image, type Svg } from '$lib/icons';

	export interface SliderProps {
		value?: number;
		value2?: number;
		icon?: Svg | Image;
		icon2?: Svg | Image;
		min?: number;
		color?: MainColor;
		max?: number;
		step?: number;
		disabled?: boolean;
		ticks?: boolean;
		class?: string | string[];
		thumbClass?: string | string[];
	}
</script>

<script lang="ts">
	let {
		value = $bindable(),
		value2 = $bindable(),
		min = 0,
		max = 100,
		step = 0.01,
		...p
	}: SliderProps = $props();

	class Values {
		constructor() {}
		get values() {
			return [value || 0, value2 || 0];
		}
		set values(values: number[]) {
			value = values[0];
			value2 = values[1];
		}
	}
	let values = new Values();
</script>

<div class={twMerge('flex w-full items-center px-[14px]', p.class)}>
	{#if !value2}
		<Slider.Root
			type="single"
			bind:value
			{min}
			{max}
			{step}
			disabled={p.disabled}
			class="relative flex h-[26px] w-full touch-none select-none items-center"
		>
			{#snippet children({ ticks })}
				<span
					class={[
						'relative h-[10px] w-full grow cursor-pointer overflow-hidden rounded-full',
						p.disabled ? 'bg-on-surface/10' : BgContainerColorClass(p.color, 'primary')
					]}
				>
					<Slider.Range
						class={[
							'absolute h-full',
							p.disabled ? 'bg-on-surface/40' : BgColorClass(p.color, 'primary')
						]}
					/>
				</span>

				<Slider.Thumb index={0} class="outline-none">
					<Tooltip.Provider>
						<Tooltip.Root delayDuration={0}>
							<Tooltip.Trigger
								class={twMerge(
									[
										'flex size-[26px] items-center justify-center rounded-full outline-none',
										p.disabled ? 'bg-on-surface/40' : BgColorClass(p.color, 'primary')
									],
									p.thumbClass
								)}
							>
								{#if p.icon}
									<Icon icon={p.icon} size="18" class={TextOnColorClass(p.color, 'primary')} />
								{/if}
							</Tooltip.Trigger>
							<Tooltip.Content
								sideOffset={8}
								class="rounded-full bg-inverse-surface px-[16px] py-[12px] text-surface"
							>
								{value}
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				</Slider.Thumb>
				{#if p.ticks}
					{#each ticks as index, i}
						{#if i != 0 && i != ticks.length - 1}
							<Slider.Tick {index} class="size-[4px] rounded-full bg-on-primary" />
						{/if}
					{/each}
				{/if}
			{/snippet}
		</Slider.Root>
	{:else}
		<Slider.Root
			type="multiple"
			bind:value={values.values}
			autoSort
			{min}
			{max}
			{step}
			disabled={p.disabled}
			class="relative flex h-[26px] w-full touch-none select-none items-center"
		>
			{#snippet children({ ticks, thumbs })}
				<span
					class={[
						'relative h-[10px] w-full grow cursor-pointer overflow-hidden rounded-full',
						p.disabled ? 'bg-on-surface/10' : BgContainerColorClass(p.color, 'primary')
					]}
				>
					<Slider.Range
						class={[
							'absolute h-full',
							p.disabled ? 'bg-on-surface/40' : BgColorClass(p.color, 'primary')
						]}
					/>
				</span>

				{#each thumbs as t, i}
					<Slider.Thumb index={i} class="outline-none">
						<Tooltip.Provider>
							<Tooltip.Root delayDuration={0}>
								<Tooltip.Trigger
									class={[
										'flex size-[26px] items-center justify-center rounded-full outline-none',
										p.disabled ? 'bg-on-surface/40' : BgColorClass(p.color, 'primary')
									]}
									>{#if p.icon && i == 0}
										<Icon icon={p.icon} size="18" class={TextOnColorClass(p.color, 'primary')} />
									{:else if p.icon2 && i == 1}
										<Icon icon={p.icon2} size="18" class={TextOnColorClass(p.color, 'primary')} />
									{/if}
								</Tooltip.Trigger>
								<Tooltip.Content
									sideOffset={8}
									class="rounded-full bg-inverse-surface px-[16px] py-[12px] text-surface"
								>
									{values.values[i]}
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider>
					</Slider.Thumb>
				{/each}

				{#if p.ticks}
					{#each ticks as index, i}
						{#if i != 0 && i != ticks.length - 1}
							<Slider.Tick {index} class="size-[4px] rounded-full bg-on-primary" />
						{/if}
					{/each}
				{/if}
			{/snippet}
		</Slider.Root>
	{/if}
</div>
