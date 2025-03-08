<script lang="ts">
	import { ModeWatcher, setMode } from 'mode-watcher';
	import '../app.css';

	let { children } = $props();
	setMode('light');
	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';
</script>

<ModeWatcher
	defaultMode="light"
	lightClassNames={['light' + contrast]}
	darkClassNames={['dark' + contrast]}
/>
<div class="relative h-full w-full">
	{@render children()}
</div>
