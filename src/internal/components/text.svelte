<script module lang="ts">
	import Label from '$lib/components/text/Label.svelte';
	import Paragraph from '$lib/components/text/Paragraph.svelte';

	export type TypeScale =
		| 'display-large'
		| 'display-medium'
		| 'display-small'
		| 'headline-large'
		| 'headline-medium'
		| 'headline-small'
		| 'title-large'
		| 'title-medium'
		| 'title-small'
		| 'body-large'
		| 'body-medium'
		| 'body-small'
		| 'label-large'
		| 'label-medium'
		| 'label-small'
		| 'prominent-large'
		| 'prominent-medium'
		| 'prominent-small';
</script>

<Paragraph attributes={{ on }}>asdf</Paragraph>
