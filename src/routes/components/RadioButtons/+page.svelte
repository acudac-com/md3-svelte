<script lang="ts">
	import { Col, Divider } from '$lib';
	import RadioButtons from '$lib/components/RadioButtons.svelte';
	import Example from '$lib/internal/Example.svelte';
	let value = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">Radio buttons let people select one option from a set of options.</p>
	<Divider />

	<Example
		title="Colors"
		code={`<RadioButtons values={['Apple', 'Banana']} bind:value />
<Divider />
<RadioButtons values={['Apple', 'Banana']} bind:value color="secondary" />
<Divider />
<RadioButtons values={['Apple', 'Banana']} bind:value color="tertiary" />
<Divider />
<RadioButtons values={['Apple', 'Banana']} bind:value color="error" />`}
	>
		<RadioButtons values={['Apple', 'Banana']} bind:value />
		<Divider />
		<RadioButtons values={['Apple', 'Banana']} bind:value color="secondary" />
		<Divider />
		<RadioButtons values={['Apple', 'Banana']} bind:value color="tertiary" />
		<Divider />
		<RadioButtons values={['Apple', 'Banana']} bind:value color="error" />
	</Example>

	<Example
		title="Disabled options"
		code={`<RadioButtons values={[
	{ value: 'Apple' },
	{ value: 'Banana', disabled: true }
]} bind:value />`}
	>
		<RadioButtons values={[{ value: 'Apple' }, { value: 'Banana', disabled: true }]} bind:value />
	</Example>
</Col>
