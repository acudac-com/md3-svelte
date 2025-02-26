<script module lang="ts">
	import { Tooltip } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	export interface PlainTooltipProps {
		trigger: Snippet;
		content: string | string[];
		class?: string;
	}

	let currentToolTip = $state('0');
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let { content, trigger, class: cls = undefined }: PlainTooltipProps = $props();

	// use <br> for multiple lines
	let text = $derived.by(() => {
		if (typeof content === 'string') {
			return content;
		} else {
			return content.join('<br>');
		}
	});
	let thisToolTip = $state('');
</script>

<Tooltip.Provider>
	<Tooltip.Root
		delayDuration={0}
		onOpenChange={(open) => {
			if (open) {
				thisToolTip = new Date().getTime().toString();
				currentToolTip = thisToolTip;
			}
		}}
	>
		<Tooltip.Trigger>
			{@render trigger()}
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content forceMount={true}>
				{#snippet child({ wrapperProps, props, open })}
					{#if open}
						<div class="mt-2" {...wrapperProps}>
							<div
								{...props}
								in:slide={{ delay: 100 }}
								out:slide={{ delay: 1500 }}
								onoutroend={() => {
									console.log('outro ended');
								}}
							>
								{#if currentToolTip == thisToolTip}
									<p
										class={twMerge(
											'body-small flex min-h-[24px] items-center rounded-sm bg-inverse-surface px-[8px] text-inverse-on-surface',
											cls
										)}
									>
										{@html text}
									</p>
								{/if}
							</div>
						</div>
					{/if}
				{/snippet}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>
