<script lang="ts">
	import { flexClasses, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

<div class={flexClasses(props, 'flex-col', 'bg-surface-container', 'rounded-xl')}>
	{@render props.children()}
</div>
