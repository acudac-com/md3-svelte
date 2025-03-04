<script module lang="ts">
	export interface SliderProps {
		value?: number;
		min?: number;
		color?: MainColor;
		max?: number;
		step?: number;
		ticks?: boolean;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { Slider, Tooltip } from 'bits-ui';
	import { BgColorClass, BgContainerColorClass, type MainColor } from '../../theme/colors';
	import { twMerge } from 'tailwind-merge';
	let { value = $bindable(), min = 0, max = 100, step = 0.01, ...p }: SliderProps = $props();
	if (value == undefined) {
		value = min + max / 2;
	}
</script>

<div class={twMerge('px-[14px]', p.class)}>
	<Slider.Root
		type="single"
		bind:value
		{min}
		{max}
		{step}
		class="relative flex h-[26px] w-full touch-none select-none items-center"
	>
		{#snippet children({ ticks })}
			<span
				class={[
					'relative h-[10px] w-full grow cursor-pointer overflow-hidden rounded-full',
					BgContainerColorClass(p.color, 'primary')
				]}
			>
				<Slider.Range class={['absolute h-full', BgColorClass(p.color, 'primary')]} />
			</span>

			<Slider.Thumb index={0} class="outline-none">
				<Tooltip.Provider>
					<Tooltip.Root delayDuration={0}>
						<Tooltip.Trigger
							class={[
								'flex size-[26px] items-center rounded-full outline-none',
								BgColorClass(p.color, 'primary')
							]}
						></Tooltip.Trigger>
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
</div>
