<script lang="ts">
	import { Button, Col, Divider, Row } from '$lib';
	import ButtonDialog from '$lib/components/ButtonDialog.svelte';
	import Example from '$lib/internal/Example.svelte';

	let open = $state(false);
	let fullOpen = $state(false);
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		A ButtonDialog consists of a button, which when clicked opens a dialog. Common use case is to
		prompt a user if they really want to continue with the action (e.g. deleting something).
	</p>
	<Divider />
	<p class="title-small">Examples</p>
	<Example
		title="Types"
		code={`<ButtonDialog bind:open text="Scrim">
	<p>Are you sure?</p>
	<Button
		text="Cancel"
		onclick={() => {
			open = false;
		}}
	/>
</ButtonDialog>
<ButtonDialog bind:open={fullOpen} text="Fullscreen" dialogType="fullscreen">
	<p>Are you sure?</p>
	<Button
		text="Cancel"
		onclick={() => {
			fullOpen = false;
		}}
	/>
</ButtonDialog>`}
	>
		<Row gaps scroll>
			<ButtonDialog bind:open text="Scrim">
				<p>Are you sure?</p>
				<Button
					text="Cancel"
					onclick={() => {
						open = false;
					}}
				/>
			</ButtonDialog>
			<ButtonDialog bind:open={fullOpen} text="Fullscreen" dialogType="fullscreen">
				<p>Are you sure?</p>
				<Button
					text="Cancel"
					onclick={() => {
						fullOpen = false;
					}}
				/>
			</ButtonDialog>
		</Row>
	</Example>
</Col>
