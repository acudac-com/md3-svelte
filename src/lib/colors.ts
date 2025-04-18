export type MainColor = "primary" | "secondary" | "tertiary" | "error" | "surface"
export type ContainerColor = "primary-container" | "secondary-container" | "tertiary-container" | "error-container"
export type SurfaceColor = "surface-container" | "surface-container-lowest" | "surface-container-low" | "surface-container-highest" | "surface-container-high"
export type Color = MainColor | ContainerColor | SurfaceColor
export type OutlineColor = "outline" | "outline-variant" | Color

export function TextColorClass(color?: Color, defaultColor: Color = "primary") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "text-primary"
        case "secondary":
            return "text-secondary"
        case "tertiary":
            return "text-tertiary"
        case "error":
            return "text-error"
        case "surface":
            return "text-surface"
        case "primary-container":
            return "text-primary-container"
        case "secondary-container":
            return "text-secondary-container"
        case "tertiary-container":
            return "text-tertiary-container"
        case "error-container":
            return "text-error-container"
        case "surface-container":
            return "text-surface-container"
        case "surface-container-lowest":
            return "text-surface-container-lowest"
        case "surface-container-low":
            return "text-surface-container-low"
        case "surface-container-highest":
            return "text-surface-container-highest"
        case "surface-container-high":
            return "text-surface-container-high"
        default:
            return "text-primary"
    }
}


export function AccentColorClass(color?: Color, defaultColor: Color = "primary") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "accent-primary"
        case "secondary":
            return "accent-secondary"
        case "tertiary":
            return "accent-tertiary"
        case "error":
            return "accent-error"
        case "surface":
            return "accent-surface"
        case "primary-container":
            return "accent-primary-container"
        case "secondary-container":
            return "accent-secondary-container"
        case "tertiary-container":
            return "accent-tertiary-container"
        case "error-container":
            return "accent-error-container"
        case "surface-container":
            return "accent-surface-container"
        case "surface-container-lowest":
            return "accent-surface-container-lowest"
        case "surface-container-low":
            return "accent-surface-container-low"
        case "surface-container-highest":
            return "accent-surface-container-highest"
        case "surface-container-high":
            return "accent-surface-container-high"
        default:
            return "accent-primary"
    }
}

export function BorderColorClass(color?: OutlineColor, defaultColor: OutlineColor = "outline") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "border-primary"
        case "secondary":
            return "border-secondary"
        case "tertiary":
            return "border-tertiary"
        case "error":
            return "border-error"
        case "surface":
            return "border-surface"
        case "primary-container":
            return "border-primary-container"
        case "secondary-container":
            return "border-secondary-container"
        case "tertiary-container":
            return "border-tertiary-container"
        case "error-container":
            return "border-error-container"
        case "surface-container":
            return "border-surface-container"
        case "surface-container-lowest":
            return "border-surface-container-lowest"
        case "surface-container-low":
            return "border-surface-container-low"
        case "surface-container-highest":
            return "border-surface-container-highest"
        case "surface-container-high":
            return "border-surface-container-high"
        case "outline":
            return "border-outline"
        case "outline-variant":
            return "border-outline-variant"
        default:
            return "border-outline"
    }
}

export function OutlineColorClass(color?: OutlineColor, defaultColor: OutlineColor = "outline") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "outline-primary"
        case "secondary":
            return "outline-secondary"
        case "tertiary":
            return "outline-tertiary"
        case "error":
            return "outline-error"
        case "surface":
            return "outline-surface"
        case "primary-container":
            return "outline-primary-container"
        case "secondary-container":
            return "outline-secondary-container"
        case "tertiary-container":
            return "outline-tertiary-container"
        case "error-container":
            return "outline-error-container"
        case "surface-container":
            return "outline-surface-container"
        case "surface-container-lowest":
            return "outline-surface-container-lowest"
        case "surface-container-low":
            return "outline-surface-container-low"
        case "surface-container-highest":
            return "outline-surface-container-highest"
        case "surface-container-high":
            return "outline-surface-container-high"
        case "outline":
            return "outline-outline"
        case "outline-variant":
            return "outline-outline-variant"
        default:
            return "outline-outline"
    }
}

export function TextOnColorClass(color?: MainColor | ContainerColor, defaultColor: MainColor | ContainerColor = "primary") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "text-on-primary"
        case "secondary":
            return "text-on-secondary"
        case "tertiary":
            return "text-on-tertiary"
        case "error":
            return "text-on-error"
        case "surface":
            return "text-on-surface"
        case "primary-container":
            return "text-on-primary-container"
        case "secondary-container":
            return "text-on-secondary-container"
        case "tertiary-container":
            return "text-on-tertiary-container"
        case "error-container":
            return "text-on-error-container"
        default:
            return "text-on-primary"
    }
}

export function OutlineOnColorClass(color?: MainColor | ContainerColor, defaultColor: MainColor | ContainerColor = "primary") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "outline-on-primary"
        case "secondary":
            return "outline-on-secondary"
        case "tertiary":
            return "outline-on-tertiary"
        case "error":
            return "outline-on-error"
        case "surface":
            return "outline-on-surface"
        case "primary-container":
            return "outline-on-primary-container"
        case "secondary-container":
            return "outline-on-secondary-container"
        case "tertiary-container":
            return "outline-on-tertiary-container"
        case "error-container":
            return "outline-on-error-container"
        default:
            return "outline-on-primary"
    }
}

