export let appHtml = `<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<link rel="icon" href="%sveltekit.assets%/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
	<script type="module">
		if (!("anchorName" in document.documentElement.style)) {
			import("https://unpkg.com/@oddbird/css-anchor-positioning");
		}
	</script>
	%sveltekit.head%
</head>

<body data-sveltekit-preload-data="hover"
	class="bg-background text-on-background h-screen w-screen max-h-screen max-w-screen body-small">
	<div class="max-w-full max-h-full"
		style="display: contents;  font-family: 'Roboto', sans-serif; box-sizing: border-box; -webkit-box-sizing: border-box;-moz-box-sizing: border-box;">
		%sveltekit.body%</div>
</body>

</html>`;

export let appCss = `@import 'tailwindcss/base';
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

export let tailwindConfig = `import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/@acudac/md3-svelte/**/*.{html,js,svelte,ts}'],

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

export let iconsTs = `import type { Svg,Image } from '@acudac/md3-svelte'
 
 export const mdiAboutVariant: Svg = {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94" />'
}

export const mdiSettings: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z\" />"
}

export const mdiSettingsOutline: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-2 12c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1l-.07 1l2.11 1.63c.19.15.25.42.12.64l-2 3.46c-.12.22-.39.31-.61.22l-2.49-1c-.52.39-1.06.73-1.69.98l-.37 2.65c-.04.24-.25.42-.5.42zm1.25-18l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.52l.37-2.61c1.19-.25 2.24-.89 3.01-1.77l2.43 1.04l.75-1.3l-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4z\" />"
}

export const mdiCheck: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z\" />"
}

export const mdiClose: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z\" />"
}

export const mdiArrowBack: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z\" />"
}

export const uiwComponent: Svg = {
    "width": 20,
    "height": 20,
    "body": "<path fill=\"currentColor\" d=\"M18.62 3.448h-3.448a3.448 3.448 0 0 0-6.896 0H4.828a1.38 1.38 0 0 0-1.38 1.38v3.448a3.448 3.448 0 1 0 0 6.896v3.449A1.38 1.38 0 0 0 4.828 20h4.827v-1.38a2.069 2.069 0 1 1 4.138 0V20h4.828A1.38 1.38 0 0 0 20 18.62v-4.827h-1.38a2.069 2.069 0 1 1 0-4.138H20V4.828a1.38 1.38 0 0 0-1.38-1.38m-3.448 8.276a3.45 3.45 0 0 0 3.449 3.448v3.449h-3.449a3.448 3.448 0 1 0-6.896 0H4.828v-4.828h-1.38a2.069 2.069 0 1 1 0-4.138h1.38V4.828h4.827v-1.38a2.069 2.069 0 1 1 4.138 0v1.38h4.828v3.448a3.45 3.45 0 0 0-3.449 3.448\" />"
}

export const tablerLayout: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z\" />"
}

export const tablerLayoutFilled: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M8 3a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 9a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3zm10-9a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z\" />"
}

export const mdiCode: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z\" />"
}

export const mdiGithub: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2\" />"
}

export const solarMoon: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10\" />"
}

export const mdiWhiteBalanceSunny: Svg = {
    "width": 24,
    "height": 24,
    "body": "<path fill=\"currentColor\" d=\"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81zM1 13h3v-2H1m12 9h-2v3h2\" />"
}

export const deviconNpm: Svg = {
    "width": 128,
    "height": 128,
    "body": "<path fill=\"#cb3837\" d=\"M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z\" /><path fill=\"#fff\" d=\"M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z\" />"
}

export const pngGoogleMeet: Image = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYQvwh49wzcGC-_rouv-nSjd4btFc-zRp9w&s',
    alt: 'Google meet image',
	rounded: true
}`;