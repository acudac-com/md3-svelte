<script module lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export class MenuState {
		#open = $state(false);
		#id: string = crypto.randomUUID();
		constructor(open = false) {
			this.open = open;
		}
		get open() {
			return this.#open;
		}
		set open(value: boolean) {
			if (this.#open != value) {
				this.#open = value;
			}
		}
		get anchorName() {
			return `--${this.#id}`;
		}
		get triggerStyle() {
			return `anchor-name: ${this.anchorName}`;
		}
		get popOverTarget() {
			return this.#id;
		}
	}
	export interface MenuProps {
		trigger: Snippet<[MenuState]>;
		children: Snippet;
		side?: 'top' | 'bottom' | 'right' | 'left';
		alignment?:
			| 'start-start'
			| 'start-center'
			| 'start-end'
			| 'end-start'
			| 'end-center'
			| 'end-end';
		class?: string | string[];
		disableAutoClose?: boolean;
	}
</script>

<script lang="ts">
	let { side = 'bottom', alignment = 'start-start', ...p }: MenuProps = $props();
	let menuState = $state(new MenuState());
	let toggled = false;

	// find popover element
	let popover: HTMLElement | null = $state(null);
	onMount(() => {
		popover = document.getElementById(menuState.popOverTarget);
		if (menuState.open && popover) {
			popover.showPopover();
		}
	});

	// react to menuState.open changing
	$effect(() => {
		if (toggled != menuState.open && popover) {
			if (menuState.open) {
				popover.showPopover();
			} else {
				popover.hidePopover();
			}
		}
	});
</script>

{@render p.trigger(menuState)}
<div
	popover={p.disableAutoClose ? 'manual' : 'auto'}
	ontoggle={(e) => {
		toggled = e.newState == 'open';
		menuState.open = e.newState == 'open';
	}}
	id={menuState.popOverTarget}
	style={`position-anchor: ${menuState.anchorName};`}
	class={twMerge(
		[
			`popover-${side}-${alignment}`,
			'absolute inset-auto h-fit w-fit rounded-sm border-0 bg-surface p-0 shadow-l1',
			side == 'top' || side == 'bottom' ? 'my-2' : 'mx-2'
		],
		p.class
	)}
>
	{@render p.children()}
</div>

