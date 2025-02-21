<script lang="ts" module>
	import { type NavButtonProps } from '$lib/components/NavButton.svelte';
	interface LayoutProps {
		content: Snippet;
		settings: Snippet;
		navButtons: NavButtonProps[];
		railClass?: ClassNameValue;
		topBarClass?: ClassNameValue;
		bottomBarClass?: ClassNameValue;
		logo?: string;
		logoSize?: number;
	}
</script>

<script lang="ts">
	import { type Snippet } from 'svelte';
	import Row from '$lib/containers/Row.svelte';
	import NavButton from '$lib/components/NavButton.svelte';
	import Col from '$lib/containers/Col.svelte';
	import ReversedCol from '$lib/containers/ReversedCol.svelte';
	import SpreadRow from '$lib/containers/SpreadRow.svelte';
	import SpreadCol from '$lib/containers/SpreadCol.svelte';
	import ReversedRow from './ReversedRow.svelte';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	let {
		railClass,
		topBarClass,
		bottomBarClass,
		logo = '/favicon.png',
		logoSize = 50,
		...props
	}: LayoutProps = $props();
</script>

<!-- DESKTOP VIEW -->
<Row desktopOnly>
	<Col class={twMerge('bg-surface-container w-[90px] shrink-0 py-4', railClass)}>
		<!-- TOP -->
		<Col class="gap-4">
			<img src={logo} alt="Logo" width={logoSize + 'px'} class="mb-4" />
			{#each props.navButtons as nb}
				<NavButton
					href={nb.href}
					selectedIcon={nb.selectedIcon}
					unselectedIcon={nb.unselectedIcon}
					label={nb.label}
				/>
			{/each}
		</Col>

		<!-- BOTTOM -->
		<ReversedCol>
			{@render props.settings()}
		</ReversedCol>
	</Col>
	<Col class="p-4">
		{@render props.content()}
	</Col>
</Row>

<!-- MOBILE VIEW -->
<SpreadCol mobileOnly class="h-dvh">
	<SpreadRow class={twMerge('bg-surface-container h-[70px] shrink-0 px-4', topBarClass)}>
		<img src={logo} alt="Logo" width={logoSize + 'px'} />
		<ReversedRow>
			{@render props.settings()}
		</ReversedRow>
	</SpreadRow>
	<Col class="p-4">
		{@render props.content()}
	</Col>
	<Row class={twMerge('bg-surface-container h-[70px] shrink-0 justify-around', bottomBarClass)}>
		{#each props.navButtons as nb}
			<NavButton
				href={nb.href}
				selectedIcon={nb.selectedIcon}
				unselectedIcon={nb.unselectedIcon}
				label={nb.label}
			/>
		{/each}
	</Row>
</SpreadCol>
