<script module lang="ts">
	export type IconSize = '24' | '48' | '20' | '40' | number;
	export interface IconProps {
		icon: IconifyIcon;
		size?: IconSize;
		class?: string;
	}
</script>

<script lang="ts">
	import type { IconifyIcon } from '@iconify/types';
	let { icon, size = '24', class: cls = undefined }: IconProps = $props();
</script>

<svg
	width={size.toString()}
	height={size.toString()}
	class={cls}
	viewBox="0 0 {icon.width} {icon.height}"
>
	{@html icon.body}
</svg>
