<script lang="ts">
	import { containerClass, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

<div class={containerClass(props, 'flex-row', 'w-full', 'justify-around')}>
	{@render props.children()}
</div>
