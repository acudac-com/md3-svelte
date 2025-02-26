<script lang="ts">
	import { containerClass, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

<div class={containerClass(props, 'flex-row', 'w-full', 'flex-nowrap overflow-auto')}>
	{@render props.children()}
</div>
