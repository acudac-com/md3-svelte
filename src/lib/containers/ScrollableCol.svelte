<script lang="ts">
	import { containerClass, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

<div class={containerClass(props, 'flex-col', 'h-full', 'flex-nowrap overflow-auto')}>
	{@render props.children()}
</div>
