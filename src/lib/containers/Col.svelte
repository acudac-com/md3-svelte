<script lang="ts">
	import { flexClasses, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

<div class={flexClasses(props, 'flex-col', 'h-full')}>
	{@render props.children()}
</div>
