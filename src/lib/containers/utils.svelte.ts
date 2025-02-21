import type { Snippet } from "svelte";
import { twMerge, type ClassNameValue } from "tailwind-merge";

type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse"

export interface Props {
    overflow?: "scroll" | "wrap" | "wrap-reverse" | "clip";
    desktopOnly?: boolean
    mobileOnly?: boolean
    class?: ClassNameValue;
    children: Snippet
}

const defaultSizes = ['h-full', 'w-full']

export function flexClasses(props: Props, ...additionalBaseClasses: string[]) {
    let baseClass = ['flex', 'items-center']
    baseClass.push(...defaultSizes)
    switch (props.overflow) {
        case 'wrap':
            baseClass.push('flex-wrap')
            break
        case 'wrap-reverse':
            baseClass.push('flex-wrap-reverse')
            break
        case 'clip':
            baseClass.push('overflow-clip', 'flex-nowrap')
            break
        default:
            baseClass.push('overflow-auto', 'flex-nowrap')
    }
    if (props.desktopOnly) {
        baseClass.push('hidden', 'md:flex')
    } else if (props.mobileOnly) {
        baseClass.push('md:hidden')
    }
    return twMerge(baseClass, additionalBaseClasses, props.class)
}

