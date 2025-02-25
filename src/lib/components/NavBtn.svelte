<script lang="ts" module>
	export interface NavBtnProps {
		href: string;
		icon: IconifyIcon;
		showSelectedIfPrefix?: boolean;
		selectedIcon?: IconifyIcon;
		label?: string;
	}
</script>

<script lang="ts">
	import type { IconifyIcon } from '@iconify/types';
	import { NavListLink } from 'm3-svelte';
	import { page } from '$app/state';

	let { href, selectedIcon, showSelectedIfPrefix, icon, label }: NavBtnProps = $props();
	let selected = $derived.by(() => {
		if (!page.route.id) return false;
		if (showSelectedIfPrefix && page.route.id.startsWith(href)) return true;
		if (page.route.id == href) return true;
		return false;
	});
	let derivedIcon = $derived(selected && selectedIcon ? selectedIcon : icon);
</script>

<NavListLink type="auto" {href} icon={derivedIcon} {selected}>{label}</NavListLink>
