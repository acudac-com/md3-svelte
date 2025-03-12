<script lang="ts">
	import { Icon } from '$lib';
	import { mdiCheck } from '$lib/icons';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const conditionalScroll = (node: Element, shouldScroll: boolean) => {
		if (shouldScroll) node.scrollIntoView({ block: 'nearest' });
	};
	export let options: { id: number; name: string; selected: boolean }[];
</script>

<div class="m3-container">
	{#each options as { id, name, selected }}
		<button
			class="body-small align-center relative inline-flex h-[50px] shrink-0 cursor-pointer items-center justify-between bg-transparent px-10 text-on-surface"
			onclick={() => dispatch('chosen', id)}
			use:conditionalScroll={selected}
		>
			{name}
			{#if selected}
				<Icon icon={mdiCheck} />
			{/if}
		</button>
	{/each}
</div>

<style>
	.m3-container {
		display: flex;
		flex-direction: column;
		flex: 1 0;
		overflow: auto;
	}
	button {
		-webkit-tap-highlight-color: transparent;
		transition: all 200ms;
	}

	@media (hover: hover) {
		button:hover {
			background-color: rgb(var(--md-sys-color-on-surface) / 0.08);
		}
	}
	button:focus-visible,
	button:active {
		background-color: rgb(var(--md-sys-color-on-surface) / 0.12);
	}
</style>
