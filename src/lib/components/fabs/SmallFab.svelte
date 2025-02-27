<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Fab from '../../../internal/components/fab.svelte';
	import type { FabProps } from '../../../internal/components/fab.svelte';

	let { class: cls = undefined, ...rest }: FabProps = $props();
</script>

<Fab class={twMerge('h-[40px] w-[40px] rounded-md', cls)} {...rest} />
