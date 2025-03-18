<script lang="ts">
	import { Col, Divider, Icon, Select } from '$lib';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
	import Row from '$lib/layout/Row.svelte';
	let value = $state('');
	$inspect(value);
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Segmented buttons help people select options, switch views, or sort elements.
	</p>
	<Divider />

	<Example title="Basic" code={`<Select values={['Apple', 'Banana', 'Pear']} label="Fruit" />`}>
		<Col class="items-start" wFull gaps>
			<Select values={['Apple', 'Banana', 'Pear']} label="Fruit" />
		</Col>
	</Example>

	<Example
		title="Custom item"
		code={`<Select values={['Apple', 'Banana', 'Pear']} label="Fruit">
	{#snippet item(fruit)}
		<Row justify>
			{fruit} - {fruit}
			<Icon icon={mdiSettings} />
		</Row>
	{/snippet}
</Select>`}
	>
		<Col class="items-start" wFull gaps>
			<Select values={['Apple', 'Banana', 'Pear']} label="Fruit" bind:value>
				{#snippet itemSnippet(fruit)}
					<Row justify>
						{fruit} - {fruit}
						<Icon icon={mdiSettings} />
					</Row>
				{/snippet}
			</Select>
		</Col>
	</Example>
</Col>
