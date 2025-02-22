<script lang="ts" module>
	export interface NavBtnProps {
		href: string;
		unselectedIcon: IconifyIcon;
		selectedIcon: IconifyIcon;
		label?: string;
	}
</script>

<script lang="ts">
	import type { IconifyIcon } from '@iconify/types';
	import { NavListLink } from 'm3-svelte';
	import { page } from '$app/state';

	let { href, unselectedIcon, selectedIcon, label }: NavBtnProps = $props();
	let selected = $derived(!page.route.id || page.route.id.startsWith(href));
	let icon = $derived(selected ? selectedIcon : unselectedIcon);
</script>

<NavListLink type="auto" {href} {icon} {selected}>{label}</NavListLink>
