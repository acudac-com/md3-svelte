<script module lang="ts">
	export type IconSize = '18' | '24' | '36' | '48' | '20' | '40' | number;
	export interface IconProps {
		icon: IconifyIcon;
		size?: IconSize;
		class?: string;
		badge?: boolean | string;
	}
</script>

<script lang="ts">
	import type { IconifyIcon } from '@iconify/types';
	let { icon, size = '24', class: cls = undefined, badge }: IconProps = $props();
</script>

<div class="relative h-fit w-fit">
	<svg
		width={size.toString()}
		height={size.toString()}
		class={cls}
		viewBox="0 0 {icon.width} {icon.height}"
	>
		{@html icon.body}
	</svg>
	{#if badge}
		<div
			class={[
				'label-small absolute z-10 flex items-center justify-center rounded-full bg-error p-1 text-on-error',
				typeof badge == 'string' ? 'bottom-3 left-3 h-[16px]' : 'right-0 top-0 size-[6px]'
			]}
		>
			{#if typeof badge == 'string'}
				{badge}
			{/if}
		</div>
	{/if}
</div>
