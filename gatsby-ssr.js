/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
}
if (typeof ResizeObserver === `undefined`) {
    await import(`resize-observer-polyfill`);
}