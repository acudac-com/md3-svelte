<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { TextAreaProps } from './TextArea.svelte';

	let { value = $bindable(), ...p }: TextAreaProps = $props();
	const id = crypto.randomUUID();
	const resize = (node: HTMLElement) => {
		const update = () => {
			const textarea = node.firstElementChild as HTMLTextAreaElement;
			node.style.height = 'unset';
			node.style.height = textarea.scrollHeight + 'px';
		};
		node.addEventListener('input', update);

		return {
			destroy() {
				node.removeEventListener('input', update);
			}
		};
	};
</script>

<div
	class={twMerge(['m3-container w-[300px] bg-surface', p.error ? 'error' : ''], p.class)}
	use:resize
>
	<textarea class="body-large rounded-xs" placeholder=" " bind:value {id} disabled={p.disabled}
	></textarea>
	<div class="layer rounded-xs"></div>
	<label class="body-large top-[12px] rounded-tl-xs rounded-tr-xs px-[2px]" for={id}
		>{p.label}</label
	>
</div>

<style>
	.m3-container {
		position: relative;
		align-items: center;
		min-height: 5rem;
		min-width: 15rem;
	}
	textarea {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 1rem;
		background-color: transparent;
		color: rgb(var(--md-sys-color-on-surface));
		resize: none;
	}
	label {
		position: absolute;
		left: 0.75rem;
		color: rgb(var(--error, var(--md-sys-color-on-surface-variant)));
		background-color: transparent;
		/* padding: 0 0.25rem; */
		pointer-events: none;
		transition:
			all 200ms,
			font-size 300ms,
			line-height 300ms,
			letter-spacing 300ms;
	}
	.layer {
		position: absolute;
		inset: 0;
		border: 0.0625rem solid rgb(var(--error, var(--md-sys-color-outline)));
		pointer-events: none;
		transition: all 200ms;
	}
	.m3-container > :global(svg) {
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
		margin-left: 0.75rem;
		color: rgb(var(--md-sys-color-on-surface-variant));
		pointer-events: none;
	}

	textarea:focus ~ label,
	textarea:not(:placeholder-shown) ~ label {
		background-color: inherit;
		top: calc(var(--m3-font-body-small-height, 1rem) * -0.4);
		font-size: var(--m3-font-body-small-size, 0.75rem);
		line-height: var(--m3-font-body-small-height, 0.75rem);
		letter-spacing: var(--m3-font-body-small-tracking, 0.4);
	}
	textarea:hover ~ label {
		color: rgb(var(--error, var(--md-sys-color-on-surface)));
	}
	textarea:hover ~ .layer {
		border-color: rgb(var(--error, var(--md-sys-color-on-surface)));
	}
	textarea:focus ~ label {
		color: rgb(var(--error, var(--md-sys-color-primary)));
	}
	textarea:focus ~ .layer {
		border-color: rgb(var(--error, var(--md-sys-color-primary)));
		border-width: 0.125rem;
	}

	.leading-icon > textarea {
		padding-left: 3.25rem;
	}
	.leading-icon > textarea:not(:focus):placeholder-shown ~ label {
		left: 3rem;
	}

	.error {
		--error: var(--md-sys-color-error);
	}
	.error > textarea:hover ~ label,
	.error > textarea:hover ~ .layer {
		--error: var(--md-sys-color-on-error-container);
	}

	textarea:disabled {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	textarea:disabled ~ label {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	textarea:disabled ~ .layer {
		border-color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}
	textarea:disabled ~ :global(svg) {
		color: rgb(var(--md-sys-color-on-surface) / 0.38);
	}

	.m3-container {
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}
</style>
