<script lang="ts">
	import { Checkbox, Slider, Switch } from '$lib';
	import RadioButtons from '$lib/forms/RadioButtons.svelte';
	import { mdiCheck, pngGoogleMeet } from '$lib/icons';
	let value = $state({ value: 'Apple' });
	let value2 = $state(40);
	let checked = $state(true);
	$inspect(checked);
</script>

<p class="headline-medium">Checkbox</p>
<Checkbox checked name="asdf" />
<Checkbox checked disabled />
<Checkbox checked color="error" />

<p class="headline-medium">Radio buttons</p>
<RadioButtons name="asdf" values={['Apple', 'Pear', 'Banana']} />
<RadioButtons color="tertiary" values={['Apple', 'Pear', 'Banana']} />
<RadioButtons
	color="tertiary"
	values={[{ value: 'Apple', disabled: true }, 'Pear', 'Banana']}
	bind:value={value.value}
/>

<p class="headline-medium">Slider</p>
<Slider />
<Slider step={20} color="tertiary" icon={pngGoogleMeet} />
<Slider step={20} color="tertiary" name2="asdf" bind:value2 icon2={mdiCheck} />
<Slider ticks step={0.2} max={0.8} class="w-1/2" disabled />

<p class="headline-medium">Switch</p>
<Switch bind:checked />
