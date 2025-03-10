<script lang="ts">
	import { Col, Divider, Slider } from '$lib';
	import { mdiSettings } from '$lib/icons';
	import Example from '$lib/internal/Example.svelte';
	let value = $state(50);
	let value2 = $state(70);
</script>

<Col wFull hFit gaps>
	<p class="body-small">Sliders let users make selections from a range of values.</p>
	<Divider />

	<Example
		title="Colors"
		code={`<Slider bind:value />
<Slider bind:value color="secondary" />
<Slider bind:value color="tertiary" />
<Slider bind:value color="error" />`}
	>
		<Col class="items-start" wFull gaps>
			<Slider bind:value />
			<Slider color="secondary" />
			<Slider color="tertiary" />
			<Slider color="error" />
		</Col>
	</Example>

	<Example
		title="Steps and ticks"
		code={`<Slider bind:value step={10} />
<Slider bind:value step={10} ticks />`}
	>
		<Col class="items-start" wFull gaps>
			<Slider step={10} />
			<Slider step={10} ticks />
		</Col>
	</Example>

	<Example
		title="Custom range"
		code={`<Slider bind:value min={-100} />
<Slider bind:value max={60} />
<Slider bind:value min={30} max={60} />`}
	>
		<Col class="items-start" wFull gaps>
			<Slider min={-100} />
			<Slider max={60} />
			<Slider min={30} max={60} />
		</Col>
	</Example>

	<Example title="Multi" code={`<Slider bind:value bind:value2 />`}>
		<Col class="items-start" wFull gaps>
			<Slider bind:value2 />
		</Col>
	</Example>

	<Example title="Icon Thumbs" code={`<Slider icon={mdiSettings} />`}>
		<Col class="items-start" wFull gaps>
			<Slider icon={mdiSettings} />
		</Col>
	</Example>
</Col>
