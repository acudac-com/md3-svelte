<script module lang="ts">
	import { Col, Container, Icon, Menu, Row } from '$lib';
	import { mdiCode } from '$lib/icons';
	import type { Snippet } from 'svelte';
	export interface ExampleProps {
		title: string;
		children: Snippet;
		code: string;
		class?: string | string[];
	}
</script>

<script lang="ts">
	let p: ExampleProps = $props();
	let open = $state(false);
</script>

<Col wFull hFit class={p.class}>
	<Row justify>
		<p>{p.title}</p>
		<Menu bind:open>
			{#snippet trigger()}
				<Icon
					icon={mdiCode}
					class={[
						'm-1 rounded-full p-[2px] hover:bg-primary-container',
						open ? 'bg-primary-container' : ''
					]}
				/>
			{/snippet}
			<pre
				class="mx-4 max-h-[500px] max-w-[700px] overflow-scroll rounded-sm bg-surface p-2 shadow-l1">{p.code}</pre>
		</Menu>
	</Row>
	<Container level="lowest" wFull class="rounded-md md:rounded-lg">
		{@render p.children()}
	</Container>
</Col>
