<script lang="ts">
	import { Col, Divider, Switch } from '$lib';
	import Example from '$lib/internal/Example.svelte';
	let checked = $state(true);
</script>

<Col wFull hFit gaps>
	<p class="body-small">Switches toggle the selection of an item on or off.</p>
	<Divider />
	<p class="title-small">Examples</p>

	<Example title="" code={`<Switch bind:checked/>`}>
		<Switch bind:checked />
	</Example>
</Col>
