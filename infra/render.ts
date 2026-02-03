import { transpile } from "jjsx";
import { getMatchingRoute } from "../src/route";

export function renderCurrentRoute() {
    clearHydrations().then(() => {
        const RouteComponent = getMatchingRoute();
        render(RouteComponent({}));
    });
}

export function render(Element: JSX.Element) {
    document.getElementById('app')!.innerHTML = transpile(Element);
    window.dispatchEvent(new Event('load'));
}

type ClearCallback = () => void | Promise<void>;
type HydrationCallback = () => Promise<ClearCallback> | Promise<void> | ClearCallback | void;

const cleanUps: ClearCallback[] = [];

export function hydrate(callback: HydrationCallback) {
    if (typeof window !== "undefined") {
        async function CombinedCallback() {
            const cleaner = await callback();
            if (cleaner) {
                cleanUps.push(cleaner);
            }
            window.removeEventListener("load", CombinedCallback);
        }
        window.addEventListener("load", CombinedCallback);
    }
}

export async function clearHydrations() {
    await Promise.allSettled(cleanUps.map(cleanUp => cleanUp()));
    cleanUps.length = 0;
    return;
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