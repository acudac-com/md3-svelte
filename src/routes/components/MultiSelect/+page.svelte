<script lang="ts">
	import { Col, Divider, Icon, Select } from '$lib';
	import MultiSelect from '$lib/components/MultiSelect.svelte';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
	import Row from '$lib/layout/Row.svelte';
	let value: string[] = $state([]);
	$inspect(value);
</script>

<Col wFull hFit gaps>
	<p class="body-small">MultiSelect lets users pick one or more items from a list.</p>
	<Divider />

	<Example
		title="Basic"
		code={`<MultiSelect values={['Apple', 'Banana', 'Pear']} label="Fruit" />`}
	>
		<Col class="items-start" wFull gaps>
			<MultiSelect values={['Apple', 'Banana', 'Pear']} label="Fruit" />
		</Col>
	</Example>

	<Example
		title="Customize"
		code={`<MultiSelect
	values={['Apple', 'Banana', 'Pear']}
	label="Fruit"
	bind:value
	class="w-full bg-surface-container-lowest"
>
	{#snippet itemSnippet(fruit)}
		<Row justify>
			{fruit} - {fruit}
			<Icon icon={mdiSettings} />
		</Row>
	{/snippet}
</MultiSelect>`}
	>
		<Col class="items-start" wFull gaps>
			<MultiSelect
				values={['Apple', 'Banana', 'Pear']}
				label="Fruit"
				bind:value
				class="w-full bg-surface-container-lowest"
			>
				{#snippet itemSnippet(fruit)}
					<Row justify>
						{fruit} - {fruit}
						<Icon icon={mdiSettings} />
					</Row>
				{/snippet}
			</MultiSelect>
		</Col>
	</Example>
</Col>
