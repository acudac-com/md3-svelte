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
	import IconMenu from '$lib/components/IconMenu.svelte';

	let p: ExampleProps = $props();
</script>

<Col wFull hFit class={p.class}>
	<Row justify class="mb-1">
		<p>{p.title}</p>

		<IconMenu icon={mdiCode} side="top">
			<pre class="m-2 max-h-[500px] max-w-[700px] overflow-scroll">{p.code}</pre>
		</IconMenu>
	</Row>
	<Container level="lowest" wFull class="rounded-md md:rounded-lg">
		{@render p.children()}
	</Container>
</Col>
