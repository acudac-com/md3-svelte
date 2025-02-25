import type { Snippet } from "svelte";
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { page } from '$app/state';

export interface Props {
    overflowScroll?: boolean
    overflowWrap?: boolean
    overflowWrapReverse?: boolean
    overflowClip?: boolean

    hFull?: boolean
    hFit?: boolean
    wFull?: boolean
    wFit?: boolean
    full?: boolean
    fit?: boolean

    container?: boolean
    containerLowest?: boolean
    containerLow?: boolean
    containerHigh?: boolean
    containerHighest?: boolean
    containerPrimary?: boolean
    containerSecondary?: boolean
    containerTertiary?: boolean

    hover?: boolean
    hoverLowest?: boolean
    hoverLow?: boolean
    hoverHigh?: boolean
    hoverHighest?: boolean
    hoverPrimary?: boolean
    hoverSecondary?: boolean
    hoverTertiary?: boolean

    href?: string
    selected?: boolean
    selectLowest?: boolean
    selectLow?: boolean
    selectHigh?: boolean
    selectHighest?: boolean
    selectPrimary?: boolean
    selectSecondary?: boolean
    selectTertiary?: boolean

    rounded?: boolean
    roundedSm?: boolean
    roundedMd?: boolean
    roundedLg?: boolean
    roundedXl?: boolean
    rounded2xl?: boolean
    rounded3xl?: boolean
    roundedFull?: boolean

    justify?: boolean
    justifyAround?: boolean
    justifyCenter?: boolean
    justifyEnd?: boolean

    spaced?: boolean
    gap?: boolean
    pad?: boolean
    noShrink?: boolean

    desktopOnly?: boolean
    mobileOnly?: boolean
    class?: ClassNameValue;
    children: Snippet
}

export function flexClasses(props: Props, ...additionalBaseClasses: string[]) {
    let baseClass = ['flex', 'items-center']

    if (props.spaced) {
        baseClass.push('gap-2', 'p-2', 'md:gap-4', 'md:p-4')
    } else if (props.gap) {
        baseClass.push('gap-2', 'md:gap-4')
    } else if (props.pad) {
        baseClass.push('p-2', 'md:p-4')
    }

    if (props.hFull || props.full) {
        baseClass.push('h-full')
    } else if (props.hFit || props.fit) {
        baseClass.push('h-fit')
    }

    if (props.wFull || props.full) {
        baseClass.push('w-full')
    } else if (props.wFit || props.fit) {
        baseClass.push('w-fit')
    }

    if (props.justify) {
        baseClass.push('justify-between')
    } else if (props.justifyAround) {
        baseClass.push('justify-around')
    } else if (props.justifyCenter) {
        baseClass.push('justify-center')
    } else if (props.justifyEnd) {
        baseClass.push('justify-end')
    }

    if (props.overflowScroll) {
        baseClass.push('overflow-auto flex-nowrap')
    } else if (props.overflowWrap) {
        baseClass.push('flex-wrap')
    } else if (props.overflowWrapReverse) {
        baseClass.push('flex-wrap-reverse')
    } else if (props.overflowClip) {
        baseClass.push('overflow-clip', 'flex-nowrap')
    }

    let selected = false
    if (props.href != undefined) {
        if (props.href == page.route.id || "") {
            selected = true
        }
    }

    if (props.selected || selected) {
        if (props.selectLowest) {
            baseClass.push('bg-surface-container-lowest')
        } else if (props.selectLow) {
            baseClass.push('bg-surface-container-low')
        } else if (props.selectHigh) {
            baseClass.push('bg-surface-container-high')
        } else if (props.selectHighest) {
            baseClass.push('bg-surface-container-highest')
        } else if (props.selectPrimary) {
            baseClass.push('bg-primary-container')
        } else if (props.selectSecondary) {
            baseClass.push('bg-secondary-container')
        } else if (props.selectTertiary) {
            baseClass.push('bg-tertiary-container')
        } else {
            baseClass.push('bg-primary-container')
        }
    } else {
        if (props.container) {
            baseClass.push('bg-surface-container')
        } else if (props.containerLowest) {
            baseClass.push('bg-surface-container-lowest')
        } else if (props.containerLow) {
            baseClass.push('bg-surface-container-low')
        } else if (props.containerHigh) {
            baseClass.push('bg-surface-container-high')
        } else if (props.containerHighest) {
            baseClass.push('bg-surface-container-highest')
        } else if (props.containerPrimary) {
            baseClass.push('bg-primary-container')
        } else if (props.containerSecondary) {
            baseClass.push('bg-secondary-container')
        } else if (props.containerTertiary) {
            baseClass.push('bg-tertiary-container')
        }

        if (props.hover) {
            baseClass.push('hover:bg-secondary-container')
        } else if (props.hoverLowest) {
            baseClass.push('hover:bg-surface-container-lowest')
        } else if (props.hoverLow) {
            baseClass.push('hover:bg-surface-container-low')
        } else if (props.hoverHigh) {
            baseClass.push('hover:bg-surface-container-high')
        } else if (props.hoverHighest) {
            baseClass.push('hover:bg-surface-container-highest')
        } else if (props.hoverPrimary) {
            baseClass.push('hover:bg-primary-container')
        } else if (props.hoverSecondary) {
            baseClass.push('hover:bg-secondary-container')
        } else if (props.hoverTertiary) {
            baseClass.push('hover:bg-tertiary-container')
        }
    }

    if (props.rounded) {
        baseClass.push('rounded-xl md:rounded-2xl')
    } else if (props.roundedSm) {
        baseClass.push('rounded-xs md:rounded-sm')
    } else if (props.roundedMd) {
        baseClass.push('rounded-sm md:rounded-md')
    } else if (props.roundedLg) {
        baseClass.push('rounded-md md:rounded-lg')
    } else if (props.roundedXl) {
        baseClass.push('rounded-lg md:rounded-xl')
    } else if (props.rounded2xl) {
        baseClass.push('rounded-xl md:rounded-2xl')
    } else if (props.rounded3xl) {
        baseClass.push('rounded-2xl md:rounded-3xl')
    } else if (props.roundedFull) {
        baseClass.push('rounded-full')
    }

    if (props.noShrink) {
        baseClass.push('shrink-0')
    }

    if (props.desktopOnly) {
        baseClass.push('hidden', 'md:flex')
    } else if (props.mobileOnly) {
        baseClass.push('md:hidden')
    }
    return twMerge(additionalBaseClasses, baseClass, props.class)
}

