<script module lang="ts">
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../layouts/$types';
	import { Col, Container, Menu, Row } from '$lib';
	import IconMenu from '$lib/components/IconMenu.svelte';
	import { mdiCode, mdiContentCopy } from '$lib/icons';
	import Link from '$lib/components/Link.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import { appCss, appHtml, iconsTs, tailwindConfig } from './files';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Col wFull class="gap-2 p-2 md:gap-3 md:p-3">
	<Container hFit wFull>
		<p class="title-medium mb-2">Overview</p>
		<p>
			This <Link href="https://svelte.dev/docs">Svelte 5</Link> library implements the <Link
				href="https://m3.material.io/">Material Design 3</Link
			> open-source design system. It uses <Link href="https://tailwindcss.com/">TailwindCSS</Link> as
			far as possible to allow customizing provided components. The latter is possible thanks to <Link
				href="https://www.npmjs.com/package/tailwind-merge">tailwind-merge</Link
			>.
		</p>
	</Container>
	<Container hFit wFull>
		<p class="title-medium mb-2">Getting started</p>
		<p>
			1. Run `pnpm dlx sv@0.6.18 create app` in your terminal and select the 'SvelteKit minimal'
			template and typescript.
		</p>
		<p>
			2. Select prettier and tailwindcss as plugins when prompted. Select typography when prompted
			for tailwindcss plugins. Select pnpm as package manager.
		</p>
		<p>3. Run `pnpm add @acudac/md3-svelte`</p>
		<p>
			4. Pick and export your theme as CSS using the <Link
				href="https://material-foundation.github.io/material-theme-builder/">MD3 Theme Builder</Link
			>. Place the exported .css files in 'src/theme' and remove the 'rgb(...)' wrapper for each
			color. The latter is necessary to apply background opacity to these colours. To make this
			easier you can add and run the following script in your package.json:
		</p>
		<pre
			class="label-small pl-4 text-tertiary">{`"theme": "find src/theme -type f -exec sed -i '' -e 's/rgb(//g' -e 's/);/;/g' {} +"`}</pre>
		<p>5. Override the following files' content with the provided code.</p>
		<Row class="pl-4" gaps>
			<p class="mr-10">src/app.html</p>
			<IconMenu icon={mdiCode} class="size-[30px]">
				<pre
					class="mr-4 max-h-[400px] max-w-[400px] overflow-scroll rounded-sm bg-surface p-1 shadow-l1">{appHtml}</pre>
			</IconMenu>
			<IconButton
				icon={mdiContentCopy}
				onclick={(e) => {
					navigator.clipboard.writeText(appHtml);
				}}
			/>
		</Row>
		<Row class="pl-4" gaps>
			<p class="mr-12">src/app.css</p>
			<IconMenu icon={mdiCode} class="size-[30px]">
				<pre
					class="mr-4 max-h-[400px] max-w-[400px] overflow-scroll rounded-sm bg-surface p-1 shadow-l1">{appCss}</pre>
			</IconMenu>
			<IconButton
				icon={mdiContentCopy}
				onclick={(e) => {
					navigator.clipboard.writeText(appCss);
				}}
			/>
		</Row>
		<Row class="pl-4" gaps>
			<p class="pr-2">tailwind.config.ts</p>
			<IconMenu icon={mdiCode} class="size-[30px]">
				<pre
					class="mr-4 max-h-[400px] max-w-[400px] overflow-scroll rounded-sm bg-surface p-1 shadow-l1">{tailwindConfig}</pre>
			</IconMenu>
			<IconButton
				icon={mdiContentCopy}
				onclick={(e) => {
					navigator.clipboard.writeText(tailwindConfig);
				}}
			/>
		</Row>
		<p>
			6. Combine <Link href="/layouts">Layouts</Link> and <Link href="/components">Components</Link>
			to build your MD3 inspired web app!
		</p>
	</Container>

	<Container hFit wFull>
		<p class="title-medium mb-2">Icons</p>
		<p>
			All components with 'icon' attributes accept both SVGs and Images. The simplest pattern for
			adding icons is to create an icons.ts file in your lib folder and export all your icons from
			there. You can find icons at <Link href="https://icon-sets.iconify.design/">Iconify</Link>
			and simply paste the icons' raw JSON data in the icons.ts file. Refer to <Menu
				class="font-bold text-primary"
			>
				{#snippet trigger()}
					this
				{/snippet}
				<pre
					class="ml-4 max-h-[400px] max-w-[500px] overflow-scroll rounded-sm bg-surface p-1 shadow-l1">{iconsTs}</pre></Menu
			> example icons.ts.
		</p>
	</Container>

	<Container hFit wFull>
		<p class="title-medium mb-2">Dark mode</p>
		<p>
			Its recommended that you use the <Link href="https://www.npmjs.com/package/mode-watcher"
				>'mode-watcher' npm library</Link
			> for toggling between dark and light mode. See an example setup <Link
				href="https://github.com/acudac-com/md3-svelte/blob/main/src/routes/%2Blayout.svelte"
				>here</Link
			>.
		</p>
	</Container>

	<Container hFit wFull>
		<p class="title-medium mb-2">Building/customizing components</p>
		<p>
			All components in this library have a 'class' attribute which you can use to customize the
			styling of the component. This does require that you are familiar with TailwindCSS. As far as
			possible you should use the MD3 colours (primary, secondary etc.) instead of the builtin
			'red', 'blue' etc.
		</p>
	</Container>
</Col>