<style>
	/* BOTTOM  */
	div.popover-bottom-start-start {
		top: anchor(bottom);
		left: anchor(left);
		position-try-fallbacks: --top-start-start, --bottom-end-end, --top-end-end;
	}
	@position-try --bottom-start-start {
		inset: auto;
		top: anchor(bottom);
		left: anchor(left);
	}
	div.popover-bottom-start-center {
		top: anchor(bottom);
		left: anchor(center);
		position-try-fallbacks: --top-start-center, bottom-end-center, --top-end-center;
	}
	@position-try --bottom-start-center {
		inset: auto;
		top: anchor(bottom);
		left: anchor(center);
	}
	div.popover-bottom-start-end {
		top: anchor(bottom);
		left: anchor(right);
		position-try-fallbacks: --top-start-end, --bottom-end-start, --top-end-start;
	}
	@position-try --bottom-start-end {
		inset: auto;
		top: anchor(bottom);
		left: anchor(right);
	}
	div.popover-bottom-end-start {
		top: anchor(bottom);
		right: anchor(left);
		position-try-fallbacks: --top-end-start, --bottom-start-end, --top-start-end;
	}
	@position-try --bottom-end-start {
		inset: auto;
		top: anchor(bottom);
		right: anchor(left);
	}
	div.popover-bottom-end-center {
		top: anchor(bottom);
		right: anchor(center);
		position-try-fallbacks: --top-end-center, --bottom-start-center, --top-start-center;
	}
	@position-try --bottom-end-center {
		inset: auto;
		top: anchor(bottom);
		right: anchor(center);
	}
	div.popover-bottom-end-end {
		top: anchor(bottom);
		right: anchor(right);
		position-try-fallbacks: --top-end-end, --bottom-start-start, --top-start-start;
	}
	@position-try --bottom-end-end {
		inset: auto;
		top: anchor(bottom);
		right: anchor(right);
	}
	/* TOP */
	div.popover-top-start-start {
		bottom: anchor(top);
		left: anchor(left);
		position-try-fallbacks: --bottom-start-start, --top-end-end, --bottom-end-end;
	}
	@position-try --top-start-start {
		inset: auto;
		bottom: anchor(top);
		left: anchor(left);
	}
	div.popover-top-start-center {
		bottom: anchor(top);
		left: anchor(center);
		position-try-fallbacks: --bottom-start-center, --top-end-center, --bottom-end-center;
	}
	@position-try --top-start-center {
		inset: auto;
		bottom: anchor(top);
		left: anchor(center);
	}
	div.popover-top-start-end {
		bottom: anchor(top);
		left: anchor(right);
		position-try-fallbacks: --bottom-start-end, --top-end-start, --bottom-end-start;
	}
	@position-try --top-start-end {
		inset: auto;
		bottom: anchor(top);
		left: anchor(right);
	}
	div.popover-top-end-start {
		bottom: anchor(top);
		right: anchor(left);
		position-try-fallbacks: --bottom-end-start, --top-start-end, --bottom-start-end;
	}
	@position-try --top-end-start {
		inset: auto;
		bottom: anchor(top);
		right: anchor(left);
	}
	div.popover-top-end-center {
		bottom: anchor(top);
		right: anchor(center);
		position-try-fallbacks: --bottom-end-center, --top-start-center, --bottom-start-center;
	}
	@position-try --top-end-center {
		inset: auto;
		bottom: anchor(top);
		right: anchor(center);
	}
	div.popover-top-end-end {
		bottom: anchor(top);
		right: anchor(right);
		position-try-fallbacks: --bottom-end-end, --top-start-start, --bottom-start-start;
	}
	@position-try --top-end-end {
		inset: auto;
		bottom: anchor(top);
		right: anchor(right);
	}
	/* LEFT */
	div.popover-left-start-start {
		right: anchor(left);
		top: anchor(top);
		position-try-fallbacks: --right-start-start, --left-end-end, --right-end-end;
	}
	@position-try --left-start-start {
		inset: auto;
		right: anchor(left);
		top: anchor(top);
	}
	div.popover-left-start-center {
		right: anchor(left);
		top: anchor(center);
		position-try-fallbacks: --right-start-center, --left-end-center, --right-end-center;
	}
	@position-try --left-start-center {
		inset: auto;
		right: anchor(left);
		top: anchor(center);
	}
	div.popover-left-start-end {
		right: anchor(left);
		top: anchor(bottom);
		position-try-fallbacks: --right-start-end, --left-end-start, --right-end-start;
	}
	@position-try --left-start-end {
		inset: auto;
		right: anchor(left);
		top: anchor(bottom);
	}
	div.popover-left-end-start {
		right: anchor(left);
		bottom: anchor(top);
		position-try-fallbacks: --right-end-start, --left-start-end, --right-start-end;
	}
	@position-try --left-end-start {
		inset: auto;
		right: anchor(left);
		bottom: anchor(top);
	}
	div.popover-left-end-center {
		right: anchor(left);
		bottom: anchor(center);
		position-try-fallbacks: --right-end-center, --left-start-center, --right-start-center;
	}
	@position-try --left-end-center {
		inset: auto;
		right: anchor(left);
		bottom: anchor(center);
	}
	div.popover-left-end-end {
		right: anchor(left);
		bottom: anchor(bottom);
		position-try-fallbacks: --right-end-end, --left-start-start, --right-start-start;
	}
	@position-try --left-end-end {
		inset: auto;
		right: anchor(left);
		bottom: anchor(bottom);
	}
	/* RIGHT */
	div.popover-right-start-start {
		left: anchor(right);
		top: anchor(top);
		position-try-fallbacks: --left-start-start, --right-end-end, --left-end-end;
	}
	@position-try --right-start-start {
		inset: auto;
		left: anchor(right);
		top: anchor(top);
	}
	div.popover-right-start-center {
		left: anchor(right);
		top: anchor(center);
		position-try-fallbacks: --left-start-center, --right-end-center, --left-end-center;
	}
	@position-try --right-start-center {
		inset: auto;
		left: anchor(right);
		top: anchor(center);
	}
	div.popover-right-start-end {
		left: anchor(right);
		top: anchor(bottom);
		position-try-fallbacks: --left-start-end, --right-end-start, --left-end-start;
	}
	@position-try --right-start-end {
		inset: auto;
		left: anchor(right);
		top: anchor(bottom);
	}
	div.popover-right-end-start {
		left: anchor(right);
		bottom: anchor(top);
		position-try-fallbacks: --left-end-start, --right-start-end, --left-start-end;
	}
	@position-try --right-end-start {
		inset: auto;
		left: anchor(right);
		bottom: anchor(top);
	}
	div.popover-right-end-center {
		left: anchor(right);
		bottom: anchor(center);
		position-try-fallbacks: --left-end-center, --right-start-center, --left-start-center;
	}
	@position-try --right-end-center {
		inset: auto;
		left: anchor(right);
		bottom: anchor(center);
	}
	div.popover-right-end-end {
		left: anchor(right);
		bottom: anchor(bottom);
		position-try-fallbacks: --left-end-end, --right-start-start, --left-start-start;
	}
	@position-try --right-end-end {
		inset: auto;
		left: anchor(right);
		bottom: anchor(bottom);
	}
</style>
