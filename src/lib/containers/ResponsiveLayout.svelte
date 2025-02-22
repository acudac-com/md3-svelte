<script lang="ts" module>
	import { type NavBtnProps } from '$lib/components/NavBtn.svelte';
	interface LayoutProps {
		content: Snippet;
		settings: Snippet;
		navButtons: NavBtnProps[];
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
	import NavBtn from '$lib/components/NavBtn.svelte';
	import Col from '$lib/containers/Col.svelte';
	import ReversedCol from '$lib/containers/ReversedCol.svelte';
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
<Row full desktopOnly>
	<Col container spaced noShrink class={twMerge('w-[90px]', railClass)}>
		<!-- TOP -->
		<Col>
			<img src={logo} alt="Logo" width={logoSize + 'px'} class="mb-4" />
			{#each props.navButtons as nb}
				<NavBtn
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
	<Col full spaced>
		{@render props.content()}
	</Col>
</Row>

<!-- MOBILE VIEW -->
<Col mobileOnly justify class="h-dvh">
	<Row container justify spaced noShrink class={twMerge('h-[70px]', topBarClass)}>
		<img src={logo} alt="Logo" width={logoSize + 'px'} />
		<ReversedRow>
			{@render props.settings()}
		</ReversedRow>
	</Row>
	<Col full spaced>
		{@render props.content()}
	</Col>
	<Row justifyAround noShrink container class={twMerge('h-[70px]', bottomBarClass)}>
		{#each props.navButtons as nb}
			<NavBtn
				href={nb.href}
				selectedIcon={nb.selectedIcon}
				unselectedIcon={nb.unselectedIcon}
				label={nb.label}
			/>
		{/each}
	</Row>
</Col>
