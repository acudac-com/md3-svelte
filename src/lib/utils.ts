export type Justify = boolean | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'baseline';
export type JustifyItems = "start" | "end" | "center" | "stretch";
export function JustifyClass(justify?: Justify) {
    if (justify == true) {
        return 'justify-between'
    } else {
        switch (justify) {
            case 'end':
                return 'justify-end';
            case 'center':
                return 'justify-center';
            case 'between':
                return 'justify-between';
            case 'around':
                return 'justify-around';
            case 'evenly':
                return 'justify-evenly';
            case 'stretch':
                return 'justify-stretch';
            case 'baseline':
                return 'justify-baseline';
            default:
                return '';
        }
    }
}

export function JustifyItemsClass(justify?: JustifyItems) {
    switch (justify) {
        case 'start':
            return 'justify-items-start';
        case 'end':
            return 'justify-items-end';
        case 'center':
            return 'justify-items-center';
        case 'stretch':
            return 'justify-items-stretch';
        default:
            return '';
    }
}

export function JustifySelf(justify?: JustifyItems) {
    switch (justify) {
        case 'start':
            return 'justify-self-start';
        case 'end':
            return 'justify-self-end';
        case 'center':
            return 'justify-self-center';
        case 'stretch':
            return 'justify-self-stretch';
        default:
            return '';
    }
}