<script lang="ts">
	import { flexClasses, type Props } from './utils.svelte';
	let props: Props = $props();
</script>

<div class={flexClasses(props, 'flex-row-reverse')}>
	<!-- <div class="flex flex-row-reverse"> -->
	{@render props.children()}
</div>
