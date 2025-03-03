<script module lang="ts">
	export interface DividerProps {
		fullWidth?: boolean;
		class?: string | string[];
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let p: DividerProps = $props();
</script>

<hr
	class={twMerge(['my-[8px] border-outline-variant', !p.fullWidth ? 'mx-[16px]' : ''], p.class)}
/>
