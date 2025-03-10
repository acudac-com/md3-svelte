<script module lang="ts">
	let appHtml = `<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<link rel="icon" href="%sveltekit.assets%/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
	%sveltekit.head%
</head>

<body data-sveltekit-preload-data="hover"
	class="bg-background text-on-background h-screen w-screen max-h-screen max-w-screen body-small">
	<div class="max-w-full max-h-full"
		style="display: contents;  font-family: 'Roboto', sans-serif; box-sizing: border-box; -webkit-box-sizing: border-box;-moz-box-sizing: border-box;">
		%sveltekit.body%</div>
</body>

</html>`;

	let appCss = `@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
@import 'theme/dark-hc.css';
@import 'theme/dark-mc.css';
@import 'theme/dark.css';
@import 'theme/light-hc.css';
@import 'theme/light-mc.css';
@import 'theme/light.css';

.display-large {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 57pt;
    line-height: 64pt;
    letter-spacing: -0.25pt;
}

.display-medium {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 45pt;
    line-height: 52pt;
    letter-spacing: 0pt;
}

.display-small {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 36pt;
    line-height: 44pt;
    letter-spacing: 0pt;
}

.headline-large {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 32pt;
    line-height: 40pt;
    letter-spacing: 0pt;
}

.headline-medium {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 28pt;
    line-height: 36pt;
    letter-spacing: 0pt;
}

.headline-small {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24pt;
    line-height: 32pt;
    letter-spacing: 0pt;
}

.title-large {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 22pt;
    line-height: 28pt;
    letter-spacing: 0pt;
}

.title-medium {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16pt;
    line-height: 24pt;
    letter-spacing: 0.15pt;
}

.title-small {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14pt;
    line-height: 20pt;
    letter-spacing: 0.1pt;
}

.body-large {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16pt;
    line-height: 24pt;
    letter-spacing: 0.5pt;
}

.body-medium {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14pt;
    line-height: 20pt;
    letter-spacing: 0.25pt;
}

.body-small {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12pt;
    line-height: 16pt;
    letter-spacing: 0.4pt;
}

.label-large {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14pt;
    line-height: 20pt;
    letter-spacing: 0.1pt;
}

.label-medium {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12pt;
    line-height: 16pt;
    letter-spacing: 0.5pt;
}

.label-small {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 11pt;
    line-height: 16pt;
    letter-spacing: 0.5pt;
}

.prominent-label-large {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14pt;
    line-height: 20pt;
    letter-spacing: 0.1pt;
}

.prominent-label-medium {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12pt;
    line-height: 16pt;
    letter-spacing: 0.5pt;
}

.prominent-label-small {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 11pt;
    line-height: 16pt;
    letter-spacing: 0.5pt;
}`;

	let tailwindConfig = `import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			borderRadius: {
				'xs': '4px',
				'sm': '8px',
				'md': '12px',
				'lg': '16px',
				'xl': '28px',
				'2xl': '36px',
				'3xl': '50px'
			},
			boxShadow: {
				'l1': '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
				'l2': '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.3)',
				'l3': '0 6px 4px 0 rgba(0, 0, 0, 0.10), 0 6px 13px 0 rgba(0, 0, 0, 0.3)',
				'l4': '0 10px 8px 0 rgba(0, 0, 0, 0.13), 0 12px 20px 0 rgba(0, 0, 0, 0.3)',
				'l5': '0 17px 17px 0 rgba(0, 0, 0, 0.15), 0 27px 55px 0 rgba(0, 0, 0, 0.3)',
			},
			colors: {
				"primary": "rgb(var(--md-sys-color-primary) / <alpha-value>)",
				"surface-tint": "rgb(var(--md-sys-color-surface-tint) / <alpha-value>)",
				"on-primary": "rgb(var(--md-sys-color-on-primary) / <alpha-value>)",
				"primary-container": "rgb(var(--md-sys-color-primary-container) / <alpha-value>)",
				"on-primary-container": "rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)",
				"secondary": "rgb(var(--md-sys-color-secondary) / <alpha-value>)",
				"on-secondary": "rgb(var(--md-sys-color-on-secondary) / <alpha-value>)",
				"secondary-container": "rgb(var(--md-sys-color-secondary-container) / <alpha-value>)",
				"on-secondary-container": "rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)",
				"tertiary": "rgb(var(--md-sys-color-tertiary) / <alpha-value>)",
				"on-tertiary": "rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)",
				"tertiary-container": "rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)",
				"on-tertiary-container": "rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)",
				"error": "rgb(var(--md-sys-color-error) / <alpha-value>)",
				"on-error": "rgb(var(--md-sys-color-on-error) / <alpha-value>)",
				"error-container": "rgb(var(--md-sys-color-error-container) / <alpha-value>)",
				"on-error-container": "rgb(var(--md-sys-color-on-error-container) / <alpha-value>)",
				"background": "rgb(var(--md-sys-color-background) / <alpha-value>)",
				"on-background": "rgb(var(--md-sys-color-on-background) / <alpha-value>)",
				"surface": "rgb(var(--md-sys-color-surface) / <alpha-value>)",
				"on-surface": "rgb(var(--md-sys-color-on-surface) / <alpha-value>)",
				"surface-variant": "rgb(var(--md-sys-color-surface-variant) / <alpha-value>)",
				"on-surface-variant": "rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)",
				"outline": "rgb(var(--md-sys-color-outline) / <alpha-value>)",
				"outline-variant": "rgb(var(--md-sys-color-outline-variant) / <alpha-value>)",
				"shadow": "rgb(var(--md-sys-color-shadow) / <alpha-value>)",
				"scrim": "rgb(var(--md-sys-color-scrim) / <alpha-value>)",
				"inverse-surface": "rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)",
				"inverse-on-surface": "rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)",
				"inverse-primary": "rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)",
				"primary-fixed": "rgb(var(--md-sys-color-primary-fixed) / <alpha-value>)",
				"on-primary-fixed": "rgb(var(--md-sys-color-on-primary-fixed) / <alpha-value>)",
				"primary-fixed-dim": "rgb(var(--md-sys-color-primary-fixed-dim) / <alpha-value>)",
				"primary-fixed-variant": "rgb(var(--md-sys-color-on-primary-fixed-variant) / <alpha-value>)",
				"secondary-fixed": "rgb(var(--md-sys-color-secondary-fixed) / <alpha-value>)",
				"on-secondary-fixed": "rgb(var(--md-sys-color-on-secondary-fixed) / <alpha-value>)",
				"secondary-fixed-dim": "rgb(var(--md-sys-color-secondary-fixed-dim) / <alpha-value>)",
				"on-secondary-fixed-variant": "rgb(var(--md-sys-color-on-secondary-fixed-variant) / <alpha-value>)",
				"tertiary-fixed": "rgb(var(--md-sys-color-tertiary-fixed) / <alpha-value>)",
				"on-tertiary-fixed": "rgb(var(--md-sys-color-on-tertiary-fixed) / <alpha-value>)",
				"tertiary-fixed-dim": "rgb(var(--md-sys-color-tertiary-fixed-dim) / <alpha-value>)",
				"tertiary-fixed-variant": "rgb(var(--md-sys-color-on-tertiary-fixed-variant) / <alpha-value>)",
				"surface-dim": "rgb(var(--md-sys-color-surface-dim) / <alpha-value>)",
				"surface-bright": "rgb(var(--md-sys-color-surface-bright) / <alpha-value>)",
				"surface-container-lowest": "rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)",
				"surface-container-low": "rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)",
				"surface-container": "rgb(var(--md-sys-color-surface-container) / <alpha-value>)",
				"surface-container-high": "rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)",
				"surface-container-highest": "rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)",
			}
		}
	},

	plugins: [typography]
} satisfies Config;`;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../layouts/$types';
	import { Col, Container, Row } from '$lib';
	import { page } from '$app/state';
	import IconMenu from '$lib/components/IconMenu.svelte';
	import { mdiCode } from '$lib/icons';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let component = $derived.by(() => {
		let parts = page.url.pathname.split('/');
		return parts[parts.length - 1];
	});
