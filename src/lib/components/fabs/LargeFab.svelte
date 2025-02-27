<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Fab from '../../../internal/components/fab.svelte';
	import type { FabProps } from '../../../internal/components/fab.svelte';

	let { class: cls = undefined, iconSize = '36', ...rest }: FabProps = $props();
</script>

<Fab class={twMerge('h-[96px] w-[96px] rounded-xl', cls)} {iconSize} {...rest} />
