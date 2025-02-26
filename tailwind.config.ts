import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			borderRadius: {
				'xs': '2px',
				'sm': '4px',
				'md': '6px',
				'lg': '8px',
				'xl': '12px',
				'2xl': '16px',
				'3xl': '24px'
			},
			boxShadow: {
				'l1': '0 1px 4px 0 rgba(0, 0, 0, 0.37)', // Similar to shadow-sm, adjusts to 1dp feel
				'l2': '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3)', // Adjusted for a 3dp feel
				'l3': '0 11px 7px 0 rgba(0, 0, 0, 0.19), 0 13px 25px 0 rgba(0, 0, 0, 0.3)', // Adjusted for a 6dp feel
				'l4': '0 14px 12px 0 rgba(0, 0, 0, 0.17), 0 20px 40px 0 rgba(0, 0, 0, 0.3)', // Adjusted for an 8dp feel
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
} satisfies Config;
