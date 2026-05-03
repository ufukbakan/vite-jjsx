import { defineFacets } from "@carats/render";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/ProfilePage";

export default defineFacets({
    routes: {
        '/': Home,
        '/user/:id': UserProfile,
    },
    suspense: {
        notFound: NotFound,
        loading: () => <div>💎 Loading...</div>,
    },
})