<script module lang="ts">
	import { Col, Container, Icon, IconButton, Menu, Row } from '$lib';
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
</script>

<Col wFull hFit class={p.class}>
	<Row justify class="mb-1">
		<p>{p.title}</p>

		<Menu side="top" alignment="end-end">
			{#snippet trigger(ms)}
				<button style={ms.triggerStyle} popovertarget={ms.popOverTarget}>code</button>
				<!-- <IconButton icon={mdiCode} bind:toggled={ms.open} anchorName={ms.anchorName} /> -->
			{/snippet}
			<pre class="mx-4 max-h-[500px] max-w-[700px] overflow-scroll">{p.code}</pre>
		</Menu>
	</Row>
	<Container level="lowest" wFull class="rounded-md md:rounded-lg">
		{@render p.children()}
	</Container>
</Col>
