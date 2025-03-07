type Justify = boolean | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'baseline';

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