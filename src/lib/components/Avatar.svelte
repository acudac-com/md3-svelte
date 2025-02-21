<script lang="ts" module>
	import { type ClassNameValue } from 'tailwind-merge';

	export interface AvatarProps {
		src?: string;
		initials: string;
		class?: ClassNameValue;
	}
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let { src, class: cls, initials }: AvatarProps = $props();
</script>

{#if src}
	<img class={twMerge('w-full rounded-full', cls)} {src} alt="User" />
{:else}
	<div
		class={twMerge(
			'bg-secondary text-on-secondary flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full font-bold',
			cls
		)}
	>
		<div>{initials}</div>
	</div>
{/if}
