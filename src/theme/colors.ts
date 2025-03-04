export type MainColor = "primary" | "secondary" | "tertiary" | "error"

export function TextColorClass(color?: MainColor, defaultColor: MainColor = "primary") {
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
        default:
            return "text-primary"
    }
}

export function BgColorClass(color?: MainColor, defaultColor: MainColor = "primary") {
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
        default:
            return "bg-primary"
    }
}

export function BgContainerColorClass(color?: MainColor, defaultColor: MainColor = "primary") {
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
        default:
            return "bg-primary-container"
    }
}

export function StrokeColorClass(color?: MainColor, defaultColor: MainColor = "primary") {
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
        default:
            return "stroke-primary"
    }
}