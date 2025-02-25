<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();

	const contrast: '' | '-high-contrast' | '-medium-contrast' = '';
</script>

<ModeWatcher lightClassNames={['light' + contrast]} darkClassNames={['dark' + contrast]} />
{@render children()}
