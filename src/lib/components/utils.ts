export function newToggledHref(currentUrl: URL, href: string | undefined): string | undefined {
    if (!href) {
        return undefined;
    }

    if (!href.startsWith('?')) {
        return href;
    }

    const hrefParams = new URLSearchParams(href);
    const currentParams = new URLSearchParams(currentUrl.search);
    let newParams = new URLSearchParams(currentParams.toString());

    let allParamsPresent = true;

    for (const [key, value] of hrefParams) {
        if (currentParams.has(key)) {
            if (currentParams.get(key) !== value) {
                allParamsPresent = false;
                break;
            }
        } else {
            allParamsPresent = false;
            break;
        }
    }

    if (allParamsPresent) {
        for (const key of hrefParams.keys()) {
            newParams.delete(key);
        }
    } else {
        for (const [key, value] of hrefParams) {
            newParams.set(key, value);
        }
    }

    const newSearch = newParams.toString();
    const newUrl = new URL(currentUrl.toString());
    newUrl.search = newSearch;
    return newUrl.toString();
}

export function hrefIsToggled(currentUrl: URL, href: string | undefined): boolean {
    if (!href) {
        return false;
    }

    try {
        let fullHref = href
        if (fullHref != undefined && fullHref.startsWith('?')) {
            fullHref = currentUrl.pathname + fullHref;
        }
        const hrefUrl = new URL(fullHref, currentUrl.origin); // Ensure href is treated as relative to current origin.

        if (hrefUrl.pathname == currentUrl.pathname) {
            const hrefParams = hrefUrl.searchParams;
            const currentParams = currentUrl.searchParams;
            for (const [key, value] of hrefParams) {
                if (!currentParams.has(key) || currentParams.get(key) !== value) {
                    return false;
                }
            }
            return true;
        } else if (currentUrl.toString().startsWith(hrefUrl.toString().split('?')[0] + "/")) {
            return true;
        }
        return false;

    } catch (error) {
        // Handle cases where href is not a valid URL
        if (href.startsWith('?')) {
            const hrefParams = new URLSearchParams(href);
            const currentParams = currentUrl.searchParams;

            for (const [key, value] of hrefParams) {
                if (!currentParams.has(key) || currentParams.get(key) !== value) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}