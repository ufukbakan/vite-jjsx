import { hydrate } from "../../infra/render";
import './navbar.css';

export default function Navigation() {
    hydrate(() => {
        console.log("navigation hydrated");
        return () => {};
    });
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/user/1">User</a>
        </nav>
    );
}