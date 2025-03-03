<script lang="ts">
	import { Icon } from '$lib';
	import { mdiAboutVariant, pngGoogleMeet } from '$lib/icons';
	import Divider from '$lib/misc/Divider.svelte';
</script>

<Icon svg={mdiAboutVariant} />
<Icon svg={mdiAboutVariant} size="48" />
<Icon svg={mdiAboutVariant} badge />
<Icon svg={mdiAboutVariant} badge="100+" />
<Icon image={pngGoogleMeet} badge />

<div class="h-[130px] w-full bg-surface-container-low py-[8px]">
	<span>hi</span>
	<Divider></Divider>
	<span>hi</span>
	<Divider></Divider>
	<span>hi</span>
</div>
