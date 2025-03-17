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


export type ContainerSize = "50px" | "100px" | "150px" | "200px" | "250px" | "300px" | "350px" | "400px" | "450px" | "500px" | "550px" | "600px" | "1/5" | "1/4" | "1/3" | "1/2" | "2/5" | "3/5" | "4/5" | "3/4" | "full"

export function ContainerHeightClass(size: ContainerSize) {
    switch (size) {
        case "50px":
            return 'h-[50px]'
        case "100px":
            return 'h-[100px]'
        case "150px":
            return 'h-[150px]'
        case "200px":
            return 'h-[200px]'
        case "250px":
            return 'h-[250px]'
        case "300px":
            return 'h-[300px]'
        case "350px":
            return 'h-[350px]'
        case "400px":
            return 'h-[400px]'
        case "450px":
            return 'h-[450px]'
        case "500px":
            return 'h-[500px]'
        case "550px":
            return 'h-[550px]'
        case "600px":
            return 'h-[600px]'
        case "1/5":
            return 'h-1/5'
        case "1/4":
            return 'h-1/4'
        case "1/3":
            return 'h-1/3'
        case "1/2":
            return 'h-1/2'
        case "2/5":
            return 'h-2/5'
        case "3/5":
            return 'h-3/5'
        case "4/5":
            return 'h-4/5'
        case "3/4":
            return 'h-3/4'
        case "full":
            return 'h-full'
        default:
            return ``
    }
}
export function ContainerWidthClass(size: ContainerSize) {
    switch (size) {
        case "50px":
            return 'w-[50px]'
        case "100px":
            return 'w-[100px]'
        case "150px":
            return 'w-[150px]'
        case "200px":
            return 'w-[200px]'
        case "250px":
            return 'w-[250px]'
        case "300px":
            return 'w-[300px]'
        case "350px":
            return 'w-[350px]'
        case "400px":
            return 'w-[400px]'
        case "450px":
            return 'w-[450px]'
        case "500px":
            return 'w-[500px]'
        case "550px":
            return 'w-[550px]'
        case "600px":
            return 'w-[600px]'
        case "1/5":
            return 'w-1/5'
        case "1/4":
            return 'w-1/4'
        case "1/3":
            return 'w-1/3'
        case "1/2":
            return 'w-1/2'
        case "2/5":
            return 'w-2/5'
        case "3/5":
            return 'w-3/5'
        case "4/5":
            return 'w-4/5'
        case "3/4":
            return 'w-3/4'
        case "full":
            return 'w-full'
        default:
            return ``
    }
}