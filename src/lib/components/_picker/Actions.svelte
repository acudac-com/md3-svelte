<script lang="ts">
	import { Button } from '$lib';
	import { createEventDispatcher } from 'svelte';

	export let requireOk = false;
	export let clearable: boolean;
	export let chosenDate: boolean;
	const dispatch = createEventDispatcher();
</script>

<div class="m3-container">
	{#if clearable}
		<span class="left">
			<Button type="text" onclick={() => dispatch('clear')} text="Clear" />
		</span>
	{/if}
	<Button type="text" onclick={() => dispatch('cancel')} text="Cancel" />
	{#if requireOk}
		<Button
			type="text"
			textSize="medium"
			disabled={!clearable && !chosenDate}
			onclick={() => dispatch('ok')}
			text="OK"
		/>
	{/if}
</div>

<style>
	.m3-container {
		display: flex;
		padding: 0.5rem 0.75rem;
		gap: 0.5rem;
		justify-content: flex-end;
	}
	.m3-container > .left {
		margin-right: auto;
	}
</style>
