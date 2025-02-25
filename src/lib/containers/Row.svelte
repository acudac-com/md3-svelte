<script lang="ts">
	import { flexClasses, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

{#if props.href}
	<a href={props.href} class={flexClasses(props, 'block', 'flex-row', 'w-full')}
		>{@render props.children()}</a
	>
{:else}
	<div class={flexClasses(props, 'flex-row', 'w-full')}>
		{@render props.children()}
	</div>
{/if}
