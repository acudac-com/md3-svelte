<script lang="ts">
	import { Checkbox, Col, Divider, Row } from '$lib';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Checkboxes let users select one or more items from a list, or turn an item on or off.
	</p>
	<Divider />
	<Example
		title="Colors"
		code={`<Checkbox />
<Checkbox color="secondary" />
<Checkbox color="tertiary" />
<Checkbox color="error" />`}
	>
		<Row>
			<Checkbox />
			<Checkbox color="secondary" />
			<Checkbox color="tertiary" />
			<Checkbox color="error" />
		</Row>
	</Example>
</Col>
