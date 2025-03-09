<script lang="ts">
	import {
		Checkbox,
		Slider,
		Switch,
		TextArea,
		TextField,
		RadioButtons,
		OutlinedTextField,
		OutlinedTextArea,
		Select,
		Divider,
		Icon
	} from '$lib';
	import { mdiCheck, mdiSettings, pngGoogleMeet } from '$lib/icons';
	import Row from '$lib/layout/Row.svelte';
	let value = $state({ value: 'Apple' });
	let value2 = $state(40);
	let checked = $state(true);
	let textField = $state('');
	let selectValue: number | undefined = $state();
	$inspect(selectValue);
</script>

<p class="headline-medium">Checkbox</p>
<Checkbox checked />
<Checkbox checked color="error" />

<p class="headline-medium">Radio buttons</p>
<RadioButtons
	color="tertiary"
	values={[{ value: 'Apple', disabled: true }, 'Pear', 'Banana']}
	bind:value={value.value}
/>

<p class="headline-medium">Slider</p>
<Slider step={20} color="tertiary" icon={pngGoogleMeet} />
<Slider ticks step={0.2} max={0.8} class="w-1/2" disabled />

<p class="headline-medium">Switch</p>
<Switch bind:checked />

<p class="headline-medium">Text Field</p>
<div class="flex flex-col gap-4">
	<TextField label="Textfield" bind:value={textField} />
	<TextArea label="Multiline" bind:value={textField} />
	<OutlinedTextArea label="Outlined multiline" bind:value={textField} />
</div>

<Divider />
<Select
	values={[4, 5, 6, 1, 2, 3, 9, 8, 11, 12, 13, 14, 15, 16, 17, 18]}
	bind:value={selectValue}
	label="Fruits"
	prependIcon={mdiSettings}
>
	{#snippet item(i)}
		<Row gaps>
			<Icon icon={mdiCheck} />
			{i.toString()}
		</Row>
	{/snippet}
</Select>
