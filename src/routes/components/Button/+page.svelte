<script lang="ts">
	import { Button, Chip, Col, Divider, Row } from '$lib';
	import { mdiArrowBack, mdiCheck } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		A Button is used to take primary actions. A button can take either an 'href' or a 'onclick'
		attribute.
	</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example
		title="Colors"
		code={`<Button text="Primary" />
<Button text="Secondary" color="secondary" />
<Button text="Tertiary" color="tertiary" />
<Button text="Error" color="error" />`}
	>
		<Row gaps scroll>
			<Button text="Primary" />
			<Button text="Secondary" color="secondary" />
			<Button text="Tertiary" color="tertiary" />
			<Button text="Error" color="error" />
		</Row>
	</Example>

	<Example
		title="Types"
		code={`<Button text="Filled" />
<Button text="Tonal" type="tonal" />
<Button text="Outlined" type="outlined" />
<Button text="Text" type="text" />`}
	>
		<Row gaps scroll>
			<Button text="Filled" />
			<Button text="Tonal" type="tonal" />
			<Button text="Outlined" type="outlined" />
			<Button text="Text" type="text" />
		</Row>
	</Example>

	<Example
		title="Icons"
		code={`<Button text="Prepend" prependIcon={mdiArrowBack} />
<Button text="Append" appendIcon={mdiCheck} />`}
	>
		<Row gaps scroll>
			<Button text="Prepend" prependIcon={mdiArrowBack} />
			<Button text="Append" appendIcon={mdiCheck} />
		</Row>
	</Example>
</Col>
