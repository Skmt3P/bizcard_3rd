import 'ress'

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === `undefined`) {
        await import(`intersection-observer`);
    }
    if (typeof ResizeObserver === `undefined`) {
        await import(`resize-observer-polyfill`);
    }
}