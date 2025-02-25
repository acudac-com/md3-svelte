<script lang="ts">
	import { Layer } from 'm3-svelte';
	import { flexClasses, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

{#if props.href}
	<a href={props.href} class={flexClasses(props, 'block', 'flex-col', 'h-full')}
		>{@render props.children()}</a
	>
{:else}
	<div class={flexClasses(props, 'flex-col', 'h-full')}>
		{@render props.children()}
	</div>
{/if}
