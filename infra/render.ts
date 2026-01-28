import { transpile } from "jjsx";
import { getMatchingRoute } from "../src/route";

export function renderCurrentRoute() {
    clearHydrations();
    const RouteComponent = getMatchingRoute();
    render(RouteComponent({}));
}

export function render(Element: JSX.Element) {
    document.getElementById('app')!.innerHTML = transpile(Element);
    window.dispatchEvent(new Event('load'));
}

const cleanUps: VoidFunction[] = [];

export function hydrate(callback: () => VoidFunction) {
    function listener() {
        cleanUps.push(callback());
        window.removeEventListener('load', listener);
    }
    window.addEventListener('load', listener);
}

export function clearHydrations() {
    while (cleanUps.length) {
        cleanUps.pop()!();
    }
}

window.addEventListener("load", () => {
    document.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
        a.addEventListener("click", (e) => {
            const url = new URL(a.getAttribute("href") || '', window.location.origin);
            if (url.hostname === window.location.hostname && !a.download) {
                e.preventDefault();
                window.history.pushState({}, "", url);
                renderCurrentRoute();
            }
        });
    });
});