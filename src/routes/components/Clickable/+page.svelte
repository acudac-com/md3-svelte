<script lang="ts">
	import { Col, Divider } from '$lib';
	import Clickable from '$lib/components/Clickable.svelte';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Provides a low level component for accepting click inputs to navigate (href) or do some action
		(onclick). Provides a ripple effect.
	</p>
	<Divider />

	<Example
		title=""
		code={`<Clickable class="size-full hover:bg-primary-container" href="?id=1"
	>List item 1</Clickable>
<Clickable class="size-full hover:bg-primary-container" href="?id=2"
	>List item 2</Clickable>`}
	>
		<Clickable class="size-full hover:bg-primary-container" href="?id=1">List item 1</Clickable>
		<Clickable class="size-full hover:bg-primary-container" href="?id=2">List item 2</Clickable>
	</Example>
</Col>
