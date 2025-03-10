<script lang="ts">
	import { Chip, Col, Dialog, Divider, Icon, Menu } from '$lib';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import Example from '$lib/internal/Example.svelte';
	let toggled = $state(false);
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Dialogs open over the current content either with a scrim background or in fullscreen. Dialogs
		provide important prompts in a user flow. Also refer to the IconDialog and ChipDialog components
		for predefined trigger components.
	</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example
		title="Standard"
		code={`<Button type="tonal" text="Open" bind:toggled />
<Dialog open={toggled}>
	<Col justify class="h-[100px]">
		<p>Some dialog content</p>
		<Button text="Save" />
	</Col>
</Dialog>`}
	>
		<Button type="tonal" text="Open" bind:toggled />
		<Dialog open={toggled}>
			<Col justify class="h-[100px]">
				<p>Some dialog content</p>
				<Button text="Save" />
			</Col>
		</Dialog>
	</Example>
</Col>