export function TextOnContainerColorClass(color?: MainColor, defaultColor: MainColor = 'primary') {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "text-on-primary-container"
        case "secondary":
            return "text-on-secondary-container"
        case "tertiary":
            return "text-on-tertiary-container"
        case "error":
            return "text-on-error-container"
        case "surface":
            return "text-on-surface-container"
        default:
            return "text-on-primary-container"
    }
}

export function BgColorClass(color?: Color, defaultColor: Color = "surface") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "bg-primary"
        case "secondary":
            return "bg-secondary"
        case "tertiary":
            return "bg-tertiary"
        case "error":
            return "bg-error"
        case "surface":
            return "bg-surface"
        case "primary-container":
            return "bg-primary-container"
        case "secondary-container":
            return "bg-secondary-container"
        case "tertiary-container":
            return "bg-tertiary-container"
        case "error-container":
            return "bg-error-container"
        case "surface-container":
            return "bg-surface-container"
        case "surface-container-lowest":
            return "bg-surface-container-lowest"
        case "surface-container-low":
            return "bg-surface-container-low"
        case "surface-container-highest":
            return "bg-surface-container-highest"
        case "surface-container-high":
            return "bg-surface-container-high"
        default:
            return "bg-primary"
    }
}

export function BgHoverColorClass(toggled: boolean, color?: Color, defaultColor: Color = "surface") {
    if (!color) color = defaultColor
    if (!toggled) {
        switch (color) {
            case "primary":
                return "hover:bg-primary/15"
            case "secondary":
                return "hover:bg-primary/15"
            case "tertiary":
                return "hover:bg-tertiary/15"
            case "error":
                return "hover:bg-error/15"
            case "surface":
                return "hover:bg-surface/15"
            case "primary-container":
                return "hover:bg-primary-container/15"
            case "secondary-container":
                return "hover:bg-secondary-container/15"
            case "tertiary-container":
                return "hover:bg-tertiary-container/15"
            case "error-container":
                return "hover:bg-error-container/15"
            case "surface-container":
                return "hover:bg-surface-container/15"
            case "surface-container-lowest":
                return "hover:bg-surface-container-lowest/15"
            case "surface-container-low":
                return "hover:bg-surface-container-low/15"
            case "surface-container-highest":
                return "hover:bg-surface-container-highest/15"
            case "surface-container-high":
                return "hover:bg-surface-container-high/15"
            default:
                return "hover:bg-primary/15"
        }
    } else {
        switch (color) {
            case "primary":
                return "hover:bg-primary/85"
            case "secondary":
                return "hover:bg-primary/85"
            case "tertiary":
                return "hover:bg-tertiary/85"
            case "error":
                return "hover:bg-error/85"
            case "surface":
                return "hover:bg-surface/85"
            case "primary-container":
                return "hover:bg-primary-container/85"
            case "secondary-container":
                return "hover:bg-secondary-container/85"
            case "tertiary-container":
                return "hover:bg-tertiary-container/85"
            case "error-container":
                return "hover:bg-error-container/85"
            case "surface-container":
                return "hover:bg-surface-container/85"
            case "surface-container-lowest":
                return "hover:bg-surface-container-lowest/85"
            case "surface-container-low":
                return "hover:bg-surface-container-low/85"
            case "surface-container-highest":
                return "hover:bg-surface-container-highest/85"
            case "surface-container-high":
                return "hover:bg-surface-container-high/85"
            default:
                return "hover:bg-primary/85"
        }
    }
}

export function BgContainerColorClass(color?: MainColor, defaultColor: MainColor = "surface") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "bg-primary-container"
        case "secondary":
            return "bg-secondary-container"
        case "tertiary":
            return "bg-tertiary-container"
        case "error":
            return "bg-error-container"
        case "surface":
            return "bg-surface-container"
        default:
            return "bg-primary-container"

    }
}

export function StrokeColorClass(color?: Color, defaultColor: Color = "primary") {
    if (!color) color = defaultColor
    switch (color) {
        case "primary":
            return "stroke-primary"
        case "secondary":
            return "stroke-secondary"
        case "tertiary":
            return "stroke-tertiary"
        case "error":
            return "stroke-error"
        case "surface":
            return "stroke-surface"
        case "primary-container":
            return "stroke-primary-container"
        case "secondary-container":
            return "stroke-secondary-container"
        case "tertiary-container":
            return "stroke-tertiary-container"
        case "error-container":
            return "stroke-error-container"
        case "surface-container":
            return "stroke-surface-container"
        case "surface-container-lowest":
            return "stroke-surface-container-lowest"
        case "surface-container-low":
            return "stroke-surface-container-low"
        case "surface-container-highest":
            return "stroke-surface-container-highest"
        case "surface-container-high":
            return "stroke-surface-container-high"
        default:
            return "stroke-primary"
    }
}