</script>

<Col wFull class="gap-2 p-2 md:gap-3 md:p-3">
	<Container hFit wFull>
		<p class="title-medium mb-2">Getting started</p>
		<p>
			1. Run `pnpm dlx sv@0.6.18 create app` in your terminal and select the 'Simple' template and
			typescript.
		</p>
		<p>2. Select tailwindcss and prettier as plugins/features when prompted.</p>
		<p>
			3. Pick and export your theme using the <a
				class="text-primary"
				href="https://material-foundation.github.io/material-theme-builder/">MD3 Theme Builder</a
			>. Place the exported files in 'src/theme' and remove the 'rgb(...)' wrapper for each color.
			The latter is necessary to apply background opacity to these colours. To make this easier you
			can add the following script to your package.json:
		</p>
		<pre
			class="label-small pl-4 text-tertiary">{`"theme": "find src/theme -type f -exec sed -i '' -e 's/rgb(//g' -e 's/);/;/g' {} +"`}</pre>
		<p>4. Override the following files' content.</p>
		<Row justify class="pl-4">
			<p>src/app.html</p>
			<IconMenu icon={mdiCode} class="size-[30px]">
				<pre
					class="mr-4 max-h-[500px] max-w-[400px] overflow-scroll rounded-sm bg-surface p-1 shadow-l1">{appHtml}</pre>
			</IconMenu>
		</Row>
		<Row justify class="pl-4">
			<p>src/app.css</p>
			<IconMenu icon={mdiCode} class="size-[30px]">
				<pre
					class="mr-4 max-h-[500px] max-w-[400px] overflow-scroll rounded-sm bg-surface p-1 shadow-l1">{appCss}</pre>
			</IconMenu>
		</Row>
		<Row justify class="pl-4">
			<p>tailwind.config.ts</p>
			<IconMenu icon={mdiCode} class="size-[30px]">
				<pre
					class="mr-4 max-h-[500px] max-w-[400px] overflow-scroll rounded-sm bg-surface p-1 shadow-l1">{tailwindConfig}</pre>
			</IconMenu>
		</Row>
	</Container>
	<Container hFit wFull>
		<p class="title-medium">Building/customizing components</p>
		<p>
			All components in this library have a 'class' attribute which you can use to customize the
			styling of the component. This does required that you are familiar with TailwindCSS. As far as
			possible try to use the MD3 colours (primary, secondary etc.) instead of the builtin 'red',
			'blue' etc.
		</p>
	</Container>
</Col>
