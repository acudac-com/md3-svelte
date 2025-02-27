import type { Snippet } from "svelte"
import { twMerge, type ClassNameValue } from "tailwind-merge"

export interface Props {
    desktopOnly?: boolean
    mobileOnly?: boolean
    class?: ClassNameValue
    children: Snippet
}

export function containerClass(props: Props, ...containerClasses: string[]) {
    let baseClass = ['flex', 'items-center', 'relative']
    if (props.desktopOnly) {
        baseClass.push('hidden', 'md:flex')
    } else if (props.mobileOnly) {
        baseClass.push('md:hidden')
    }
    return twMerge(baseClass, containerClasses, props.class)
}

/*
Row
Column
FittedRow
FittedColumn
FullRow
FullColumn
ScrollableRow
ScrollableColumn
JustifiedRow
JustifiedColumn
AroundJustifiedRow
AroundJustifiedColumn
EndJustifiedRow
EndJustifiedColumn
EvenlyJustifiedRow
EvenlyJustifiedColumn
CentreJustifiedRow
CentreJustifiedColumn
StretchJustifiedRow
StretchJustifiedColumn
*/