import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const exactRoutes = {
    '/': Home,
}

const partialRoutes = {
    '/user': UserProfile,
}

export const routes = {
    ...exactRoutes,
    ...partialRoutes,
}

export function getMatchingRoute() {
    const pathName = window.location.pathname;
    let RouteComponent: JSX.FunctionComponent<any> | undefined;

    if (Object.keys(exactRoutes).includes(pathName)) {
        RouteComponent = exactRoutes[pathName as keyof typeof exactRoutes];
    }

    if (!RouteComponent) {
        for (const [key, value] of Object.entries(partialRoutes)) {
            if (pathName.startsWith(key)) {
                RouteComponent = value;
                break;
            }
        }
    }

    if (!RouteComponent) {
        RouteComponent = NotFound;
    }

    return RouteComponent;
}
