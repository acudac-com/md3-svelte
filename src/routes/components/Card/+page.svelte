<script lang="ts">
	import { Card, Col, Divider, Row } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Cards can be used to contain other components that together represent one entity. Cards can
		either themselves be clickable, by providing an href property. Alternatively, they can have
		chips/buttons on them that are clickable. Do not make a card clickable if it contains any
		buttons (part of MD3 guidelines).
	</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example
		title="Types (note the changing url when clicked)"
		code={`<Card href="?type=elevated">Elevated</Card>
<Card href="?type=filled" type="filled">Filled</Card>
<Card href="?type=outlined" type="outlined">Outlined</Card>`}
	>
		<Row gaps scroll class="p-1">
			<Card href="?type=elevated">Elevated</Card>
			<Card href="?type=filled" type="filled">Filled</Card>
			<Card href="?type=outlined" type="outlined">Outlined</Card>
		</Row>
	</Example>
</Col>
