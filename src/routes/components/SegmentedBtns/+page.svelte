<script lang="ts">
	import { Col, Divider } from '$lib';
	import RadioButtons from '$lib/components/RadioButtons.svelte';
	import SegmentedBtns from '$lib/components/SegmentedBtns.svelte';
	import Example from '$lib/internal/Example.svelte';
	let value = $state('');
</script>

<Col wFull hFit gaps>
	<p class="body-small">
		Segmented buttons help people select options, switch views, or sort elements.
	</p>
	<Divider />

	<Example
		title="Colors"
		code={`<SegmentedBtns
	options={[
		{ text: 'Option 1', id: 'option 1' },
		{ text: 'Option 2', id: 'option 2' },
		{ text: 'Option 3', id: 'option 3' }
	]}
/>
<SegmentedBtns
	color="secondary"
	options={[
		{ text: 'Option 1', id: 'option 1' },
		{ text: 'Option 2', id: 'option 2' },
		{ text: 'Option 3', id: 'option 3' }
	]}
/>
<SegmentedBtns
	color="tertiary"
	options={[
		{ text: 'Option 1', id: 'option 1' },
		{ text: 'Option 2', id: 'option 2' },
		{ text: 'Option 3', id: 'option 3' }
	]}
/>
<SegmentedBtns
	color="error"
	options={[
		{ text: 'Option 1', id: 'option 1' },
		{ text: 'Option 2', id: 'option 2' },
		{ text: 'Option 3', id: 'option 3' }
	]}
/>`}
	>
		<Col class="items-start" wFull gaps>
			<SegmentedBtns
				options={[
					{ text: 'Option 1', id: 'option 1' },
					{ text: 'Option 2', id: 'option 2' },
					{ text: 'Option 3', id: 'option 3' }
				]}
			/>
			<SegmentedBtns
				color="secondary"
				options={[
					{ text: 'Option 1', id: 'option 1' },
					{ text: 'Option 2', id: 'option 2' },
					{ text: 'Option 3', id: 'option 3' }
				]}
			/>
			<SegmentedBtns
				color="tertiary"
				options={[
					{ text: 'Option 1', id: 'option 1' },
					{ text: 'Option 2', id: 'option 2' },
					{ text: 'Option 3', id: 'option 3' }
				]}
			/>
			<SegmentedBtns
				color="error"
				options={[
					{ text: 'Option 1', id: 'option 1' },
					{ text: 'Option 2', id: 'option 2' },
					{ text: 'Option 3', id: 'option 3' }
				]}
			/>
		</Col>
	</Example>

	<Example
		title="Multiselect"
		code={`<SegmentedBtns
	multi
	options={[
		{ text: 'Option 1', id: 'option 1' },
		{ text: 'Option 2', id: 'option 2' },
		{ text: 'Option 3', id: 'option 3' }
	]}
/>`}
	>
		<Col class="items-start" wFull gaps>
			<SegmentedBtns
				multi
				options={[
					{ text: 'Option 1', id: 'option 1' },
					{ text: 'Option 2', id: 'option 2' },
					{ text: 'Option 3', id: 'option 3' }
				]}
			/>
		</Col>
	</Example>

	<Example
		title="Search Parameters"
		code={`<SegmentedBtns
	options={[
		{ text: 'Option 1', id: 'option 1', href: '?option=1' },
		{ text: 'Option 2', id: 'option 2', href: '?option=2' },
		{ text: 'Option 3', id: 'option 3', href: '?option=3' }
	]}
/>`}
	>
		<Col class="items-start" wFull gaps>
			<SegmentedBtns
				options={[
					{ text: 'Option 1', id: 'option 1', href: '?option=1' },
					{ text: 'Option 2', id: 'option 2', href: '?option=2' },
					{ text: 'Option 3', id: 'option 3', href: '?option=3' }
				]}
			/>
		</Col>
	</Example>
</Col>
