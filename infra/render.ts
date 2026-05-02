import { transpile } from "jjsx";
import { getMatchingRouteComponent } from "../src/route";
import { clearHydrations } from "./hydrate";

export function renderCurrentRoute() {
    clearHydrations().then(() => {
        const RouteComponent = getMatchingRouteComponent();
        render(RouteComponent({}));
    });
}

export function render(Element: JSX.Element) {
    document.getElementById('app')!.innerHTML = transpile(Element);
    window.dispatchEvent(new Event('load'));
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