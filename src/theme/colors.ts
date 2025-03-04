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

export function OutlineColorClass(color?: OutlineColor, defaultColor: OutlineColor = "outline") {
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