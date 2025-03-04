<script lang="ts">
	import { Checkbox, Slider, Switch } from '$lib';
	import RadioButtons from '$lib/forms/RadioButtons.svelte';
	let value = $state({ value: 'Apple' });
	let value2 = $state(40);
	let checked = $state(true);
	$inspect(checked);
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

<p class="headline-medium">Slider</p>
<Slider />
<Slider step={20} color="tertiary" />
<Slider step={20} color="tertiary" bind:value2 />
<Slider ticks step={0.2} max={0.8} class="w-1/2" disabled />

<p class="headline-medium">Switch</p>
<Switch bind:checked />
