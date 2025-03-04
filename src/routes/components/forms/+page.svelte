<script lang="ts">
	import { Checkbox } from '$lib';
	import RadioButtons from '$lib/forms/RadioButtons.svelte';
	let value = $state({ value: 'Apple' });
	$inspect(value);
</script>

<p class="headline-medium">Checkbox</p>
<Checkbox checked />
<Checkbox checked disabled />
<Checkbox checked color="error" />

<p class="headline-medium">Radio buttons</p>
<RadioButtons values={['Apple', 'Pear', 'Banana']} />
<RadioButtons color="tertiary" values={['Apple', 'Pear', 'Banana']} />
<RadioButtons
	color="tertiary"
	values={[{ value: 'Apple', disabled: true }, 'Pear', 'Banana']}
	bind:value={value.value}
/>
