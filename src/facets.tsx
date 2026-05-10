import { defineFacets } from "@carats/render";
import Changelog from "./pages/Changelog";
import Counter from "./pages/Counter";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

export default defineFacets({
    routes: {
        '/': Counter,
        '/changelog': Changelog
    },
    suspense: {
        notFound: NotFound,
        error: ErrorPage,
        loading: () => <div>💎 Loading...</div>,
    },
})